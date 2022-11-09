const express = require('express')
const app = express()
const userRouter = require('../router/users')
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(userRouter)

app.get('/', (req, res) => {
    const kelas = {
        id: 1,
        name: "NodeJs"
    }
    res.json(kelas)
})

app.get('/about', (req, res) => {
    res.redirect('/')
})

app.all('*', (req, res) => {
    res.send('404')
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})