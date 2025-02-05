import leia from 'readline-sync'

export default function exe04(){
    let totalEleitores = leia.questionInt("Informe o total de eleitores do municipio: ")
    
    let qtdNulos = leia.questionInt('Informe o total de votos nulos: ');
    let qtdBrancos = leia.questionInt('Informe o total de votos brancos: ');
    let qtdValidos = leia.questionInt('Informe o total de votos validos:  ');

    var percentualNulos = (qtdNulos / totalEleitores) * 100
    var percentualBrancos = (qtdBrancos / totalEleitores) * 100
    var percentualValidos = (qtdValidos / totalEleitores) * 100

    console.log(`o percentual de votos nulos foi de ${percentualNulos}%`);
    console.log(`o percentual de votos brancos foi de ${percentualBrancos}%`);
    console.log(`o percentual de votos validos foi de: ${percentualValidos}%`)



}


