import leia from 'readline-sync'

export default function exe38(){
    let numeros: number[] = [];
    for (let i = 0; i < 10; i++) {
        numeros.push(Math.trunc(Math.random() * 100))
    }

    let maioresDez = numeros.filter((numero) => numero >= 10);

    console.log(numeros)
    console.log(maioresDez)
}