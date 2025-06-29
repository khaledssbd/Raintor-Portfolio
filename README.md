# Raintor - Portfolio Website

Raintor is a modern portfolio website built with Next.js, featuring a sleek
design and smooth user experience. This project showcases my work, skills, and
professional journey.

## Features

- Responsive design for all devices
- Dark/light mode toggle
- Smooth animations and transitions
- Project showcase section
- Contact form functionality
- SEO optimized

## Framework and Tools Used

- **Next.js** (15.3.4) - React framework for server-side rendering and static
  site generation
- **React** (19.0.0) - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible UI components
- **Lucide React** (0.525.0) - Beautiful, consistent icons
- **Next Themes** (0.4.6) - For theme switching support
- **Class Variance Authority** (0.7.1) - For managing class variants
- **clsx** (2.1.1) - For constructing className strings conditionally
- **tailwind-merge** (3.3.1) - For merging Tailwind classes

## Setup Instructions

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn
- Git (optional)

### Installation

1. Clone the repository (or download the source code):

```bash
git clone https://github.com/khaledssbd/Raintor-Portfolio.git
cd Raintor-Portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see
   the result.

### Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm start
# or
yarn start
```

## Project Structure

```
raintor-portfolio/
├── public/          # Static files
├── src/
│   ├── app/         # Next.js 13+ app directory
│   ├── components/  # Reusable components
│   ├── lib/         # Utility functions
│   ├── styles/      # Global styles
│   └── content/     # Portfolio content (projects, etc.)
├── next.config.js   # Next.js configuration
└── tailwind.config.js # Tailwind CSS configuration
```

<!-- ## Limitations and Tradeoffs

1. **Browser Support**: The portfolio uses modern CSS features that may not be fully supported in older browsers (IE is not supported).

2. **Performance**: While optimized, the site includes animations and transitions that may affect performance on low-end devices.

3. **Content Management**: Currently, portfolio content is managed through local files rather than a CMS, requiring code changes for updates.

4. **Form Handling**: The contact form requires backend setup (like API routes) for full functionality.

5. **Theme System**: While Next Themes provides theme switching, there might be a brief flash of the default theme before the correct one loads (common issue with SSR). -->

## Contributing

While this is primarily a personal portfolio, contributions and suggestions are
welcome. Please open an issue first to discuss any changes.

## License

This project is open-source under the [MIT License](LICENSE).

<!-- Add a license file if applicable -->

---

Thank you for checking out Raintor! For any questions, feel free to reach out.
