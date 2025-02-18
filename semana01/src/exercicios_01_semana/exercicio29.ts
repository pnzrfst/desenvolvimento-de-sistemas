import leia from 'readline-sync';


export default function exe29(){
    var masculino = 0;
    var feminino = 0;

    var somaAlturasMulheres = 0;
    var somaAlturas = 0;

    var maiorAltura = Infinity;
    var menorAltura = Infinity;


    for(var i = 0; i < 4; i++){
        var alturaPessoa = leia.questionFloat('Digite sua altura: ');

        var genero = "SELECIONE O SEU GENERO" + leia.keyInSelect([
            "0 - MASCULINO",
            "1 - FEMININO"
        ])


        somaAlturas += alturaPessoa

        if(genero === "0"){
            masculino++
            
        }else{
            feminino++
            somaAlturasMulheres += alturaPessoa
        }


        if(!maiorAltura || alturaPessoa > maiorAltura){
            maiorAltura = alturaPessoa
        }


        if(!menorAltura || alturaPessoa < menorAltura){
            menorAltura = alturaPessoa
        }
    }
}