import React from "react";
import { useEffect } from "react";

export default function Redirect({ pageContext }) {
  const { to } = pageContext;

  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <main className="redirect-page" style={{ maxWidth: "720px", margin: "0 auto", padding: "96px 16px" }}>
      <noscript>
        <meta httpEquiv="refresh" content={`0;url=${to}`} />
      </noscript>
      <h1>Redirecting…</h1>
      <p>
        If you are not redirected automatically, <a href={to}>continue here</a>.
      </p>
    </main>
  );
}
