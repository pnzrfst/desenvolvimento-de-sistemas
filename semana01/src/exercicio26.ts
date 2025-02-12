import leia from 'readline-sync'


export default function exe26(){
    
    var totalSoma = 0
    var totalMulti = 1

    for(var i = 0; i < 6; i++){
       
        var numeroInserido = leia.questionInt('Insira um numero: ');
        if(numeroInserido < 0){
            console.log('Por favor, insira numeros inteiros validos e positivos.')
            i--
        }

        if(numeroInserido % 2 !== 0){
            totalSoma += numeroInserido;
            console.log(`A soma dos numeros impares: ${totalSoma}`)
        }else{
            totalMulti *= numeroInserido
            console.log(`A multiplicacao dos numeros pares: ${totalMulti}`)
        }
    }

}