
import express from 'express'
import dotenv from 'dotenv';
import usuarioController from './auth/controllers/usuario.controller.js';

dotenv.config()
const app = express();
const porta = process.env.PORT || 3000;
app.use(express.json());

app.post('/criar-usuario', usuarioController.criarUsuario);


app.listen(porta, () => {
    console.log(`Aplicativo rodando na porta ${porta}`);
});