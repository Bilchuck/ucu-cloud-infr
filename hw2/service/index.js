const { Worker } = require('worker_threads');
const http = require('http');

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    })
  })
}

const requestListener = async function (req, res) {
  const [_, path, param] = req.url.split('/');
  res.writeHead(200);
  if (path === 'health') {
    console.log('Health request!');
    res.end(JSON.stringify({ works: true }));
  } else {
    console.log('Work request!');
    const n = param ? parseFloat(param) : 1000;
    const result = await runService(n);
    res.end(JSON.stringify(result));
  }
}

const server = http.createServer(requestListener);
server.listen(1337);

console.log('servicer started!');
