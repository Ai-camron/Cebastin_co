# Cebastian Co

Original designed streetwear where the many can be themselves with styles that
reflect the "insane" but "sane."

## Prerequisites

- Node.js 20 (see `.nvmrc`)
- npm 10+

## Setup

```bash
npm install
cp .env.example .env
```

## Local development

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run test
```

## Formatting

```bash
npm run format
```

## Deployment notes (Hostinger + GitHub)

- Ensure your Hostinger build environment uses Node.js 20 to match `.nvmrc` and
  the `engines` field in `package.json`.
- Build command: `npm run build`
- Start command: `npm run start`
- Environment: copy values from `.env.example` and set the real values in the
  Hostinger dashboard or GitHub Actions secrets.

## Conventional commits (lightweight)

We follow Conventional Commits for clean history and automation-friendly
releases. Examples:

- `feat: add featured drop module`
- `fix: correct hero CTA focus ring`
- `chore: update tooling`
