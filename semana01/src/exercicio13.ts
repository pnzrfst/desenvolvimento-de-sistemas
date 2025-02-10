import leia from 'readline-sync';

export default function exe13(){
    
    var clientes : any[] = []

    for(var i = 0; i < 2; i++){
        var cliente = {
            nome: leia.question("Digite seu nome: "),
            totalCompra: leia.questionFloat("Digite o total da sua compra: ")
        }    
        clientes.push(cliente)
    }
    
    
    var valorTotal = clientes.reduce((acc, clientes) => acc + clientes.totalCompra, 0);
    var mediaValorTotal = valorTotal / clientes.length;

    console.log(`O valor total das compras dos clientes foi de R$ ${valorTotal}`);
    console.log(`A media dos totais foi de R$ ${mediaValorTotal}`);

    clientes.forEach((cliente  =>{
        if(cliente.totalCompra > 20){
            console.log(cliente.nome)
        }
    }))
    
}