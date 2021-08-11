const mongoose = require('mongoose');
const express = require('express');
const Schema = mongoose.Schema;
const app = express();
const jsonParser = express.json();
const productSchema = new Schema({}, {});
