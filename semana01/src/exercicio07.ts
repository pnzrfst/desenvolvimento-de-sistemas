import leia from 'readline-sync';

export default function exe07(){
    var valorCompraProduto = leia.questionFloat('Informe o valor de compra do produto: ');

    if(valorCompraProduto < 20.00){
        var preco  = (((valorCompraProduto * 45) / 100) + valorCompraProduto).toFixed(2)
        console.log(`O preço de venda é estimado em: ${preco}`)
    }else{
        var preco = (((valorCompraProduto * 30) / 100) + valorCompraProduto).toFixed(2)
        console.log(`O preço de venda é estimado em: ${preco}`)
    }
    
}