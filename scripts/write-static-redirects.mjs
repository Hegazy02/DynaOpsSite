// Writes index.html redirect pages for the language roots after `ng build`. Angular only serves the
// '' redirect from its SSR server, so static FTP hosting needs a file there; public/.htaccess and
// public/web.config send a real 301 first where rewriting is available. Usage: node scripts/write-static-redirects.mjs [distDir]
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

// Keep in sync with the '' redirect in src/app/app.routes.ts.
const TARGET = 'industries/fmcg';
const ROOTS = ['', 'ar'];

const dist = process.argv[2] ?? 'dist/DynaOpsSite';

for (const root of ROOTS) {
  const url = `/${root ? `${root}/` : ''}${TARGET}`;
  const html = `<!doctype html>
<html lang="${root || 'en'}">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url=${url}">
<link rel="canonical" href="${url}">
<title>DynaOps365</title>
<script>location.replace(${JSON.stringify(url)} + location.search + location.hash);</script>
</head>
<body><a href="${url}">${url}</a></body>
</html>
`;
  await writeFile(join(dist, 'browser', root, 'index.html'), html);
  console.log(`redirect: /${root} -> ${url}`);
}
