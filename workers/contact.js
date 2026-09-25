const ALLOWED_TYPES = new Set(['Investor','Government or defence institution','Industry or technology partner','Research partner','Other','Pemerintah atau institusi pertahanan','Mitra industri atau teknologi','Mitra riset','Lainnya']);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default {
  async fetch(request, env) {
    const origin = 'https://jalaranu.org';
    const cors = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
      'Content-Type': 'application/json',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ ok: false, error: 'Method not allowed' }), {
        status: 405,
        headers: cors,
      });
    }

    try {
      const body = await request.json();
      const { turnstileToken, name, org, email, type, message } = body || {};

      if (
        typeof turnstileToken !== 'string' ||
        turnstileToken.trim().length === 0 ||
        turnstileToken.length > 2048
      ) {
        return new Response(JSON.stringify({ ok: false, error: 'Captcha failed' }), {
          status: 400,
          headers: cors,
        });
      }

      const validName = typeof name === 'string' && name.trim().length > 0 && name.length <= 200;
      const validOrg = typeof org === 'string' && org.trim().length > 0 && org.length <= 200;
      const validEmail = typeof email === 'string' && email.trim().length > 0 && email.length <= 200 && EMAIL_RE.test(email.trim());
      const validType = typeof type === 'string' && ALLOWED_TYPES.has(type);
      const validMessage = typeof message === 'string' && message.trim().length > 0 && message.length <= 5000;

      if (!validName || !validOrg || !validEmail || !validType || !validMessage) {
        return new Response(JSON.stringify({ ok: false, error: 'Missing fields' }), {
          status: 400,
          headers: cors,
        });
      }

      const ip = request.headers.get('CF-Connecting-IP') || '';
      const verify = new URLSearchParams({
        secret: env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      });
      if (ip) verify.append('remoteip', ip);

      const vr = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: verify,
      });
      const vj = await vr.json();
      if (!vj.success) {
        return new Response(JSON.stringify({ ok: false, error: 'Captcha failed' }), {
          status: 400,
          headers: cors,
        });
      }

      const sendRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lib_version: '4.4.1',
          user_id: env.EMAILJS_PUBLIC_KEY,
          service_id: 'service_1erp3i4',
          template_id: 'template_uystsfp',
          template_params: {
            title: 'Website partnership enquiry',
            name: String(name).slice(0, 200),
            time: new Date().toISOString(),
            OrganisationName: String(org).slice(0, 200),
            PartnershipType: String(type).slice(0, 200),
            message: String(message).slice(0, 5000),
            IPaddr: ip,
            reply_to: String(email).slice(0, 200),
          },
        }),
      });

      const sendText = await sendRes.text();
      if (!sendRes.ok) {
        console.log(sendText);
        return new Response(
          JSON.stringify({ ok: false, error: 'Email service error' }),
          { status: 502, headers: cors }
        );
      }

      return new Response(JSON.stringify({ ok: true }), { status: 200, headers: cors });
    } catch (e) {
      return new Response(JSON.stringify({ ok: false, error: 'Invalid request' }), {
        status: 400,
        headers: cors,
      });
    }
  },
};
