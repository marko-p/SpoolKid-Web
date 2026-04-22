# SpoolKid-Web

Landing page for [SpoolKid](https://github.com/SnapMakerU1/SpoolKid) — an iOS companion app for [Spoolman](https://github.com/Donkie/Spoolman) that lets you manage filament inventory, write NFC tags, and keep your physical spools in sync with your Spoolman database.

## Tech Stack

- **React 18** + **TypeScript** (via Vite)
- **Framer Motion** for scroll-triggered animations and hover effects
- **CSS Modules** with custom design tokens derived from the iOS app's dark theme
- Deployed to **GitHub Pages** via GitHub Actions

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build    # Output in dist/
npm run preview  # Preview the production build locally
```

## Deployment

The site deploys automatically when you push to `main`. The GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the Vite project and publishes to GitHub Pages.

**Setup:** In your repo settings, go to **Pages** and set the source to **GitHub Actions**.

## Project Structure

```
src/
  components/     # Modular React components (Navbar, Hero, Features, etc.)
  hooks/          # Custom hooks (useReducedMotion for a11y)
  styles/         # Global CSS with design tokens
  App.tsx         # Root composition
  main.tsx        # Entry point
assets/           # Source logos and screenshots
public/assets/    # Static assets served by Vite
```

## License

See [LICENSE](LICENSE).
