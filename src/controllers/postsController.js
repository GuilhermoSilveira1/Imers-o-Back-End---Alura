import getTodosPosts from "../models/postModel.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts(); // Chama a função para obter os posts
    res.status(200).json(posts); // Retorna os posts com o status HTTP 200 (sucesso)
}