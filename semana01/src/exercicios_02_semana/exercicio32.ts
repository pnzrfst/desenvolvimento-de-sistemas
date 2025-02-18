import leia from 'readline-sync';


export default function exe32(){
    let numero = leia.questionInt("Informe um numero: ");
    let resultado = 1;

    for (var i = numero; i > 0; i--) {
        resultado *= i;
    }

    console.log(resultado)
}
