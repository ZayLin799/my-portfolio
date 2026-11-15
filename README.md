# Zay Lin Htet: Portfolio

Personal portfolio site at [zaylinhtet.online](https://www.zaylinhtet.online/), built with Next.js (Pages Router), React, TypeScript and Tailwind CSS. The contact form stores messages in Firebase Firestore.

## Getting started

Requires Node.js 22.

```bash
npm ci
cp .env.example .env.local   # then fill in the Firebase web config
npm run dev
```

Open http://localhost:3000.

Other scripts:

- `npm run lint`: ESLint
- `npx tsc --noEmit`: type check
- `npm run build` / `npm start`: production build and server

## Where things live

- `data/portfolio.ts`: all site content (profile, skills, experience, case studies). Most updates only touch this file.
- `components/`: page sections and the case-study layout.
- `pages/index.tsx`: home page.
- `pages/projects/[slug].tsx`: one case-study page per entry in `projects`.
- `pages/sitemap.xml.tsx` and `public/robots.txt`: SEO.
- `public/Zay_Lin_Htet_Senior_Full_Stack_Engineer.pdf`: the downloadable resume.

### Adding a case study

1. Add a WebP screenshot (about 1600px wide) under `public/assets/projects/`.
2. Import it and add an entry to `projects` in `data/portfolio.ts` with a lowercase kebab-case `slug`.

The page, the projects grid and the sitemap pick it up automatically.

## Contact form security

- `firestore.rules` only allows creating well-formed `messages` documents. Nothing is readable from the browser. Deploy the rules with:

  ```bash
  npx firebase-tools deploy --only firestore:rules --project <your-project-id>
  ```

- A hidden honeypot field drops simple bot submissions.
- Optional App Check: set `NEXT_PUBLIC_RECAPTCHA_ENTERPRISE_SITE_KEY`, register the key under Firebase console > App Check, then turn on enforcement for Firestore.

## CI

GitHub Actions run on pushes and pull requests to `main`:

- `ci.yml`: lint, type check, build, `npm audit` on production dependencies, and a gitleaks secret scan.
- `codeql.yml`: CodeQL code scanning, plus a weekly run.
- Dependabot opens weekly npm updates and monthly action updates.
