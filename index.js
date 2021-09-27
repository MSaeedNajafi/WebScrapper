// listen to PORT to see if any changes are made, and want the server to run o the PORT
const PORT = 8000;
const url = "https://www.theguardian.com/uk";

const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

axios(url)
  .then((response) => {
    const html = response.data;
    const elems = cheerio.load(html);
    const articles = [];

    elems(".fc-item__title", html).each(function () {
      const title = elems(this).text();
      const url = elems(this).find("a").attr("href");
      //   elems(this).attr('href')
      articles.push({
        title,
        url,
      });
    });
    console.log(articles);
  })
  .catch((e) => consolof.log(e));

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
