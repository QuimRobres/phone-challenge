require('dotenv').config();
const express= require("express");

//DB config
require('./configs/db.config');

const app = express();

//Middleware config
require('./configs/middleware.config')(app);
require('./configs/cors.config')(app);

//Session config
require('./configs/session.config')(app);

const phonesRouter = require('./routes/phones.routes');
app.use('/api/phones', phonesRouter)


app.use((req, res, next) => {
  return res.status(404).json({message: "Not found"});
})

module.exports = app;
