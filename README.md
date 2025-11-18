# 🏛️ Rajasthan: The Living Museum

> *A scroll-based digital journey through Rajasthan's untold stories, where water sings, marble hums, puppets rebel, and frescoes imagine science fiction.*

An immersive, interactive web experience that combines comic-style storytelling, rich cultural narratives, and ambient soundscapes to reveal the hidden histories and traditions of Rajasthan's most fascinating regions.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://your-demo-url.vercel.app)
[![Built with Vite](https://img.shields.io/badge/built%20with-Vite-646CFF?logo=vite)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?logo=typescript)](https://www.typescriptlang.org)

---

## 📖 About

**Rajasthan: The Living Museum** is a digital artefact that transforms cultural education into an engaging, scroll-based narrative experience. Unlike traditional museum websites, this project draws inspiration from:

- **Neal.fun's** smooth parallax storytelling
- **Amar Chitra Katha's** bold line art and visual narrative style
- **Japanese vertical scroll** storytelling traditions
- **Shekhawati fresco** color palettes and aesthetics

The experience guides users through **11 distinct regions** of Rajasthan, each with its own:
- 🎨 **Comic-style panels** illustrating cultural stories
- 🎵 **Background music** featuring traditional Rajasthani music (Ghoomar)
- 📜 **Historical context** with accurate, engaging narratives
- 🖼️ **Cultural imagery** showcasing traditional arts, crafts, and customs
- ✨ **Smooth animations** and scroll-triggered reveals

---

## 🌍 Featured Regions

1. **Shekhawati** — The Surreal Open-Air Art Gallery (Fresco art & anachronistic murals)
2. **Bundi** — The City Where Water Spoke (Stepwells & acoustic engineering)
3. **Jodhpur** — The Blue City of Songs and Memory (Manganiyar musicians & oral genealogies)
4. **Mehrangarh Fort** — The Fort That Never Fell (Legendary sacrifices & curses)
5. **Udaipur** — City of Mirrors and Lakes (Mirror signaling systems)
6. **Barmer** — The Puppets That Fought Kings (Kathputli satire traditions)
7. **Jaisalmer** — The Desert Mirage City (Desert navigation & Silk Route)
8. **Pushkar** — The Lotus of Creation (Sacred lake & Brahma temple)
9. **Chittorgarh** — The Flame of Courage (Jauhar & Saka traditions)
10. **Ranakpur** — The Marble Symphony (1,444 acoustically tuned pillars)
11. **Rural Dhani** — Heart of the Desert (Village life & sustainable practices)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/Laksh-Mendpara/Digital-Society.git
cd Digital-Society

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5000` (or the port shown in your terminal).

---

## 🛠️ Tech Stack

### Frontend
- **React 18** — Component-based UI library
- **TypeScript** — Type-safe JavaScript
- **Vite** — Lightning-fast build tool and dev server
- **Tailwind CSS** — Utility-first CSS framework
- **Framer Motion** — Animation library for smooth transitions
- **Wouter** — Lightweight client-side routing

### UI Components
- **shadcn/ui** — Accessible, customizable component library built on:
  - **Radix UI** — Unstyled, accessible primitives
  - **Lucide React** — Beautiful icon library

### Backend
- **Express** — Node.js web framework
- **Drizzle ORM** — TypeScript-first ORM
- **PostgreSQL** (via Neon) — Serverless database
- **Express Session** — Session management

### State & Data Management
- **TanStack Query** (React Query) — Server state management
- **Zod** — Schema validation

### Development Tools
- **ESBuild** — JavaScript bundler
- **tsx** — TypeScript execution for Node.js
- **Drizzle Kit** — Database migrations

---

## 📂 Project Structure

```
Digital-Society/
├── client/                    # Frontend application
│   ├── public/               # Static assets
│   │   └── ghoomar.mp3      # Background music
│   └── src/
│       ├── components/       # React components
│       │   ├── ui/          # shadcn/ui components
│       │   ├── HeroSection.tsx
│       │   ├── RegionalSection.tsx
│       │   ├── ComicPanel.tsx
│       │   ├── BackgroundMusic.tsx
│       │   └── ClosingSection.tsx
│       ├── pages/           # Page components
│       │   ├── Home.tsx
│       │   └── not-found.tsx
│       ├── lib/             # Utility functions
│       │   ├── utils.ts
│       │   ├── queryClient.ts
│       │   └── audioContext.ts
│       ├── hooks/           # Custom React hooks
│       ├── App.tsx          # Main app component
│       └── main.tsx         # Entry point
├── server/                  # Backend application
│   ├── index.ts            # Express server
│   ├── routes.ts           # API routes
│   └── storage.ts          # Storage utilities
├── shared/                 # Shared code
│   └── schema.ts          # Zod schemas
├── attached_assets/        # Design docs & generated images
│   └── generated_images/  # Comic panel illustrations
├── design_guidelines.md    # Design system documentation
├── vite.config.ts         # Vite configuration
└── tailwind.config.ts     # Tailwind configuration
```

---

## 🎨 Design System

### Color Palette

- **Shekhawati Fresco:** Dusty pinks (#F4C2C2), deep indigos (#2E3A8C, #4A5899), terracotta (#D4846A, #C96449)
- **Desert Neutrals:** Warm sand (#EDD5B3), golden sandstone (#D4AF6A), soft whites (#F9F6F1)
- **Regional Accents:** Jodhpur blue (#5B7FA8), Udaipur aqua (#B8D4E8), Jaisalmer gold (#D4AF6A)

### Typography

- **Display Font:** Spectral/Merriweather (headings, 2.5rem - 4rem)
- **Serif Font:** Crimson Text (museum labels, uppercase tracking)
- **Sans-serif:** Inter/Source Sans (captions, body text, 1rem - 1.125rem)

### Animations

- Scroll-triggered fade-ins and slide effects
- Parallax background movements
- Smooth color transitions between sections
- Subtle hover effects on interactive elements

---

## 🎵 Audio Features

The application includes a **continuous background music player** that:
- Plays traditional Rajasthani Ghoomar music throughout the experience
- Auto-starts after user interaction (browser autoplay policy)
- Features a fixed control button in the bottom-right corner
- Allows users to mute/unmute at any time
- Runs at 30% volume for a pleasant ambient experience

---

## 📦 Build & Deploy

### Production Build

```bash
# Build both frontend and backend
npm run build

# Start production server
npm start
```

### Deploying to Vercel

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Deploy!

Vercel will automatically detect the Vite configuration and optimize the deployment.

---

## 🧪 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run check     # Type-check TypeScript
npm run db:push   # Push database schema changes
```

---

## 🎯 Features

### User Experience
- ✅ Smooth, scroll-based narrative flow
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Progressive content reveal with animations
- ✅ Continuous background music with controls
- ✅ Accessible UI components (Radix UI)
- ✅ Fast page loads (Vite optimization)

### Content
- ✅ 11 richly detailed regional stories
- ✅ 33+ comic-style narrative panels
- ✅ Historical accuracy with engaging storytelling
- ✅ Cultural imagery and traditional crafts showcase
- ✅ Lesser-known facts and traditions

### Technical
- ✅ TypeScript for type safety
- ✅ Component-based architecture
- ✅ Optimized image loading
- ✅ SEO-friendly structure
- ✅ Modern CSS with Tailwind
- ✅ Client-side routing with Wouter

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Areas for Contribution
- Additional regional stories
- Enhanced animations and interactions
- Accessibility improvements
- Performance optimizations
- More audio/sound effects
- Localization (Hindi, Rajasthani languages)

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Design Inspiration:** Neal.fun, Amar Chitra Katha, Japanese scroll art
- **Cultural Research:** Rajasthan's rich oral traditions and historical records
- **Music:** Traditional Rajasthani Ghoomar folk music
- **Images:** Custom-generated illustrations inspired by Shekhawati frescoes and Rajasthani art
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/)

---

## 📧 Contact

**Laksh Mendpara**
- GitHub: [@Laksh-Mendpara](https://github.com/Laksh-Mendpara)
- Project Link: [https://github.com/Laksh-Mendpara/Digital-Society](https://github.com/Laksh-Mendpara/Digital-Society)

---

## 🌟 Support

If you found this project interesting or useful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs or issues
- 💡 Suggesting new features or regions to add
- 📣 Sharing with others interested in cultural storytelling

---

<div align="center">

**Made with ❤️ for the preservation and celebration of Rajasthan's living heritage**

*"Rajasthan is not just a land of palaces and deserts. It is a museum without walls."*

</div>
