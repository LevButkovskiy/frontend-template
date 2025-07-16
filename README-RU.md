# Frontend Template

Шаблон фронтенд приложения на базе **React**, **TypeScript** и **Vite**. Проект содержит минимум настроек для быстрого старта, включая ESLint и поддержку PWA.

## Стек

- React 19 и React Router 7
- TypeScript
- Less для стилизации
- Vite для разработки и сборки
- vite-plugin-pwa для генерации service worker и манифеста

## Требования

- Node.js >= 20.19.0
- npm >= 11.4.2

## Быстрый старт

```bash
npm ci          # установка зависимостей
npm run dev     # режим разработки
npm run build   # сборка проекта
npm run preview # локальный просмотр собранной версии
```

## Структура проекта

```
frontend-template/
├── public/                 # статические файлы
├── src/
│   ├── assets/             # изображения и другие ассеты
│   ├── components/         # переиспользуемые компоненты
│   ├── pages/              # страницы, используемые в роутинге
│   ├── router/             # конфигурация маршрутов
│   ├── App.tsx             # корневой компонент
│   ├── main.tsx            # точка входа приложения
│   └── index.css           # глобальные стили
├── Dockerfile              # сборка контейнера
├── docker-compose.yml      # пример развертывания
├── vite.config.ts          # конфигурация Vite и PWA
└── ...
```

## Дополнительная информация

В `vite.config.ts` настроен плагин `vite-plugin-pwa`, который создаёт service worker и манифест. Иконки приложения размещаются в `public/icons`. Конфигурацию ESLint при необходимости можно расширить в файле `eslint.config.js`.

## Развертывание

`deploy.yml` собирает Docker-образ, публикует его в реестре и подключается к серверу по SSH. Этот workflow запускается после завершения `Release`, поэтому на сервер отправляется образ с актуальной версией, которую создал `semantic-release`. На сервере автоматически создаётся `docker-compose.yml` такого вида:

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

Необходимо добавить секреты для доступа к реестру (`REGISTRY_URL`, `REGISTRY_USERNAME`, `REGISTRY_PASSWORD`), имени образа (`IMAGE_NAME`) и SSH (`SSH_HOST`, `SSH_USERNAME`, `SSH_PRIVATE_KEY`, `DEPLOY_PATH`).


