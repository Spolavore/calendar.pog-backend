import db from "../../../database/connect.js";


const criarUsuario = async (email, nome, senha) => {
    const query = `INSERT INTO public.usuarios (email, nome, senha) 
                  values ($1, $2, $3) RETURNING *`;    
    const params = [email, nome, senha];
    const dbResponse = await db.query(query,params);
    return dbResponse;
}


export default {
    criarUsuario
}