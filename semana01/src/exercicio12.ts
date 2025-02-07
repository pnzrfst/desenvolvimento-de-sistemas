import leia from 'readline-sync'

export default function exe12(){
    //se menor que 12, maca a 0.30
    //se maior, maca a 0.25

    const totalCompradas = leia.questionInt('Digite a qtd de macas compradas: ');

    if(totalCompradas >= 12){
        var precoUnitario = 0.25
        var precoFinal = precoUnitario * totalCompradas;
        console.log(precoFinal);
        return
    }

    var precoUnitario = 0.30
    var precoFinal = precoUnitario * totalCompradas;
    console.log(precoFinal);
}