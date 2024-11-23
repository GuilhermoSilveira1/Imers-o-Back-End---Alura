// Importa o framework Express para criar o servidor e gerenciar rotas
import express from "express";
import routes from "./src/routes/postRouts.js";

// Cria uma instância do servidor Express e chama ela de `app`
const app = express();
routes(app);

// Inicia o servidor na porta 3000 (usada para desenvolvimento local) e exibe uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor escutando");
});

// Define uma rota GET na URL "/posts"
// Quando a rota é acessada, busca os posts no banco de dados e retorna como resposta em formato JSON
app.get("/posts", async (req, res) => {
    const posts = await getTodosPosts(); // Chama a função para obter os posts
    res.status(200).json(posts); // Retorna os posts com o status HTTP 200 (sucesso)
});
