import leia from 'readline-sync'


export default function exe16(){

    var idade = leia.questionInt('Insira sua idade: ');
    
    if(idade < 18){
        console.log('Voce eh de menor, peca autorizacao pros seus pais: ');
        var termoPais = leia.keyInSelect([
            "1 - SIM",
            "2 - NAO"
        ])

        switch(termoPais){
            case 1:
            console.log("Viagem autorizada.");
            break

            case 2:
                console.log("Voce nao pode ir.");
            break
        }
    }

    console.log('Voce esta apto a ir.')

}