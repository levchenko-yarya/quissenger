const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Quissenger real-time chat')
})

app.listen(process.env.PORT, ()=> {
    console.log('server is running... ')
})