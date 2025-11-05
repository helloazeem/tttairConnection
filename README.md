# AIR CONNECTION - Next.js Modern Website

A modern, responsive website built with Next.js 15, Three.js, Tailwind CSS, and Framer Motion for AIR CONNECTION Human Resource Foundation.

## 🚀 Features

- **Next.js 15** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Three.js** - Stunning 3D animations in hero section
- **Framer Motion** - Smooth page transitions and animations
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags and semantic HTML

## 📦 Tech Stack

- **Framework**: Next.js 15.1.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion 11.0
- **Icons**: Font Awesome 6.4

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Navigation & Footer
│   ├── page.tsx            # Homepage with 3D hero
│   ├── courses/page.tsx    # All training courses
│   ├── about/page.tsx      # About us page
│   ├── apply/page.tsx      # Application form
│   └── contact/page.tsx    # Contact information
├── components/
│   ├── Navigation.tsx      # Animated navigation bar
│   ├── Footer.tsx          # Footer with links
│   └── Hero3D.tsx          # 3D animated sphere
├── public/                 # Static assets
└── tailwind.config.ts      # Tailwind configuration
```

## ✨ Key Features

### 3D Hero Section
- Interactive 3D sphere with material distortion
- Floating particles animation
- Auto-rotating camera
- Built with Three.js and React Three Fiber

### Smooth Animations
- Page transitions with Framer Motion
- Scroll-triggered animations
- Hover effects on cards and buttons
- Smooth mobile menu transitions

### Responsive Design
- Mobile-first approach
- Breakpoints for all screen sizes
- Touch-friendly navigation
- Optimized for performance

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change theme colors:

```typescript
colors: {
  primary: {
    DEFAULT: '#2563eb',
    dark: '#1e40af',
  },
  accent: {
    DEFAULT: '#f59e0b',
    dark: '#d97706',
  },
}
```

### 3D Effects
Modify `components/Hero3D.tsx` to customize the 3D sphere:
- Change colors
- Adjust distortion level
- Modify rotation speed
- Add more particles

## 📱 Pages

- **Home** (`/`) - Hero with 3D background, features, popular courses, stats
- **Courses** (`/courses`) - All 9 training courses with details
- **About** (`/about`) - Company information and statistics
- **Apply** (`/apply`) - Application form with validation
- **Contact** (`/contact`) - Contact information and office hours

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌟 Performance

- Server-side rendering (SSR)
- Static site generation (SSG) where possible
- Optimized images
- Code splitting
- Lazy loading for 3D components

## 📝 License

© 2025 AIR CONNECTION Human Resource Foundation. All rights reserved.

## 🤝 Support

For support, email airconnection716@gmail.com or call +88 01552 637898
