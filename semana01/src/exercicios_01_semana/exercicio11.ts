import leia from 'readline-sync';

export default function exe11(){
    // Final 0 e 1: não pode rodar na segunda-feira;
    // Final 2 e 3: não pode rodar na terça-feira;
    // Final 4 e 5: não pode rodar na quarta-feira;
    // Final 6 e 7: não pode rodar na quinta-feira;
    // Final 8 e 9: não pode rodar na sexta-feira;

    const placa = leia.question('Informe a sua placa: ');

    const ultimoDigito = placa[placa.length - 1]

    if(ultimoDigito === "0" || ultimoDigito === "1"){
        console.log('Não pode rodar na segunda-feira.')
    }
        
    if(ultimoDigito === "2" || ultimoDigito === "3"){
        console.log('Não pode rodar na terça-feira.')
    }
        
    if(ultimoDigito === "4" || ultimoDigito === "5"){
        console.log('Não pode rodar na quarta-feira.')
    } 
        
    if(ultimoDigito === "6" || ultimoDigito === "7"){
        console.log('Não pode rodar na quinta-feira.')
    }
        
    if(ultimoDigito === "8" || ultimoDigito === "9"){
        console.log('Não pode rodar na sexta-feira.')
    }
        
}
