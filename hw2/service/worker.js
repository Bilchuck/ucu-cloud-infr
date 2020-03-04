const { workerData, parentPort } = require('worker_threads')

const n = workerData;
let sum = 0;
let arr = [];
for (let i = 0; i < n; i+=0.01) {
  const x = Math.random() * Math.random() * 10000;
  sum += x;
  arr = Array.from({ length: parseInt(x) }).fill(x).map(el => Math.random() * Math.random() * 10000);
}
console.log([sum, arr]);

parentPort.postMessage({ done: true });
