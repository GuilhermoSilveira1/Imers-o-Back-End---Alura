import conectarAoBanco from "../config/dbConfig.js";

// Aguarda a conexão com o banco de dados utilizando uma string de conexão obtida das variáveis de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os documentos da coleção "posts" no banco de dados
export default async function getTodosPosts() {
    // Acessa o banco de dados chamado "imersao-instabytes" usando a conexão estabelecida
    const db = conexao.db("imersao-instabytes");
    // Acessa a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray();
}