import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Um gato brincando na grama",
        imagem: "https://placecats.com/jasper/300/150"
    },
    {
        id: 3,
        descricao: "Gato olhando pela janela",
        imagem: "https://placecats.com/whiskers/300/150"
    },
    {
        id: 4,
        descricao: "Um filhote fofinho",
        imagem: "https://placecats.com/fluffy/300/150"
    },
    {
        id: 5,
        descricao: "Gato dormindo no sofá",
        imagem: "https://placecats.com/sleepy/300/150"
    }
];

//Cria o servidor realmente, e chama ele de app
const app = express();

app.use(express.json);

//Pede pro servidor ouvir a porta 3000, usada para desenvolvimento local, e coloca o que ele vai fazer quando ouvir alguma coisa nessa porta
app.listen(3000, () => {
    console.log("Servidor escutando");
});

//Buscando um post específico com base no id passado no navegador
function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

//Criando uma rota
app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});