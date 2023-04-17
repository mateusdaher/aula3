import express from "express";
const app = express()
const port = 3000
app.use(express.json()) // faz o parse automatico do req.body de .json para objeto

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    const name = req.body.name;
    res.send(`Hello ${name}`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})