'use strict'

const pg = require('pg');
const express = require('express');
const app = express();

const conString = 'postgres://postgres:1234@localhost:5432/Portfolio'


const PORT = process.env.PORT || 3000;


app.listen(PORT, function() {

  console.log(PORT);
});
