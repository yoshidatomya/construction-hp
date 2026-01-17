# YAMADA BUILD - Corporate Landing Page

This is a premium, modern corporate landing page for a construction/infrastructure company in Japan.

## Project Overview

- **Industry**: Construction / Civil Engineering
- **Theme**: Modern Industrial (Deep Charcoal, Steel Gray, Construction Orange)
- **Tech Stack**: React, TypeScript, Tailwind CSS, Framer Motion

## Key Features

- **Hero Section**: Full-screen video background with overlay and animated typography.
- **Modern UI**: Clean, grid-based layouts with subtle hover effects and transitions.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Japanese Typography**: Optimized using "Noto Sans JP" for professional readability.
- **Interactive Elements**:
  - Smooth scroll navigation
  - Masonry-style project gallery with lightbox
  - Animated service cards
  - Sticky navbar with backdrop blur

## Project Structure

```
src/
├── components/
│   ├── ui/            # Reusable UI components (Button, Section)
│   ├── Hero.tsx       # Hero section with video background
│   ├── About.tsx      # Company introduction
│   ├── Services.tsx   # Service cards
│   ├── Strengths.tsx  # Why Choose Us section
│   ├── Gallery.tsx    # Project photo gallery
│   ├── Process.tsx    # Workflow steps
│   ├── Contact.tsx    # Contact form and info
│   ├── Footer.tsx     # Site footer
│   └── Navbar.tsx     # Responsive navigation
├── utils/
│   └── cn.ts          # Class name utility
├── App.tsx            # Main application layout
└── index.css          # Global styles and Tailwind imports
```

## Assets

Assets are stored in `public/assets/`:
- `video-*.mp4`: Background videos
- `site-*.jpg`: Construction site images

## Development

- **Dev Server**: `npm run dev`
- **Build**: `npm run build`
