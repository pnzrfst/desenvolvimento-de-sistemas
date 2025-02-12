
import leia from 'readline-sync'

export default function exe27(){

    var numeros: any[] = []

    do{
        var numero = leia.questionInt('Insira um numero: ');
        if(numero === 100 || numero === 200){
            console.log('Erro, favor digitar novamente.')
        }else{
            numeros.push(numero);
        }

    }while(numero !== 0) 


    console.log(numeros.length - 1)
    
}