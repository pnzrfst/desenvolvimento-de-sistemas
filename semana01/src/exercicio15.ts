import leia from 'readline-sync'


export default function exe15(){
    var valorProduto = leia.questionFloat('Insira o valor do produto: R$ ');


    const cofrinho: any[] = [];
    var totalDoCofre = 0

    while(true){
        var opt = leia.keyInSelect([
            "1 - Moedas de 1 real",
            "2 - Moedas de 50 centavos",
            "3 - Moedas de 25 centavos",
            "4 - Moedas de 10 centavos",
            "5 - Moedas de 5 centavos",
            "6 - Sair do cofre"
        ])+1


        if(opt === 6){
            break;
        }  

        switch(opt){
            case 1: 
                var UmReal = leia.questionInt('Digite quantas moedas de 1 real vc tem no cofrinho: ');
                cofrinho.push({
                    UmReal : UmReal * 1
                })
            break;

            case 2:
                var CinquentaCents = leia.questionInt('Digite quantas moedas de 50 centavos vc tem no cofrinho: ');
                cofrinho.push({
                    CinquentaCents : CinquentaCents * 0.50
                })
            break;
            case 3:
                var VinteCincoCents = leia.questionInt('Digite quantas moedas de 25 centavos vc tem no cofrinho: ');
                cofrinho.push({
                    CinquentaCents : VinteCincoCents * 0.25
                })
            break;

            case 4:
                var DezCents = leia.questionInt('Digite quantas moedas de 10 centavos vc tem no cofrinho: ');
                cofrinho.push({
                    CinquentaCents : DezCents * 0.10
                })
            break;

            case 5:
                var CincoCents = leia.questionInt('Digite quantas moedas de 5 centavos vc tem no cofrinho: ');
                cofrinho.push({
                    CinquentaCents : CincoCents * 0.05
                })
            break;
        }

    }

    totalDoCofre = cofrinho.reduce((acc, moeda) =>{
        return acc + Object.values(moeda)[0]
    }, 0)
    

    if(valorProduto > totalDoCofre){
        console.log('Não eh possivel comprar');
        console.log(`Total guardado: ${totalDoCofre}`)
        return
    }

    console.log('Voce pode comprar.');
    console.log(`Total guardado: ${totalDoCofre}`)

    
}