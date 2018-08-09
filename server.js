const { Nuxt, Builder } = require('nuxt');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = require('express')();
const nuxtConfig = require('./nuxt.config');
const { Room } = require('./models');
require('./dbinit'); // initilize mongodb launch process

// const MongoStore = require('connect-mongo')(session);

// Body parser, to access `req.body`
app.use(bodyParser.json());

// Cookie parser
app.use(cookieParser());

// Sessions to create `req.session`
app.use(session({
  secret: 'super-duper-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 },
  // store: new MongoStore({ mongooseConnection: require('mongoose').connection })
}));

// POST `/api/login` to log in the user and add him to the `req.session.authUser`
app.post('/api/login', function (req, res) {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' };
    return res.json({ username: 'demo' });
  }

  res.status(401).json({ error: 'Bad credentials' });
});

// POST `/api/logout` to log out the user and remove it from the `req.session`
app.post('/api/logout', function (req, res) {
  delete req.session.authUser;
  res.json({ ok: true });
})

// GET - `/api/rooms` to get rooms list from db
app.get('/api/rooms', (req, res) => {
  Room.find().then(roomsList => {
    res.json(roomsList);
  });
})

// We instantiate Nuxt.js with the options
const isProd = process.env.NODE_ENV === 'production';
const nuxt = new Nuxt(nuxtConfig, { isDev: !isProd });

// No build in production
if (!isProd) {
  const builder = new Builder(nuxt);
  builder.build();
}

app.use(nuxt.render);
app.listen(3000);
console.log('Server is listening on http://localhost:3000');