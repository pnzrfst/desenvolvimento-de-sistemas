import leia from 'readline-sync'

export default function exe02(){
    let altura = leia.questionFloat('Digite a altura: ');

    let largura = leia.questionFloat('Digite a largura: ');

    var area = largura * altura;

    console.log(`A área do retangulo é de: ${area}`);
    
}