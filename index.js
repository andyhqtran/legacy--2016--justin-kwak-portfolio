/**
 * External dependencies
 */
import path from 'path';
import express from 'express';
import compression from 'compression';
import sassMiddleware from 'node-sass-middleware';
import bodyParser from 'body-parser';
import morgan from 'morgan';

/**
 * Internal dependencies
 */

/**
 * Local variables
 */
const port = process.env.PORT || 3000;
const PATHS = {
  public: path.join(__dirname, 'public'),
  sass: path.join(__dirname, 'sass'),
  views: path.join(__dirname, 'views'),
};
const app = express();

/**
 * Enable compression
 */
app.use(compression());

/**
 * Set app to use morgan
 */
app.use(morgan('combined'));
/**
  * Parse application/x-www-form-urlencoded
  */
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Parse application/json
 */
app.use(bodyParser.json());

/**
 * Set sass middleware
 */
app.use(sassMiddleware({
  src: PATHS.sass,
  dest: PATHS.public,
  debug: true,
  outputStyle: 'compressed',
}));

/**
 * Set app public folder
 */
app.use(express.static(PATHS.public));
app.use('/', express.static('node_modules/normalize.css'));
app.use('/', express.static('node_modules/jquery/dist'));


/**
 * Set app views
 */
app.set('views', PATHS.views);

/**
 * Set app view engine
 */
app.set('view engine', 'jade');

/**
 * Index route
 */
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    route: 'home',
  });
});

/**
 * Case Studies Route
 */
app.get('/case-studies', (req, res) => {
  res.render('case-studies', {
    title: 'Case Studies',
    route: 'case-studies',
  });
});

app.get('/case-studies/:name', (req, res) => {
  const name = req.params.name;
  let title = name.replace(/-/g, ' ');
  title = name.replace(/\w\S*/g, (str) =>
    str.charAt(0).toUpperCase() + str.substr(1).toLowerCase());

  res.render('case-studies', {
    title,
    route: 'case-studies',
    caseStudy: name,
  });
});

/**
 * Error handling
 */
app.get('/404', (req, res, next) => {
  next();
});

app.get('/403', (req, res, next) => {
  const err = new Error('not allowed!');
  err.status = 403;
  next(err);
});

app.get('/500', (req, res, next) => {
  next(new Error('keyboard cat!'));
});


app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('500', { error: err });
});

/**
 * Starts app and listen on port 3000
 */
app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }

  console.info('Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
