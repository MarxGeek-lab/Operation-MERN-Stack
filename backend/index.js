const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const router = require("./routes/routing")

const port = process.env.PORT || 3001
const app = express()

/* connection à mongodb */
mongoose.connect("mongodb://localhost:27017/merndb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', (error) => { console.log(error)})
db.once('open', () =>  { console.log("Database connected")})

/*  */
app.use(cors())
app.use(express.json())
app.use("/", router)


app.listen(port, () => { console.log(`Server launch in port ${port}`)})