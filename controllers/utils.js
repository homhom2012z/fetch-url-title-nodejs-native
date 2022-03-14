const title = (req, res) => {
  const url = req.query.url;
  const parseTitle = (body, url) => {
    const match = body.match(/<title>([^<]*)<\/title>/); // regular expression to parse contents of the <title> tag
    if (!match || typeof match[1] !== "string" || match === "DDOS-GUARD") {
      // throw new Error("Unable to parse the title tag");
      console.log("error");
      return url;
    }
    if (match[1].split("\n")[1]) {
      return match[1].split("\n")[1];
    }
    return match[1];
  };
  res.header("Access-Control-Allow-Origin", "*");
  fetch(url)
    .then((response) => response.text())
    .then((body) => {
      res.end(parseTitle(body, url));
    })
    .catch((err) => {
      res.end(url);
    });
};

module.exports = {
  title,
};
