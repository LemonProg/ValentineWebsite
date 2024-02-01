const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/yes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'oui.html'))
})

app.listen(3000, () => {
    console.log("Website started on port 3000");
})