const { Nuxt, Builder } = require('nuxt');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const nodemailer = require('nodemailer');
const validator = require('validator');
const xssFilters = require('xss-filters');
const app = require('express')();
const nuxtConfig = require('./nuxt.config');
const { Room } = require('./models');
require('./dbinit'); // initilize mongodb launch process

const rejectFunctions = new Map([
  [ 'name', v => v.length < 2 ],
  [ 'email', v => !validator.isEmail(v) ],
  [ 'msg', v => v.length < 5 ]
]);

const validateAndSanitize = (key, value) => {
  // If map has key and function returns false, return sanitized input. Else, return false
  return rejectFunctions.has(key) && !rejectFunctions.get(key)(value) && xssFilters.inHTMLData(value);
};

const sendMail = (name, email, msg) => {
  const transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
  });

  transporter.sendMail({
    from: email,
    to: 'info@elbrusplaza.com',
    subject: `Новое обращение через форму обратной связи от ${name}`,
    text: msg
  });
};


// const MongoStore = require('connect-mongo')(session);

// Body parser, to access `req.body`
app.use(bodyParser.json());
// app.use(express.json());

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

// GET - `/api/room/:type` to get room info from db by type
app.get('/api/room/:type', (req, res) => {
  const type = req.params.type;

  Room.find({code: type}).then(room => {
    res.json(room);
  });
})

app.post('/api/feedback', (req, res) => {
  // Validate, sanitize and send
  const attributes = ['name', 'email', 'msg']; // Our three form fields, all required

  // Map each attribute name to the validated and sanitized equivalent (false if validation failed)
  const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]));

  // True if some of the attributes new values are false -> validation failed
  const someInvalid = sanitizedAttributes.some(r => !r);

  if (someInvalid) {
    // Throw a 422 with a neat error message if validation failed
    return res.status(422).json({ 'error': 'Ugh.. That looks unprocessable!' });
  }

  sendMail(...sanitizedAttributes);
  res.status(200).json({ 'message': 'OH YEAH' });
});

// We instantiate Nuxt.js with the options
const isProd = process.env.NODE_ENV === 'production';
const nuxt = new Nuxt(nuxtConfig, { isDev: !isProd });

// No build in production
if (!isProd) {
  const builder = new Builder(nuxt);
  builder.build();
}

app.use(nuxt.render);
app.listen(8080);
console.log('Server is listening on http://localhost:8080');