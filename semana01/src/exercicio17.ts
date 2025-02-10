import leia from 'readline-sync'

export default function exe17(){
    var placarTime1 = leia.questionInt('Informe a qtd de gols do time (1): ');
    var placarTime2 = leia.questionInt('Informe a qtd de gols do time (2): ');
    var totaldeGols = placarTime1 + placarTime2

    var diferenca = totaldeGols - placarTime1

    if(diferenca === 0){
        console.log('A partida terminou empatada.');
        return
    }

    if(diferenca > 1 && diferenca < 3){
        console.log('A partida terminou com um resultado normal.')
        return
    }

    if(diferenca >= 4){
        console.log('A partida terminou com uma goleada.');
        return
    }

}