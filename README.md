# Golden Gym

Next.js 16 App Router site with Tailwind CSS. The site is exported as static files for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm ci
npm run build
```

The static site is generated in `out/`. The production build uses Webpack and Tailwind PostCSS; development still uses Next.js's default dev bundler. `next start` does not serve a static export.

To test the repository-path build locally in PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = "/<repository-name>"
npm run build
Remove-Item Env:NEXT_PUBLIC_BASE_PATH
```

Leave `NEXT_PUBLIC_BASE_PATH` unset for local development or a site served from `/`.

## GitHub Pages deployment

1. Push the project, including `.github/workflows/deploy.yml`, to the repository's `main` branch.
2. In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
3. Pushes to `main` deploy automatically. **Actions → Deploy Golden Gym to GitHub Pages** also supports a manual run.

The workflow runs `npm ci`, builds the site, and publishes `out/`. GitHub's Pages setup action provides the actual `base_path`, which the build uses for Next.js files and assets in `public/`. No username or repository name is hardcoded.

`NEXT_PUBLIC_ENQUIRY_ENDPOINT` is optional. If no real endpoint is configured, the contact form retains its existing inline “not available” state; GitHub Pages does not process enquiries. If you add an endpoint, it must accept browser POST requests and allow the deployed origin through CORS. Add its URL as the repository Actions variable `NEXT_PUBLIC_ENQUIRY_ENDPOINT` only after a real endpoint exists.

## Custom domain later

Add the domain in **Settings → Pages** and configure DNS with the domain provider. Then rerun the deployment workflow (or push to `main`). The Pages setup action will supply an empty base path for a site served from `/`; no code or asset-path changes are needed. Next.js embeds `basePath` in the static build, so the workflow must rebuild and redeploy once after the domain change. For GitHub Actions publishing, GitHub manages the domain through Pages settings; a `CNAME` file is not required.
