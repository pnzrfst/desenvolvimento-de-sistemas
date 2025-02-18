import leia from "readline-sync";

export default function exe18(){
    var nomeFuncionario = leia.question('Insira seu nome: ');
    var salarioFuncionario = leia.questionFloat('Insira seu salario base: ');
    var dependentes = leia.questionInt('Insira a qtd de dependentes: ');

    switch(dependentes){
        case 0:
            salarioFuncionario = salarioFuncionario * 1.2;
            console.log(`O salario final do funcionario ${nomeFuncionario} é de R$ ${salarioFuncionario}`)
        break;

        case 1: 
            salarioFuncionario = salarioFuncionario * 1.5;
            console.log(`O salario final do funcionario ${nomeFuncionario} é de R$ ${salarioFuncionario}`);
        break;
        
        case 2: 
            salarioFuncionario = salarioFuncionario * 1.7;
            console.log(`O salario final do funcionario ${nomeFuncionario} é de R$ ${salarioFuncionario}`);
        break;
        
        case 3: 
            salarioFuncionario = salarioFuncionario * 1.10;
            console.log(`O salario final do funcionario ${nomeFuncionario} é de R$ ${salarioFuncionario}`);
        break;

        default:
            salarioFuncionario = salarioFuncionario * 1.15;
            console.log(`O salario final do funcionario ${nomeFuncionario} é de R$ ${salarioFuncionario}`);
        break;


    }
}