const express = require('express');
const homeRouter = require("./routes/home"); // Importe o roteador home

const app = express();

app.use(express.json());

// Use o roteador home
app.use("/home", homeRouter);

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
