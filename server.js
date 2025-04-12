const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let file = req.url === '/' ? '/index.html' : req.url;
  let filePath = path.join(__dirname, 'public', file);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404); res.end("Not found");
    } else {
      res.writeHead(200); res.end(data);
    }
  });
});

const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
  console.log('Client connected');
});

// Broadcast data to all clients
function broadcast(data) {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}

// Start server
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

// Pipe from Bash script
const { spawn } = require('child_process');
const monitor = spawn('bash', ['monitor.sh']);

monitor.stdout.on('data', data => {
  broadcast(data.toString());
});

monitor.stderr.on('data', data => {
  console.error(`stderr: ${data}`);
});
