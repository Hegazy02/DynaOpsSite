// Adds an X-Robots-Tag noindex header to the built server configs, for the temporary host only.
// deploy.yml runs it when SITE_NOINDEX is 'true'; production must never. Usage: node scripts/add-noindex-header.mjs [distDir]
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const HEADER_VALUE = 'noindex, nofollow';

const browser = join(process.argv[2] ?? 'dist/DynaOpsSite', 'browser');

// IfModule keeps Apache from answering 500 when mod_headers is off, so confirm the header with curl.
const htaccessPath = join(browser, '.htaccess');
const htaccess = await readFile(htaccessPath, 'utf8');
await writeFile(
  htaccessPath,
  `${htaccess}\n<IfModule mod_headers.c>\n  Header always set X-Robots-Tag "${HEADER_VALUE}"\n</IfModule>\n`,
);

const webConfigPath = join(browser, 'web.config');
const webConfig = await readFile(webConfigPath, 'utf8');
const marker = '<system.webServer>';
if (!webConfig.includes(marker)) {
  throw new Error(`${marker} not found in ${webConfigPath}`);
}
await writeFile(
  webConfigPath,
  webConfig.replace(
    marker,
    `${marker}\n    <httpProtocol>\n      <customHeaders>\n        <add name="X-Robots-Tag" value="${HEADER_VALUE}" />\n      </customHeaders>\n    </httpProtocol>`,
  ),
);

console.log(`X-Robots-Tag: ${HEADER_VALUE} added to .htaccess and web.config`);
