const fetch = require("node-fetch");
const urls = ["https://dmp.llenax.repl.co"];

setInterval(() => {
  urls.forEach((url) => {
    fetch(url).then((r) => console.log(`${url} | ${r.status}`));
  });
}, 150000);
