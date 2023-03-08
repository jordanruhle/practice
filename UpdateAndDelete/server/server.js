const express = require('express');
const app = express();
const port = 8000;
const DB = "pirates"
const cors = require('cors')

// middleware
app.use(cors())
app.use(express.json(), express.urlencoded({extended:true}));

// test route
// app.get("/api/demo", (req, res) => {
//     res.json({status: "saul good man"})
// })

// Connect to the DB using mongoose
require("./config/mongoose.config")(DB)

// modularize routes
require("./routes/pirates.routes")(app)

app.listen(port, () => console.log(`Listening on port: ${port}`) );