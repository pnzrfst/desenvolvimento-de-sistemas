import leia from 'readline-sync'

export default function exe06(){
    var corridas: any[] = [];
    var total = 0

    for(var i = 0; i < 5; i++){
        var arrecadadoPorCorrida = leia.questionFloat('Digite o valor arrecadado na corrida: ');
        corridas.push(arrecadadoPorCorrida)
        total += arrecadadoPorCorrida;
    }

    var totalDescontado = total * 0.75;

    console.log(`O valor total arrecadado nas 5 corridas foi de: R$ ${total.toFixed(2)}`);
    console.log(`O valor real arrecadado pelo motorista após o desconto de 25% é: R$ ${totalDescontado.toFixed(2)}`);
    
}