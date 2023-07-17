const express = require(`express`)

const server = express()

server.get('/', (req, res) => {
    res.send('Welcome to my website')
})

server.listen(3000, () => {
    console.log('Server is running')
})