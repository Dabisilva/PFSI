const express = require('express');
const Routes = require('./routes') 
const cors = require('cors')
const app =  express()

app.use(cors())
app.use(express.json())
app.use(Routes)

module.exports = app