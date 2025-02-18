import leia from 'readline-sync';


export default function exe22(){

    var numero = leia.questionInt('Informe um numero: ');
    let maiorNumero = numero
    let menorNumero= numero

    for(var i = 0; i < 2; i++){
        var numero = leia.questionInt('Informe um numero: ');

        if(numero > maiorNumero){
            maiorNumero = numero;
        }

        if(numero < menorNumero){
            menorNumero = numero
        }
    }


    console.log(`o maior numero digitado: ${maiorNumero}`);
    console.log(`o menor numero digitado: ${menorNumero}`)
    

}