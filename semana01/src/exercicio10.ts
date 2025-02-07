import leia from 'readline-sync';

export default function exe10(){
    const numero = leia.questionInt('Digite um numero: ')

    if(numero % 2 !== 0){
        console.log('Seu número é ímpar.')
        return
    }

    console.log('Seu número é par.')
}