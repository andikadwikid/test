const express = require('express')
const router = express.Router()

let users = [
    {
        id: 1,
        name: "Dika",
        email: "dika@gmail.com"
    },
    {
        id: 2,
        name: "Andika",
        email: "andika@gmail.com"
    },

]

router.route('/users')
    .get((req, res) => {
        res.json(users)
    })
    .post((req, res) => {
        users.push(req.body)
        res.send(users)
    })

router.put('/users/:id', (req, res) => {
    const id = req.params.id
    users.filter(user => {
        if (user.id == id) {
            user.id = req.body.id
            user.name = req.body.name
            user.email = req.body.email

            return user
        }
    })
    res.json(users)
})

router.delete('/users/:id', (req, res) => {
    const id = req.params.id
    users = users.filter(user => user.id != id)

    res.json(users)
})

module.exports = router