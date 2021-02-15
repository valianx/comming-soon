const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 8080
app.use(express.static(path.join(__dirname, 'web')));

app.listen(port, () => {
    console.log("Server port: ", port);
});