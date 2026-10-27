const http = require('http');
const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');

const PORT = 8081;
const ROOT = __dirname;
const REG_RUN_KEY = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
const REG_RUN_VAL = 'FocusDock';
const VBS_PATH = path.join(ROOT, 'launch.vbs');
const STARTUP_FOLDER = process.env.APPDATA ? path.join(process.env.APPDATA, 'Microsoft', 'Windows', 'Start Menu', 'Programs', 'Startup') : null;
const STARTUP_VBS = STARTUP_FOLDER ? path.join(STARTUP_FOLDER, 'FocusDock.vbs') : null;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Service-Worker-Allowed', '/');

  // Handle CORS Preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.writeHead(204);
    res.end();
    return;
  }

  let reqPath = req.url.split('?')[0];

  // --------------------------------------------------------------------------
  // API: Check Windows Startup Status
  // --------------------------------------------------------------------------
  if (reqPath === '/api/startup' && req.method === 'GET') {
    execFile('reg.exe', ['query', REG_RUN_KEY, '/v', REG_RUN_VAL], (err, stdout) => {
      let enabled = (!err && stdout && stdout.includes(REG_RUN_VAL));
      if (!enabled && STARTUP_VBS && fs.existsSync(STARTUP_VBS)) {
        enabled = true;
      }
      res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
      res.end(JSON.stringify({ success: true, enabled: !!enabled }));
    });
    return;
  }

  // --------------------------------------------------------------------------
  // API: Toggle Windows Startup (Add/Delete Registry & Startup Shortcut)
  // --------------------------------------------------------------------------
  if (reqPath === '/api/startup' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      let data = {};
      try { data = JSON.parse(body || '{}'); } catch (e) {}
      const shouldEnable = !!data.enabled;

      if (shouldEnable) {
        // Only register in Registry (like Telegram/Discord) - NOT Startup Folder to avoid double launch
        const cmdTarget = 'wscript.exe "' + VBS_PATH + '"';
        execFile('reg.exe', ['add', REG_RUN_KEY, '/v', REG_RUN_VAL, '/t', 'REG_SZ', '/d', cmdTarget, '/f'], (err) => {
          // Also clean up any stale Startup Folder entry from previous versions
          if (STARTUP_VBS && fs.existsSync(STARTUP_VBS)) {
            try { fs.unlinkSync(STARTUP_VBS); } catch (e) {}
          }
          res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
          res.end(JSON.stringify({ success: !err, enabled: true, error: err ? err.message : null }));
        });
      } else {
        execFile('reg.exe', ['delete', REG_RUN_KEY, '/v', REG_RUN_VAL, '/f'], () => {
          if (STARTUP_VBS && fs.existsSync(STARTUP_VBS)) {
            try { fs.unlinkSync(STARTUP_VBS); } catch (e) {}
          }
          res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
          res.end(JSON.stringify({ success: true, enabled: false }));
        });
      }
    });
    return;
  }

  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(ROOT, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
      res.end('404 Not Found: ' + reqPath);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`[FocusDock] Port ${PORT} already active. Another server instance is running.`);
  } else {
    console.error('[FocusDock] Server error:', err);
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`FocusDock Server running at http://127.0.0.1:${PORT}/`);
  console.log(`Open http://localhost:${PORT} in Microsoft Edge or Google Chrome!`);
});
