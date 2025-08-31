# Kenee Universe — Link in Bio

Fork dari template **OpenBio (Next.js + Tailwind)** dengan beberapa penyesuaian:
- Tambah **Lottie** (bunga-bunga) via web component `@dotlottie/player-component`
- Pusat konfigurasi link di **`src/data/links.ts`**
- Branding diganti ke **Kenee Universe**

## Cara Jalanin (Lokal)

```bash
# 1) install
npm install

# 2) run dev
npm run dev
# buka http://localhost:3000
```

## Edit Link
Semua link ada di `src/data/links.ts`. Ganti `href` dan `label` sesuai punyamu.

## Ganti Lottie
Di `src/app/page.tsx`, cari `<dotlottie-player src="...">` lalu ganti `src` dengan link `.lottie` punyamu.

## Deploy
Paling gampang pakai **Vercel**:
1. Push repo ini ke GitHub
2. Import ke Vercel
3. Deploy

---

Repo asli: https://github.com/mineraleyt/openbio
