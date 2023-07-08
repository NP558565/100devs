const express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const crypto = require('crypto')
const db = require('../config/database')

passport.use(new LocalStrategy(async function verify(username, password, cb){

}))