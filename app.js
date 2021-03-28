const fetch = require("node-fetch");
const urls = ["https://dmp.llenax.repl.co"];

let lastFetches = "";

setInterval(() => {
  const fetches = urls.map((url) => fetch(url));
  Promise.all(fetches).then((r) => {
    lastFetches = r
      .map((t) => {
        return `${t.url} | ${t.status}\n`;
      })
      .join("");
    console.log(lastFetches);
  });
}, 150000);
