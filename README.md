# ADmyBRAND AI - Landing Page

A modern, responsive landing page for ADmyBRAND AI built with Next.js 15, React 19, and Tailwind CSS.

## Features

- **Dark Theme**: Sleek dark design with gradient backgrounds
- **Responsive**: Mobile-first design that works on all devices
- **Modern Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS v4
- **UI Components**: Comprehensive component library with Radix UI
- **Smooth Animations**: Intersection Observer-based scroll effects
- **SEO Optimized**: Meta tags, Open Graph, and performance optimized

## Quick Setup

### Prerequisites
- Node.js 18.17 or later
- pnpm (recommended) or npm

### Installation

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Start development server**
   ```bash
   pnpm dev
   ```

3. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Project Structure

```
├── app/              # Next.js App Router
├── components/       # Reusable components
│   ├── layout/      # Layout components
│   ├── sections/    # Page sections
│   └── ui/          # UI component library
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── public/          # Static assets
```

## Deployment

Deploy easily on Vercel, Netlify, or any modern hosting platform that supports Next.js.

```bash
pnpm build  # Build for production
```

## AI Usage Report

This project was built using a hybrid AI-assisted workflow that combined automation with manual optimization to create a high-quality, production-ready landing page.

### AI Tools Used
- **Primary tools**: v0 by Vercel, GitHub Copilot (VS Code)
- **Key use cases**: 
  - v0 for initial project scaffolding and component structure generation
  - VS Code Copilot for automating repetitive coding tasks, boilerplate generation, and intelligent code completion
  - AI assistance for TypeScript interfaces, utility functions, and consistent styling patterns

### Sample Prompts (2-3 examples)
1. "Create a responsive hero section component with dark theme, gradient backgrounds, and call-to-action buttons for a marketing AI platform"
2. "Generate a pricing section with three tiers, feature comparisons, and smooth hover animations using Tailwind CSS"
3. "Help me implement smooth scroll animations and intersection observer for section reveals on scroll"

### AI vs Manual Work Split
- **AI-generated**: ~60% - Initial component structure, boilerplate code, TypeScript definitions, basic styling frameworks, and repetitive UI patterns
- **Manual coding**: ~25% - Custom business logic, specific animations, performance optimizations, accessibility improvements, and complex state management
- **Customization**: ~15% - Adapting AI suggestions to match design requirements, fixing bugs, refining responsive behavior, and enhancing user experience details

The AI tools significantly accelerated development by handling routine tasks, allowing more focus on creative design decisions, performance optimization, and user experience refinement. Manual intervention was crucial for bug fixes, design polish, and ensuring the final product met specific requirements and quality standards.
