# Alexi Hart site

Contemporary romance author site, built with Astro and deployed to GitHub Pages.

Tokens live in `src/styles/tokens.css`. The build is intentionally branding-neutral
until Alex provides design direction. Swap the CSS custom properties to re-skin.

## Develop

```
pnpm install
pnpm dev
```

## Deploy

GitHub Actions builds `dist/` on push to `main` and deploys to GitHub Pages.

Until a custom domain is purchased, the site lives at
`https://shizzoobies.github.io/Alexi-Hart/`. After a domain is bought, set
`PUBLIC_SITE_URL` and clear `PUBLIC_BASE_PATH` in the workflow env, then add a
`CNAME` file to `public/`.

## House rule

No em dashes anywhere in copy, code, or comments.
