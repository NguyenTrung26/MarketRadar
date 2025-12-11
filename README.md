# Market Radar 🚀

Market Radar is a real-time market intelligence platform designed to track emerging trends across various sectors (Tech, Finance, Health, etc.). It features a premium "Glassmorphism" UI, interactive charts, and production-grade architecture.

![Dashboard Preview](/search_result_video.png)

## ✨ Key Features

- **Real-time Dashboard**: Live feed of market activities and trend updates.
- **Interactive Charts**: Visualizations using Recharts (Area charts for growth).
- **Search & Filtering**: Filter trends by keyword or category via URL query parameters (Shareable links).
- **Report Details**: Deep-dive analysis pages for specific market reports.
- **Settings & Alerts**: Configure notification preferences (Email/Push) and thresholds.
- **Follow System**: "Star" trends to follow them (Server Action demo).

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Components, Server Actions)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (with `tailwind-merge`, `clsx`, Custom Animations)
- **State Management**: React Query (TanStack Query) + URL State
- **Validation**: Zod
- **Testing**: Vitest + React Testing Library
- **Quality**: ESLint, Prettier, Husky (Pre-commit hooks)

## 📂 Project Structure

This project follows a **Feature-based Architecture** for scalability:

```
src/
├── actions/            # Server Actions (e.g., trend-actions.ts)
├── app/                # Next.js App Router (Pages & Layouts)
├── components/         # Shared UI Components
├── features/           # Domain-specific logic & components
│   ├── dashboard/      # Dashboard cards, charts, feed
│   ├── reports/        # Report lists, details
│   └── settings/       # Settings forms
├── lib/                # Utilities, Types, Zod Schemas
└── ...
```

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ installed.

### 2. Installation
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
> **Note**: If you encounter port conflicts, use `npm run dev -- -p 3006`.

### 4. Running Tests
```bash
npm run test
```

### 5. Linting
```bash
npm run lint
```

## ⚠️ Database Note
Currently, the project runs in **Mock Mode** using in-memory data (`src/lib/data/mockService.ts`) due to network restrictions preventing Prisma binaries from downloading. 
- **Server Actions** are implemented to demonstrate functionality (e.g., Following a trend) but data resets on server restart.
- To enable real DB: Fix network -> Run `npx prisma generate` -> Update services to use `prisma` client.

## 🎨 Design System
The UI uses a custom **Premium Dark Theme** with:
- **Glassmorphism**: Backdrop blur and translucent borders.
- **Gradients**: Subtle purple/blue glows using absolute positioned blobs.
- **Typography**: Inter (Body) + Outfit (Headings).

---
*Built with ❤️ by Antigravity*
