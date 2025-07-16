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

## Deployment

The `deploy.yml` workflow builds a Docker image, pushes it to your registry and
then connects to the target server via SSH. It is triggered automatically once
the `Release` workflow finishes, ensuring the latest version produced by
`semantic-release` is deployed. On the server a `docker-compose.yml` file is
created automatically:

```yaml
version: '3.9'
services:
  frontend:
    image: <registry>/<image>:latest
    restart: always
    ports:
      - '80:80'
    environment:
      NODE_ENV: production
```

Secrets must provide registry credentials (`REGISTRY_URL`, `REGISTRY_USERNAME`,
`REGISTRY_PASSWORD`), image name (`IMAGE_NAME`), and SSH access (`SSH_HOST`,
`SSH_USERNAME`, `SSH_PRIVATE_KEY`, `DEPLOY_PATH`).

