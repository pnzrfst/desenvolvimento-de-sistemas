import leia from 'readline-sync'

export default function exe01(){
    let num = leia.questionInt('Digite um numero: ');

    console.log(`o número anterior é ${--num}`)
}




