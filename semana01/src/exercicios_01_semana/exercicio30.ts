import leia from 'readline-sync';


export default function exe30(){

    let numeroMagico = 0;
    let opt = leia.keyInSelect([
        "0 - PVP",
        "1 - PVE"
    ])

    if(opt === 0){
        numeroMagico = leia.questionInt('Digite um numero: ');
    }else{
        numeroMagico = Math.floor(Math.random() * 100);
    }


    let tentativa
    let numerosAteAcertar = 0
    
    do{
        tentativa = leia.questionInt('Tente acertar o numero: ');
        numerosAteAcertar++

        if(tentativa > numeroMagico){
            console.log('O numero magico eh menor do que o numero inform1ado.');
        }


        if(tentativa < numeroMagico){
            console.log('O numero magico eh maior do que o numero informado.');
        }


    }while(tentativa !== numeroMagico);

    console.log(`voce levou ${numerosAteAcertar} vezes ate acertar o numero.`);

    
    
}