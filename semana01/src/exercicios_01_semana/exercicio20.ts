import leia from 'readline-sync'


export default function exe20(){
    var numero = leia.questionInt('Informe um numero: ');

    for(var i = numero; i >= 0; i--){
        console.log("Contagem = " + i);
    }
}