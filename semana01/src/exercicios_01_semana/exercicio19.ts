import leia from 'readline-sync'


export default function exe19(){
    var numero = leia.questionInt('Informe um numero: ');

    for(var i = 0; i < numero; i++){
        console.log("Contagem = " + i);
    }
}