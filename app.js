const fetch = require("node-fetch");
const urls = [
  "https://dmp.llenax.repl.co",
  "https://fenix-c.glitch.me",
  "https://Alliance-Horoscope.llenax.repl.co",
  "https://damla1-deleted.glitch.me/",
  "https://Alliance-1.llenax.repl.co",
  "https://sen-anan-yaniv1.glitch.me/"
];

let queue = [];

function wait() {
  const next = queue.length
    ? queue[queue.length - 1].promise
    : Promise.resolve();
  let res;
  const promise = new Promise((resolve) => {
    res = resolve;
  });

  queue.push({ res, promise });
  return next;
}

function shift() {
  const deferred = queue.shift();
  if (typeof deferred !== "undefined") deferred.res();
}

setInterval(() => {
  urls.forEach(async (url) => {
    await wait();
    try {
      await fetch(url);
    } finally {
      shift();
    }
  });
}, 150000);
