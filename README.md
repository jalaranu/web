# Jalaranu: Website

Website bilingual (EN/ID) untuk konsep datacenter bawah danau (underlake datacenter) Jalaranu.
Dibangun dengan Gatsby 5, deploy otomatis ke GitHub Pages (custom domain `jalaranu.org`) via GitHub Actions.

## Pengembangan lokal

```sh
npm install
npm run dev      # gatsby develop di http://localhost:8787
npm run build    # build produksi ke public/
npm run serve    # preview hasil build di http://localhost:8787
```

## Deploy

Push ke branch `main` memicu workflow `.github/workflows/deploy.yml` yang membuild dan
menerbitkan ke branch `gh-pages` (GitHub Pages). Custom domain: `jalaranu.org` (DNS Cloudflare:
4 A record apex ke IP GitHub Pages, CNAME `www` → `jalaranu.github.io`; DNS-only).

## Struktur

- `content/en.json`, `content/id.json`: seluruh salinan publik (teks, CTA, SEO, form). Slug URL
  seragam bahasa Inggris untuk kedua bahasa (`/id/technology/`, `/id/partnerships/`, dst).
- `src/templates/Page.js`: satu template untuk semua halaman; `src/pages/404.js` + redirect root.
- `static/assets/`: logo brand dan figur Matano (site section + struktur 4-panel), salinan dari
  folder `Matano_*` dan `brand-aset/`.
- Tema: swiss-grid "sharp card": radius 0, tanpa shadow, border hairline, aksen merah `#EF4136`.

## Formulir kemitraan

Form di `/en/partnerships/#contact` melakukan POST JSON ke `window.JLR_FORM_ENDPOINT`.
Tanpa endpoint terkonfigurasi, submit selalu menampilkan status gagal (tidak pernah sukses palsu).
Set endpoint saat backend tersedia, mis. melalui file injeksi kecil atau env build.

## Konten & konfirmasi

Bagian ber-tanda `[KONFIRMASI]` di `content_*.md` (status tahap, tim, email kontak, dokumen)
belum ditampilkan sebagai klaim; salinan konservatif dipakai sampai dikonfirmasi.
