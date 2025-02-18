import leia from 'readline-sync';

export default function exe08(){
    var doacao = leia.keyInSelect([

        "1 - DOAR R$10",
        "2 - DOAR R$20",
        "3 - DOAR R$50",
        "4 - DOAR OUTRO VALOR"

    ])+1


    switch(doacao){
        case 1: 
            var valorDoacao = 10;
            console.log(`Obrigado! Sua doacao de R$ ${valorDoacao.toFixed(2)} foi realizada com sucesso.`);
        break;
        case 2:
            var valorDoacao = 20;
            console.log(`Obrigado! Sua doacao de R$ ${valorDoacao.toFixed(2)} foi realizada com sucesso.`);
        break;
        case 3:
            var valorDoacao = 50
            console.log(`Obrigado! Sua doacao de R$ ${valorDoacao.toFixed(2)} foi realizada com sucesso.`)
        break;
        default:
            var valorDoacao = leia.questionFloat('Informe o valor que voce deseja doar: ');
            console.log(`Obrigado! Sua doacao de R$ ${valorDoacao.toFixed(2)} foi realizada com sucesso.`)
        break;
    }
}