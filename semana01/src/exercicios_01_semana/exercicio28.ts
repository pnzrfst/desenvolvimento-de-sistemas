import leia from 'readline-sync';

export default function exe28(){

    var anos = 0

    var valentina = {
        altura: 1.50,
        cresce: 0.02
    }

    var joaozinho = {
        altura: 1.40,
        cresce: 0.03
    }

    do{
        anos++
        
        valentina.altura += valentina.cresce

        joaozinho.altura += joaozinho.cresce

    }while(joaozinho.altura <= valentina.altura);

    if(joaozinho.altura > valentina.altura){
        console.log(`Joaozinho sera maior que a valentina em ${anos} anos`)
    }


}