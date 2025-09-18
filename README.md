# Velocity.AI Landing Page

A modern, responsive landing page for Velocity.AI built with Next.js and optimized for Vercel deployment.

## Features

- ⚡ Built with Next.js 14 for optimal performance
- 🎨 Modern, responsive design with smooth animations
- 🚀 Optimized for Vercel deployment
- 📱 Mobile-first responsive layout
- ✨ Interactive hover effects and animations
- 🔧 TypeScript support for better development experience

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/codepilot2025-star/velocity.ai.git
cd velocity.ai
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Deployment

### Deploy to Vercel

This project is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect this as a Next.js project
3. The build settings are pre-configured with static export
4. Deploy with a single click!

Alternatively, deploy directly:
```bash
npm install -g vercel
vercel --prod
```

### Build for Production

```bash
npm run build
```

This creates an optimized static build in the `out` directory.

## Project Structure

```
velocity.ai/
├── app/
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Home page component
│   └── globals.css      # Global styles
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── next.config.js       # Next.js configuration
└── tsconfig.json        # TypeScript configuration
```

## Customization

- Edit `app/page.tsx` to modify the landing page content
- Update styles in `app/globals.css` 
- Add new components in the `app/` directory
- Configure deployment settings in `next.config.js`

## License

This project is released into the public domain under The Unlicense.
