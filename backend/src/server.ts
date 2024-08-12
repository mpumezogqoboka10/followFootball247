import express from 'express'
const app = express()
const port = 8000


app.get('/', (req, res) => {
    res.send('FollowFootball247!')
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})