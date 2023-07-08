const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const authRoutes = require('./routes/auth')

require('dotenv').config({path: './config/.env'})

require('./config/passport')

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection})
    })
)

app.use(passport.initialize())
app.use(passport.session())

app.use('/', homeRoutes)
app.use('/auth', authRoutes)

app.listen(process.env.PORT, () => console.log('Server is running'))