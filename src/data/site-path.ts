// GitHub Pages supplies this at build time. It is empty for local development
// and for a custom domain serving the site from /.
export const siteBasePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export function publicAssetPath(path: `/${string}`) {
  return `${siteBasePath}${path}`;
}
