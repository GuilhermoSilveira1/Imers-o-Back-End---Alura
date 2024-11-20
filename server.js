import express from "express";

//Cria o servidor realmente, e chama ele de app
const app = express();

//Pede pro servidor ouvir a porta 3000, usada para desenvolvimento local, e coloca o que ele vai fazer quando ouvir alguma coisa nessa porta
app.listen(3000, () => {
    console.log("Servidor escutando");
});

//Criando uma rota
app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas à imersão!");
});