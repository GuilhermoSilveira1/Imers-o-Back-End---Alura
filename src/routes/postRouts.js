import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
    // Configura o servidor para usar o middleware `express.json`, que converte o corpo das requisições em JSON
    app.use(express.json);
    // Define uma rota GET na URL "/posts"
    // Quando a rota é acessada, busca os posts no banco de dados e retorna como resposta em formato JSON
    app.get("/posts", listarPosts);
    //Rota para criar um post
    app.post("/posts", postarNovoPost);
    //Rota para postar uma imagem
    app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes;