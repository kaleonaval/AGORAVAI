const express = require('express');
const app = express();
const home = require ("./routes/home")

const PORT = process.env.PORT || 9001;



app.use(express.json());

app.use("/home",home)


app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
});