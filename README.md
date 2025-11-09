# 💪 Scheda Fitness Home

Un'applicazione web moderna per seguire la tua scheda di allenamento settimanale a casa, con video YouTube integrati e tracciamento dei progressi.

## ✨ Caratteristiche

- 📅 **Scheda settimanale completa** - 7 giorni di allenamento strutturato
- 🎥 **Video YouTube integrati** - Ogni esercizio ha un video dimostrativo
- ✅ **Tracciamento progressi** - Spunta gli esercizi completati (persistenza in localStorage)
- 🌓 **Tema chiaro/scuro** - Passa tra tema chiaro e scuro con un click
- 📱 **Responsive design** - Perfetto su mobile, tablet e desktop
- 🔍 **Ricerca e filtri** - Trova facilmente gli esercizi per gruppo muscolare o difficoltà
- ⚡ **Performance ottimizzate** - SSG con Next.js 14 per caricamenti ultra-rapidi
- ♿ **Accessibilità AA** - Navigabile da tastiera, contrasti ottimali

## 🚀 Quick Start

### Prerequisiti

- Node.js 18+ e npm/yarn/pnpm

### Installazione

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

### Build per produzione

```bash
# Crea la build ottimizzata (export statico)
npm run build

# Il sito statico sarà nella cartella /out
```

### 🌐 Deployment

Il progetto è configurato per essere deployato su:
- **GitHub Pages** (già configurato con GitHub Actions)
- **Vercel** (consigliato - zero config)
- **Netlify**

Vedi [DEPLOYMENT.md](./DEPLOYMENT.md) per istruzioni dettagliate.

## 📁 Struttura del Progetto

```
scheda-fitness-home/
├── app/                      # Next.js App Router
│   ├── giorno/[slug]/       # Pagine dettaglio giorno
│   ├── scheda/              # Pagina con tutti gli esercizi
│   ├── layout.tsx           # Layout principale
│   ├── page.tsx             # Homepage
│   └── globals.css          # Stili globali
├── components/              # Componenti React
│   ├── DayCard.tsx         # Card giorno con progress bar
│   ├── ExerciseCard.tsx    # Card esercizio con video modal
│   ├── ThemeToggle.tsx     # Toggle tema chiaro/scuro
│   └── YouTubePlayer.tsx   # Player YouTube responsive
├── data/
│   └── schedule.json        # Dati della scheda settimanale
├── types.ts                 # TypeScript types
└── package.json
```

## 🎯 Pagine

- **`/`** - Homepage con panoramica settimanale e progress
- **`/giorno/[lunedi...domenica]`** - Dettaglio esercizi per giorno
- **`/scheda`** - Lista completa esercizi con ricerca/filtri

## 🔧 Personalizzazione

### Modificare la scheda di allenamento

Edita il file `data/schedule.json` per cambiare esercizi, video YouTube, serie, ripetizioni, ecc.

```json
{
  "id": "nuovo-esercizio",
  "title": "Nome esercizio",
  "muscleGroup": "petto|spalle|schiena|gambe|core|braccia|full",
  "youtubeId": "ID_VIDEO_YOUTUBE",
  "sets": 3,
  "reps": "12",
  "restSec": 60,
  "difficulty": "base|intermedio|avanzato",
  "equipment": ["manubri 6kg"],
  "notes": "Note utili per l'esecuzione"
}
```

### Cambiare i colori

Modifica `tailwind.config.ts` per personalizzare la palette colori.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Persistenza**: localStorage (client-side)
- **Video**: YouTube iframe API (no-cookie domain)

## 📊 Performance

L'app è ottimizzata per:
- ⚡ LCP < 2.5s su connessioni 4G
- 📦 Static Site Generation (SSG)
- 🎨 Dark mode con CSS classes (no flash)
- 🖼️ Lazy loading per video YouTube

## ♿ Accessibilità

- Contrasti colore conformi AA WCAG
- Navigazione completa da tastiera
- Focus rings visibili
- Aria labels su controlli interattivi
- Semantic HTML

## 📝 Note

- **localStorage**: I progressi sono salvati localmente nel browser. Se cancelli i dati del browser perderai i progressi.
- **Video YouTube**: Richiede connessione internet per visualizzare i video.
- **Browser support**: Chrome, Firefox, Safari, Edge (versioni moderne)

## 🤝 Contribuire

Sentiti libero di:
1. Forkare il progetto
2. Creare un branch per la tua feature
3. Committare le modifiche
4. Pushare al branch
5. Aprire una Pull Request

## ⚠️ Disclaimer

Consulta sempre un medico o un professionista del fitness prima di iniziare un nuovo programma di allenamento. Gli esercizi in questa app sono solo a scopo informativo.

## 📄 Licenza

Progetto personale - Uso libero

---

**Buon allenamento! 💪**

