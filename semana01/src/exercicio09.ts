import leia from 'readline-sync';

export default function exe09(){
    var senha = leia.questionInt('Digita a senha para acessar o sistema: ');

    if(senha !== 1234){
        console.log('Senha incorreta, tente novamente.');
        return
    }

    console.log('Acesso liberado.')
}