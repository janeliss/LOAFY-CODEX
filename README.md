# Loafy Cinematic Experience

## Install
```bash
npm install
npm install react react-dom react-router-dom framer-motion lenis three @react-three/fiber @react-three/drei
npm install -D vite typescript @types/react @types/react-dom @vitejs/plugin-react tailwindcss postcss autoprefixer
```

## Run locally
```bash
npm run dev
```

## Deploy on Vercel

### Option A: GitHub import (recommended)
1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import `janeliss/LOAFY-CODEX`.
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build`
5. Output directory: `dist`
6. Install command: `npm install`
7. Click **Deploy**.

### Option B: Vercel CLI
```bash
npm i -g vercel
vercel
vercel --prod
```

### SPA routing note (React Router)
Create `vercel.json` so deep links like `/product/:slug` work on refresh:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Post-deploy checks
- Open `/`, `/shop`, `/science`, `/checkout`, and one product URL directly.
- Verify 3D hero fallback behavior by disabling WebGL in browser dev settings.
- Confirm cart persists after refresh (`localStorage`).

Built with React + Vite + TypeScript + TailwindCSS + Framer Motion + Lenis + Three.js.
