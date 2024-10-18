import db from "../../../database/connect.js";


const criarUsuario = async (email, nome, senha) => {
    const query = `INSERT INTO public.usuarios (email, nome, senha) values ($1, $2, $3)`;    
    const params = [email, nome, senha];
    await db.query(query,params);
    return;
}


export default {
    criarUsuario
}