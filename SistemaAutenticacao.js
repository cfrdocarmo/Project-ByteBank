/*
Ser autenticavel significa ter o método autenticar
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.heAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
       return false;
    }
    static heAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}