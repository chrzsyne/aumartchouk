# Aurèle Martchouk - Personal Website

A modern, professional personal website showcasing skills, experience, and research in Economics, Social Policy, and Financial Analysis.

## Features

- 🎨 **Clean, Dark Design** - Modern programming-inspired aesthetic with dark/light mode toggle
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Next.js 16 for optimal loading speeds
- 🔍 **SEO Optimized** - Complete meta tags and semantic HTML for search engine visibility
- ♿ **Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation
- 🌐 **Multi-language Support** - Ready for internationalization

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── components/          # Reusable React components
│   ├── Header.tsx      # Sticky navigation header
│   ├── Section.tsx     # Section wrapper component
│   └── ThemeToggle.tsx # Dark/light mode toggle
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Main homepage with all sections
└── globals.css         # Global styles and Tailwind config
```

## Sections

1. **Home/About** - Introduction with headshot and tagline
2. **Education** - Academic background and achievements
3. **Research** - Economic research projects and publications
4. **Projects** - Financial analysis and portfolio optimization projects
5. **Skills** - Languages and technical competencies
6. **Contact** - Social links and contact information

## Customization

### Updating Content

Edit `app/page.tsx` to update your personal information, projects, and sections.

### Changing Colors

Modify Tailwind classes in components or update the color scheme in `app/globals.css`.

### Adding New Sections

1. Create a new section in `app/page.tsx`
2. Add navigation link in `app/components/Header.tsx`
3. Use the `Section` component for consistent styling

## Performance

The website is optimized for:
- **Lighthouse Score**: Target ≥95 across all metrics
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic with Next.js App Router
- **Static Generation**: Pre-rendered pages for fast loading

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## License

Personal project - All rights reserved.

## Contact

- **Email**: aurele.martchouk@sciencespo.fr
- **LinkedIn**: [Aurèle Martchouk](https://www.linkedin.com/in/aur%C3%A8le-martchouk-770346190/)
- **Medium**: [@aurele.martchouk](https://medium.com/@aurele.martchouk)
- **GitHub**: [martchoukaur-byte](https://github.com/martchoukaur-byte)
