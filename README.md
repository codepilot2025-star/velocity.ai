# Velocity.ai

A modern, responsive landing page for Velocity.ai - your gateway to accelerated AI innovation.

## Overview

This is a Next.js 14 application built with TypeScript and Tailwind CSS, designed for optimal performance and seamless Vercel deployment. The landing page features a modern design with animations, responsive layout, and SEO optimization.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for responsive styling
- 📱 **Mobile-first** responsive design  
- ✨ **Modern animations** and interactive elements
- 🔍 **SEO optimized** with proper meta tags
- 🚀 **Vercel deployment ready**
- 📦 **Static export** support
- 💪 **TypeScript** for type safety

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Create a production build:

```bash
npm run build
```

### Deploy to Vercel

This project is optimized for Vercel deployment:

1. Push your code to a Git repository
2. Import the project on [Vercel](https://vercel.com)
3. Deploy with zero configuration needed

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx            # Main landing page component
├── public/                  # Static assets (if any)
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Customization

### Colors
The design uses a carefully crafted color palette defined in `tailwind.config.js`. Primary colors include:
- Primary: Blue gradient (blue-500 to primary-600)  
- Secondary: Purple/pink gradient
- Background: Dark theme with slate tones

### Content
Update the content in `app/page.tsx` to match your specific needs:
- Hero section text
- Features descriptions  
- About section content
- Contact information

### Styling
Modify `app/globals.css` for custom animations and global styles.

## Performance

- **Lighthouse Score**: Optimized for 90+ performance
- **Core Web Vitals**: Meets Google's Core Web Vitals standards
- **Bundle Size**: Minimal JavaScript footprint
- **Static Generation**: Pre-rendered for optimal loading

## License

This project is licensed under the Unlicense - see the [LICENSE](LICENSE) file for details.

## Deployment Status

✅ Ready for production deployment on Vercel
