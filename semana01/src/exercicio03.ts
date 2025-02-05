import leia from 'readline-sync'

export default function exe03(){
    var anos = leia.questionInt('Digite quantos anos voce tem: ');
    var meses = leia.questionInt('Digite quantos meses voce tem: ');
    var dias = leia.questionInt('Digite quantos dias voce tem:  ');

    var ano = 365;
    var mes = 30;

    var anosEmDias = anos * ano;
    var mesesEmDias = meses * mes;

    var total = anosEmDias + mesesEmDias + dias

    console.log(`Você viveu ${total} dias.`)
}