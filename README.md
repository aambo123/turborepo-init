# Turborepo Monorepo

This is a **Turborepo**-powered monorepo containing multiple apps and shared packages. It uses [swagger-codegen](https://github.com/swagger-api/swagger-codegen) to generate API clients from `swagger.html`, and leverages shared UI components across applications.

## 📁 Project Structure

```
.
├── apps/
│   ├── web/       # Web frontend app
│   └── admin/     # Admin dashboard app
├── packages/
│   ├── ui/        # Shared UI components (React, MUI, etc.)
│   └── api/       # Generated API client from swagger spec
├── turbo.json     # Turborepo pipeline
├── package.json   # Root scripts and workspace config
└── ...
```

## 🚀 Getting Started

### 1. Install Dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 2. Generate API Client

The API client in `packages/api` is generated using `swagger-codegen` based on a local or remote `swagger.html`.

Make sure `swagger-codegen` CLI is installed:
```bash
brew install swagger-codegen
# or download from https://github.com/swagger-api/swagger-codegen
```

Then generate the API client:
```bash
pnpm gen:api
```

> ⚠️ This command should be defined in your `packages/api/package.json`, e.g.:
```json
"scripts": {
  "gen:api": "swagger-codegen generate -i ./swagger.html -l typescript-fetch -o ./src"
}
```

### 3. Run Development Servers

Run all apps in development mode:

```bash
pnpm dev
```

Or run individually:

```bash
pnpm --filter web dev
pnpm --filter admin dev
```

## 📦 Build

```bash
pnpm build
```

To build an individual app:

```bash
pnpm --filter web build
```

## 📦 Shared Packages

### `ui`

A shared component library used across `web` and `admin`. Built with React and optionally MUI, Tailwind, etc.

### `api`

Generated API client from `swagger.html`. Used for typed HTTP requests (e.g., via `fetch` or Axios).

## 🛠 Scripts

| Command             | Description                               |
| ------------------ | ----------------------------------------- |
| `dev`              | Run all dev servers using Turborepo       |
| `build`            | Build all apps/packages                   |
| `gen:api`          | Generate API client in `packages/api`     |
| `clean`            | Clean build artifacts and node_modules    |

## 🧪 Testing

If you’ve set up testing:

```bash
pnpm test
```

## 🔧 Turborepo Pipeline

Example `turbo.json`:

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "dev": {
      "cache": false
    },
    "lint": {},
    "test": {}
  }
}
```

## 🌐 API Spec

- Swagger spec file: `swagger.html` (can be local or remote)
- Client generated using `swagger-codegen` and stored in `packages/api/src`

## 📄 License

[MIT](./LICENSE)

---

Made with ❤️ using Turborepo, Swagger Codegen, and shadcn/ui