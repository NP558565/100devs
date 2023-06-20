let db, 
    dbConnectionstr = "mongodb+srv://cluster0.ram23.mongodb.net/myFirstDatabase",
    dbName = "myFirstDatabase"

MongoClient.connect(dbConnectionstr, {useUnifiedTopology: true})
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })


app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended: true }))
app.use(express.json())
app.listen(process.env.PORT || PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})