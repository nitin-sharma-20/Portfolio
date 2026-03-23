# Nitin Sharma — Personal Portfolio

A modern, light-themed, 3D interactive personal portfolio built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and **React Three Fiber**.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![React Three Fiber](https://img.shields.io/badge/React%20Three%20Fiber-3D-blueviolet)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-ff69b4)

## ✨ Features

- **Interactive 3D Hero** — Glass icosahedron with orbiting rings and floating particles (React Three Fiber)
- **Scroll Animations** — Smooth reveal animations on every section (Framer Motion)
- **Glassmorphism UI** — Modern frosted-glass navbar and card effects
- **Responsive Design** — Fully responsive across desktop, tablet, and mobile
- **Light Theme** — Clean white/light gray backgrounds with high-contrast typography
- **SEO Optimized** — Proper meta tags, semantic HTML, Open Graph data

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** (App Router) | React framework with SSR/SSG |
| **Tailwind CSS** | Utility-first CSS framework |
| **React Three Fiber** | 3D rendering with Three.js |
| **@react-three/drei** | Useful helpers for R3F |
| **Framer Motion** | Scroll & interaction animations |
| **Lucide React** | Beautiful, consistent icons |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Vercel Deployment

This project is optimized for seamless deployment on [Vercel](https://vercel.com).

### Option 1: One-Click Deploy

1. Push your code to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects Next.js — no configuration needed
5. Click **Deploy**

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from the project root
vercel

# For production deployment
vercel --prod
```

### Environment Notes

- No environment variables required (strictly frontend)
- No database or backend dependencies
- Build command: `next build` (auto-detected)
- Output directory: `.next` (auto-detected)

## 📁 Project Structure

```
portfolio/
├── public/                  # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles + utilities
│   │   ├── layout.tsx       # Root layout with SEO metadata
│   │   └── page.tsx         # Main page (assembles all sections)
│   └── components/
│       ├── Navbar.tsx        # Sticky glassmorphism navbar
│       ├── HeroSection.tsx   # Hero with 3D canvas
│       ├── HeroCanvas.tsx    # React Three Fiber 3D scene
│       ├── AboutSection.tsx  # Stats + skills
│       ├── ProjectsSection.tsx  # Project cards grid
│       ├── CertificationsSection.tsx  # Certification cards
│       ├── ContactSection.tsx   # Contact info + CTA
│       └── Footer.tsx        # Footer with socials
├── tailwind.config.ts       # Custom theme configuration
├── next.config.mjs          # Next.js configuration
└── package.json
```

## 📄 License

MIT © Nitin Sharma
