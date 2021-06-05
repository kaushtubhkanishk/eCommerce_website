const express =  require('express');
const mongoose = require('mongoose');
const User = require('../model/users');
const bodyParser  = require('body-parser');
const brypt = require('bcryptjs')
