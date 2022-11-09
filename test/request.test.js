const express = require('express')
const request = require('supertest')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

test("Test Express Js", async () => {
    const response = await request(app).get('/')
    expect(response.text).toBe("Hello World!")
})