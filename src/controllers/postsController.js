import { json } from "express";
import fs from "fs";
import { getTodosPosts, criarPost } from "../models/postModel.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts(); // Chama a função para obter os posts
    res.status(200).json(posts); // Retorna os posts com o status HTTP 200 (sucesso)
}

export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500); json({ "Erro": "Falha na requisição" });
    }
}

export async function uploadImagem(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500); json({ "Erro": "Falha na requisição" });
    }
}