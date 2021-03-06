const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || '3000', () =>
  console.log('Server started at port : 3000')
);

app.use('/employees', employeeController);
