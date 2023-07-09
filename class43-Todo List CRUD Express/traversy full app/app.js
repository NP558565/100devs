const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/db')

//load config
dotenv.config({ path: './config/config.env'})

//passport config
require('./config/passport')(passport)

connectDB()

const app = express()

//Body parser
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

//Method override
app.use(methodOverride(function (req, res) {
    if(req.body && typeof req.body === 'object' && '_method' in req.body){
        //look in urlencoded POST bodies and delete it
        let method = req.body._method
        delete req.body._method
        return method
    }
}))

//logging
if(process.env.node_ENV === 'development') app.use(morgan('dev'))
const PORT = process.env.PORT || 3000

// handlebars helpers
const {formatDate, stripTags, truncate, editIcon, select} = require('./routes/helpers/hbs')


//handlebars
app.engine('.hbs', exphbs.engine({ helpers: {
    formatDate,
    stripTags,
    truncate,
    editIcon,
    select
}, defaultLayout: 'main',extname: '.hbs'}))
app.set('view engine', '.hbs')

//Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ 
        mongoUrl: process.env.MONGO_URI,
        mongooseConnection: mongoose.connection
    })
}))


//Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

//set express global variable
app.use(function(req, res, next) {
    res.locals.user = req.user || null //allows access to logged in user in stories page index.hbs
    next()
})

//Static folder
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/stories', require('./routes/stories'))

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))