const express = require('express');

const bodyParser = require('body-parser');

const methodOverride = require('method-override');

const studentRoutes = require('./routes/studentRoutes');

const app = express();


// VIEW ENGINE

app.set('view engine', 'pug');

app.set('views', './views');


// MIDDLEWARE

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

app.use(express.static('public'));


// ROUTES

app.use('/', studentRoutes);


// SERVER

app.listen(3000, () => {

    console.log('Server running on http://localhost:3000');

});