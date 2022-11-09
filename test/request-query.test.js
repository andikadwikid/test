const express = require('express')
const request = require('supertest')

const app = express()

app.get('/', (req, res) => {
    res.send(`Hello ${req.query.firstname} ${req.query.lastname}!`)
})

test("Test Query Parameter", async () => {
    const response = await request(app).get('/').query({ firstname: "Andika", lastname: "Dwiki" })
    expect(response.text).toBe("Hello Andika Dwiki!")
})
