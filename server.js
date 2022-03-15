const express = require("express")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const toyService = require("./services/toy-service")
const cors = require('cors')
const app = express()

app.use(express.static("public"))
app.use(cookieParser())

app.use(
  session({
    secret: "super-secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
)
app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 3030;
app.listen(port, () => {
 console.log(`App listening on port ${port}!`)
});
//List
app.get("/api/toy", (req, res) => {
  console.log("backend getting toys")
  console.log(req.query);

  const filterBy = {
    name: req.query.name || "",
    inStock: req.query.inStock || "",
    sortBy: req.query.sortBy || "",
    labels: req.query.labels || []
  }
  toyService.query(filterBy).then((toys) => {
    res.send(toys)
  })
})
// UPDATE
app.put("/api/toy/:toyId", (req, res) => {
  //   const { theUser } = req.session
  //   if (!theUser) return res.status(401).send("Please login")

  console.log("Backend Saving toy:")

  const toy = req.body
  
  toyService
    .save(toy)
    .then((savedToy) => {
      res.send(savedToy)
    })
    .catch((err) => {
      console.log("Backend had error: ", err)
      res.status(401).send("Cannot update toy")
    })
})
// CREATE
app.post("/api/toy", (req, res) => {
//   const { theUser } = req.session
//   if (!theUser) return res.status(401).send("Please login")

  console.log("Backend Saving New Toy:")
  const {name, price, inStock, type, labels } = req.body
  const toy = {
    name,
    price,
    type,
    inStock,
    createdAt: Date.now(),
    labels,
    reviews: []
  }

  toyService
    .save(toy)
    .then((savedToy) => {
      res.send(savedToy)
    })
    .catch((err) => {
      console.log("Backend had error: ", err)
      res.status(401).send("Cannot create toy")
    })
})
// READ
app.get("/api/toy/:toyId", (req, res) => {
  console.log("Backend getting your toy:")
  toyService
    .getById(req.params.toyId)
    .then((toy) => {
      res.send(toy)
    })
    .catch((err) => {
      console.log("Backend had error: ", err)
      res.status(404).send("No such toy")
    })
})
// DELETE
app.delete("/api/toy/:toyId", (req, res) => {
//   const { theUser } = req.session
//   if (!theUser) return res.status(401).send("Please login")

  console.log("Backend removing toy:")
  toyService
    .remove(req.params.toyId)
    .then(() => {
      res.send({ msg: "Removed" })
    })
    .catch((err) => {
      console.log("Backend had error: ", err)
      res.status(404).send("Cannot remove toy")
    })
})

//User

// app.listen(3030, () => console.log("Server listening on port 3030"))
