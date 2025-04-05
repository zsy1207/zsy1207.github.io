# Zephyr's Homepage

A modern, elegant personal portfolio website with multiple pages, language switching, dark mode, and responsive design.

## Features

- **Multi-page layout**: Home, Resume, News, and Blog sections
- **Language Support**: English/Chinese language switching
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works on all device sizes
- **Tag Filtering**: Filter blog posts by tags
- **Timeline View**: News displayed in a clean timeline format with precise alignment
- **Downloadable Resume**: View resume online or download as PDF
- **Social Links**: Direct links to email, GitHub, ResearchGate, and Bilibili with updated personal accounts
- **SVG Icon Integration**: Custom SVG icons for social media platforms
- **Custom Favicon**: Weather icon as the browser favicon
- **Academic Profile**: Meteorology research information with institutional links

## Deployment to GitHub Pages

This website is automatically deployed to GitHub Pages using GitHub Actions. Here's how to update and deploy:

### Setup (Already Done)

1. Repository is configured as `zsy1207.github.io` for GitHub Pages
2. GitHub Actions workflow in `.github/workflows/deploy.yml` handles the build and deployment
3. `.nojekyll` file is included to prevent GitHub Pages from processing the site with Jekyll
4. Next.js is configured with `output: 'export'` for static site generation

### How to Update and Deploy

1. Make changes to your code locally
2. Commit your changes:
   ```bash
   git add .
   git commit -m "Your update description"
   ```
3. Push to GitHub:
   ```bash
   git push
   ```
4. GitHub Actions will automatically build and deploy the site
5. Check deployment status in GitHub repository under "Actions" tab
6. After successful deployment, your site will be live at https://zsy1207.github.io

### Troubleshooting Deployment

If deployment fails or site doesn't update:

1. Check GitHub Actions workflow logs for errors
2. Ensure `.nojekyll` file exists in the repository root
3. Verify `next.config.js` has these settings:
   ```js
   output: 'export',
   images: {
     unoptimized: true,
   }
   ```
4. If files with underscores aren't showing up, make sure `.nojekyll` file is being correctly copied to the output directory
5. Clear browser cache if site appears outdated after deployment

## Latest Updates

- **GitHub Pages Deployment**: Added automatic deployment to GitHub Pages
- **Personal Information**: Updated with current academic info and research focus
- **Link Updates**: Added links to Fudan University and professor's homepage
- **Improved Centering**: Enhanced layout for better content centering and readability
- **Title Update**: Changed website title to "Zephyr's Homepage"
- **Custom Favicon**: Added weather icon SVG as browser favicon
- **Improved Layout**: Optimized page width and content layout for better readability
- **Left-Right Home Layout**: Redesigned home page with avatar on left and content on right
- **Navigation Bar**: Removed search functionality and improved overall design
- **Custom SVG Icons**: Added ResearchGate and Bilibili SVG icons from public directory
- **Precise Timeline**: Implemented pixel-perfect timeline for news items with proper alignment
- **Responsive Behavior**: Enhanced responsive design for mobile, tablet, and desktop
- **Footer Cleanup**: Removed divider line from footer and standardized placement
- **Dark Mode Enhancement**: Improved dark mode toggle and theme persistence

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe code
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI components
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
   This generates static files in the `out` directory.

## Project Structure

```
/
├── .github/workflows/ - GitHub Actions workflow files
│   └── deploy.yml - Workflow for GitHub Pages deployment
├── app/ - Next.js App Router
│   ├── (routes)/ - Page routes
│   │   ├── blog/ - Blog page
│   │   ├── news/ - News page with timeline
│   │   └── resume/ - Resume page
│   ├── globals.css - Global styles
│   ├── layout.tsx - Root layout
│   └── page.tsx - Home page
├── components/ - React components
│   ├── ui/ - UI components
│   ├── language-switcher.tsx - Language toggle
│   ├── navigation.tsx - Navigation bar
│   └── theme-toggle.tsx - Dark mode toggle
├── context/ - React context providers
│   ├── language-context.tsx - Language state
│   └── theme-context.tsx - Theme state with persistence
├── lib/ - Utility functions
│   └── utils.ts - Helper functions
├── public/ - Static assets
│   ├── avatar.png - Profile avatar
│   ├── bilibili-svgrepo-com.svg - Bilibili icon
│   └── researchgate-svgrepo-com.svg - ResearchGate icon
├── .nojekyll - Tells GitHub Pages not to use Jekyll processing
├── next.config.js - Next.js configuration for static export
└── package.json - Project dependencies and scripts
```

## Component Implementation Details

### News Timeline
The News page features a precise timeline implementation using Tailwind CSS:
```jsx
<div className="relative ml-4">
  {/* 垂直时间线 */}
  <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
  
  <div className="space-y-12">
    {newsItems.map((item, index) => (
      <div key={index} className="relative pl-8">
        {/* 时间点圆点 */}
        <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2" />
        
        <div className="text-sm text-muted-foreground mb-2">
          {/* 日期格式化 */}
        </div>
        
        <h3 className="text-lg font-semibold mb-2">{item.title[language]}</h3>
        <p className="text-muted-foreground">{item.content[language]}</p>
      </div>
    ))}
  </div>
</div>
```

### Home Page Layout
The home page uses a responsive left-right layout that adapts to different screen sizes:
```jsx
<div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-20 px-4 py-12">
  <div className="flex-shrink-0 flex justify-center">
    <Avatar className="h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56">
      {/* Avatar content */}
    </Avatar>
  </div>
  <div className="flex flex-col text-center lg:text-left max-w-sm sm:max-w-md">
    {/* Content */}
  </div>
</div>
```

### SVG Icon Integration
Custom SVG icons integrated using Next.js Image component:
```jsx
<Image 
  src="/bilibili-svgrepo-com.svg" 
  alt="Bilibili" 
  width={24} 
  height={24} 
  className="h-6 w-6" 
/>
```

## Customization

- Edit content in page files to replace placeholder text
- Update resume information in `app/(routes)/resume/page.tsx`
- Add blog posts in `app/(routes)/blog/page.tsx`
- Add news items in `app/(routes)/news/page.tsx`
- Replace the avatar image and SVG icons in the `public` folder

## License

MIT