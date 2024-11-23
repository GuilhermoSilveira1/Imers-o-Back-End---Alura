import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Configura o servidor para usar o middleware `express.json`, que converte o corpo das requisições em JSON
    app.use(express.json);
    // Define uma rota GET na URL "/posts"
    // Quando a rota é acessada, busca os posts no banco de dados e retorna como resposta em formato JSON
    app.get("/posts", listarPosts);
};

export default routes;