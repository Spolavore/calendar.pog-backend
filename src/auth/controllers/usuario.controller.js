import usuarioService from "../services/usuario.service.js";
import httpStatus from "../../utils/Constants.js";

const criarUsuario = async (req,res) => {
    const email = req.body.email;
    const nome = req.body.nome;
    const senha = req.body.senha;

    if(!email || !nome || !senha) return res.status(httpStatus.BAD_REQUEST).send('Falta parâmetros no corpo da requisição');

    try {
        await usuarioService.criarUsuario(email, nome, senha);
        return res.sendStatus(httpStatus.NO_CONTENT);
    } catch (error) {
        console.error(error);
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
};


export default { criarUsuario };
