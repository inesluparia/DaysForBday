const express = require("express")
const app = express()

// use the express-static middleware 
app.use(express.static("public"))

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(process.env.PORT || "3000", () => {console.log('Server is running, check port 3000!')})