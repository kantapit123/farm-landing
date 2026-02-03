# Wittaya Farm - Landing Page

A modern, minimal, Nature-premium landing page for Wittaya Farm - an AgriTech Nature Farm / Organic Learning Farm.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4
- **Icons**: Google Material Symbols
- **Fonts**: IBM Plex Sans Thai + Inter

## Features

- Single-page scroll layout
- Light/Dark theme toggle (persisted in localStorage)
- Real-time data widget with loading simulation
- Smooth scroll navigation
- Mobile-responsive design
- Nature-premium aesthetic with soft gradients and shadows

## Getting Started

### Prerequisites

- Node.js 18+ or 20+ (recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd farm-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
farm-landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Divider.tsx
│   │   ├── Icon.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── index.ts
│   ├── data/              # Mock data
│   │   └── mockData.ts
│   ├── sections/          # Page sections
│   │   ├── DataWidget.tsx
│   │   ├── Footer.tsx
│   │   ├── Founder.tsx
│   │   ├── Hero.tsx
│   │   ├── Journal.tsx
│   │   ├── Location.tsx
│   │   ├── Navbar.tsx
│   │   ├── Preview.tsx
│   │   ├── Roadmap.tsx
│   │   ├── TechShowcase.tsx
│   │   ├── Values.tsx
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css          # Global styles + CSS variables
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Cloudflare Pages Deployment

### Settings

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (or leave empty) |
| Node.js version | 18 or 20 |

### Environment Variables

Set in Cloudflare Pages dashboard:
- `NODE_VERSION`: `18` or `20`

### Deploy Steps

1. Push your code to GitHub/GitLab
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project"
4. Connect your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Add environment variable: `NODE_VERSION = 18`
7. Click "Save and Deploy"

## How to Rename "Wittaya Farm"

To rename the farm brand throughout the project:

### 1. Update Brand Text

Search and replace in these files:
- `index.html` - Title, meta tags, OG tags
- `src/sections/Navbar.tsx` - Logo text
- `src/sections/Hero.tsx` - Main headline
- `src/sections/Footer.tsx` - Footer brand
- `src/sections/Location.tsx` - Map label
- `src/data/mockData.ts` - Founder info

### 2. Quick Find & Replace

```bash
# In your IDE or terminal:
# Replace "Wittaya Farm" with your new name
# Replace "wittayafarm" with your new domain (lowercase, no spaces)
```

### 3. Files to Check

- `index.html` - SEO meta tags
- `src/data/mockData.ts` - Contact info, founder name
- `public/favicon.svg` - Update if needed

## Color Theme

The project uses CSS variables for theming. Edit `src/index.css` to customize colors:

### Light Theme (Nature Day)
```css
--bg: #FFFFFF
--primary: #0E5A3A
--accent: #7AAE7F
--gold: #C8A85A
```

### Dark Theme (Nature Night)
```css
--bg: #07130E
--primary: #4ED39A
--accent: #7AAE7F
```

## License

MIT License - Feel free to use and modify for your own farm project!

---

Built with 🌱 for nature-first farming.
