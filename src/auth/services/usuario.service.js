import queries from "../queries/auth.queries.js"
import { createHash } from "crypto";

const criarUsuario = async (email, nome, senha) => {
    try {
        const senhaMD5 = createHash('md5').update(senha).digest('hex');
        return await queries.criarUsuario(email, nome, senhaMD5); // Exemplo de consultaDS
      } catch (err) {
        console.error(err);
    }
    return;
}


export default  { criarUsuario };