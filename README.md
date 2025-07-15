# Frontend Template

Template for a frontend application built with **React**, **TypeScript**, and **Vite**. The project provides minimal configuration for a quick start, including ESLint and PWA support.

## Stack

- React 19 and React Router 7
- TypeScript
- Less for styling
- Vite for development and builds
- vite-plugin-pwa to generate the service worker and manifest

## Requirements

- Node.js >= 20.19.0
- npm >= 11.4.2

## Quick start

```bash
npm ci          # install dependencies
npm run dev     # start development mode
npm run build   # build the project
npm run preview # preview the production build
```

## Project structure

```
frontend-template/
├── public/                 # static files
├── src/
│   ├── assets/             # images and other assets
│   ├── components/         # reusable components
│   ├── pages/              # pages used in routing
│   ├── router/             # routing configuration
│   ├── App.tsx             # root component
│   ├── main.tsx            # application entry point
│   └── index.css           # global styles
├── Dockerfile              # container build
├── docker-compose.yml      # deployment example
├── vite.config.ts          # Vite and PWA configuration
└── ...
```

## Additional information

The `vite-plugin-pwa` plugin is configured in `vite.config.ts` to generate a service worker and manifest. Application icons reside in `public/icons`. ESLint configuration can be extended in `eslint.config.js` if required.
