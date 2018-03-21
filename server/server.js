const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.listen(4000, () => {console.log("running on port 4000")})

const greeting = {
    "greeting": "Hello Universe"
}

app.post('/api/v0/whatsup', (req,res) => {
    if(req.query.lang ==="spanish")

    res.status(200).send(greeting)
})