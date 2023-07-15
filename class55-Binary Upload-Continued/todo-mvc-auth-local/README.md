# Introduction

A Simple ToDo App is built using the MVC Architecture, we have also implemented "authorization" so folx can sign up, customize & personalize the app 

---
dd
> Be sure to add that lovely star 😀 and fork it for your own copy

---

# Objectives

- It's a beginner level app created to understand how MVC concept and logins are added

---

# Who is this for? 

- It's for beginners & intermediates with little more experience, to help understand the various aspects of building a node app with some complex features

---

# Packages/Dependencies used 

connect-mongo, dotenv, ejs, express, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local

---

# Install all the dependencies or node packages used for development via Terminal

`npm install` 

---

# Things to add

- Create a `.env` file in the config-folder and add the following as `key: value` 
  - PORT: 2121 (can be any port example: 3000) 
  - DB_STRING: `your database URI` 
  <br>(eg. mongodb+srv://ReadMongo:81468146@cluster0.59cir.mongodb.net/todo?retryWrites=true&w=majority)
 ---
 
 # Start Server

`npm start` 

---
 
# Folder Structure
#### root
* gitignore: ignored files for git  
(node_modules cause they are to big!, .env cause they are secret)
* package-lock.json: not 100% sure what this is for
* package.json: installed npm node packages
* README.md: you see it here...  
* server.js: all required modules, basic configuraton of express with app, passport config and middleware

#### config:
* .env: Store the secret keys for database, port, cloud_name, api-keys,...
* database.js: connect to mongo-db
* passport.js: passport informations (mostly copied from passport docu)
#### controllers (the "C" from MVC)
the core of the backend-logic - what to do when somehing is triggered in frontend
* auth.js: all the logic for authentification (getLogin, postLogin, logout, getSignup, postSignup)
* home.js: home Index
* todo.js: all the logic for the todos (getTodos,createTodo,markComplete,markIncomplete,deleteTodo)
#### middleware
* auth.js: not 100% sure what this is...
#### models (the "M" from MVC)
define the fixed schemas which are used in the db (type, key/required)
* todo.js: mongoose todo schema for the todos (in the db)
* user.js: mongoose user schema for the todos (in the db) (with hashing and salting the password)
#### node_modules
all the installed node-modules - install with npm install
#### public
css and frontend-js can be used without linking in the ejs/html-file
* css / style.css: css formating for the ejs-files
* js /main.js: js client code (eventListeners for delete,complete,incomplete todos - at every element in the todo-list)
<br> functions are triggering the deleteTodo / markComplete / markIncomplete with fetches
#### routes: 
connects the CRUD-commands to the Controllers and show where they are
* main.js: routes for home / login / signup
* todo.js: routes for todos (get/, post/createTodo, put/markComplete, put/markIncomplete,delete/deleteTodo)
#### views (the "V" from MVC)
the frontend-files html/ejs what the user can see
use ejs for dynamic homepages-content
* index.ejs: start site with creating new todo-list with login/signup
* login.ejs: login site (with email and password entry)
* signup.ejs: signup site (with username,email,password,confirmPW)
* todos.ejs: todo site (dynamic todo-list from db, input-fields for new todos)

 Have fun testing and improving it! 😎


