import leia from 'readline-sync';


export default function exe24(){
    var numeroEscolhido = leia.questionInt('Digite o numero que vc deseja saber a tabuada: ');

    for(var i = 0; i <= 10; i++){
        var totalTabuada = numeroEscolhido * i;

        console.log(`${numeroEscolhido} * ${i} = ${totalTabuada} `)
    }
}