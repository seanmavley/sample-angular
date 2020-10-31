var fs = require('fs')
fs.readFile('src/environments/environment.prod-template.ts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/LIVE_URL/g, process.env.HOSTNAME);

  fs.writeFile('src/environments/environment.prod.ts', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});