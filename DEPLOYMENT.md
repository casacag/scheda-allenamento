# 🚀 Guida al Deployment

## GitHub Pages (Configurato ✅)

Il progetto è già configurato per il deploy automatico su GitHub Pages!

### Setup iniziale

1. **Crea un repository su GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TUO-USERNAME/NOME-REPO.git
   git push -u origin main
   ```

2. **Abilita GitHub Pages**
   - Vai su Settings → Pages
   - Source: **GitHub Actions**
   - Salva

3. **Deploy automatico**
   - Ogni push su `main` triggera il deploy automatico
   - Il sito sarà disponibile su: `https://TUO-USERNAME.github.io/NOME-REPO/`

### Se usi un repository personale (username.github.io)

Se il tuo repo si chiama `username.github.io`, modifica `next.config.mjs`:

```js
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  // Commenta o rimuovi basePath
  // basePath: '/scheda',
};
```

### Se usi un repository con nome custom (es: /scheda)

Modifica `next.config.mjs`:

```js
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  basePath: '/NOME-DEL-TUO-REPO', // es: '/scheda'
};
```

---

## ⚡ Vercel (CONSIGLIATO)

**Vercel** è la piattaforma ufficiale di Next.js e offre:
- Deploy automatico ad ogni push
- Preview automatiche per ogni PR
- Performance ottimali
- CDN globale
- Piano gratuito generoso

### Setup Vercel

1. Vai su [vercel.com](https://vercel.com)
2. Registrati con il tuo account GitHub
3. Click su "Add New Project"
4. Importa il repository
5. Click su "Deploy"

Fatto! Il tuo sito sarà live su `https://tuo-progetto.vercel.app`

**Configurazione automatica**: Vercel riconosce automaticamente Next.js e configura tutto.

---

## 🌐 Netlify

Altra ottima alternativa gratuita:

1. Vai su [netlify.com](https://www.netlify.com)
2. "Add new site" → "Import an existing project"
3. Connetti GitHub e seleziona il repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Deploy

---

## 📊 Confronto Piattaforme

| Feature | GitHub Pages | Vercel | Netlify |
|---------|-------------|---------|---------|
| Gratis | ✅ | ✅ | ✅ |
| Next.js ottimizzato | ⚠️ (export only) | ✅ | ✅ |
| Deploy automatico | ✅ | ✅ | ✅ |
| Custom domain | ✅ | ✅ | ✅ |
| Analytics | ❌ | ✅ | ✅ |
| Preview PR | ⚠️ | ✅ | ✅ |
| Facilità setup | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

### Raccomandazione

- **Per questo progetto**: Vercel o GitHub Pages vanno benissimo
- **Più semplice**: Vercel (zero configurazione)
- **Più controllo**: GitHub Pages (già configurato nel progetto)

---

## 🔧 Test locale del build statico

Prima di deployare, testa il build:

```bash
# Build per produzione
npm run build

# Serve il build localmente (installa serve se necessario)
npx serve@latest out
```

Apri http://localhost:3000 per vedere il sito statico.

---

## ⚠️ Note importanti

**GitHub Pages Limitazioni:**
- Solo siti statici (no server-side rendering)
- No API routes di Next.js
- No Incremental Static Regeneration

**Questo progetto funziona perfettamente** perché usa solo:
- ✅ Static Generation (SSG)
- ✅ Client-side state (localStorage)
- ✅ Nessuna API route
- ✅ Nessun server-side rendering

---

## 🎯 Quick Commands

```bash
# Deploy su GitHub Pages
git add .
git commit -m "Update"
git push origin main
# Il deploy parte automaticamente!

# Deploy su Vercel (con Vercel CLI)
npm i -g vercel
vercel
```

Buon deployment! 🚀

