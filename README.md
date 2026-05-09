# Portafolio

A React-based portfolio website built with Create React App.

## Description

This project showcases a personal portfolio with interactive project detail pages, animated background assets, and responsive navigation. It includes modern React routing, video previews, and mobile-friendly design adjustments.

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Build for production:

```bash
npm run build
```

## Updated Features

- Converted portfolio preview assets from GIF to optimized `.webm` files
- Updated `src/assets/PortafolioAsset/Video/index.js` to import the new `.webm` assets
- Fixed portfolio route handling and mobile navigation layout
- Ensured desktop navigation buttons have increased height while keeping text centered
- Added mobile-only top margin for the portfolio navigation wrapper

## Deployment

The live deployment is currently hosted at:

`http://davidloynazdev.surge.sh`

If you need to redeploy manually after changes, use:

```bash
npm run build
npx surge build/ davidloynazdev.surge.sh
```

If you are not logged in to Surge, first run:

```bash
npx surge login
```
