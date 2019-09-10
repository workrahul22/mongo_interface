const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();
app.use(logger(dev));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());

const getDatabases = require("./getDatabases");

app.post('/db', getDatabases);