const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.get('/', (req, res) => res.render('pages/clock'));

app.get('/speedtest',(req, res) => res.render('pages/speedchecker'));
/*express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/clock'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));*/
