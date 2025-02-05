import leia from 'readline-sync'
import exe01 from './exercicio01';
import exe02 from './exercicio02';
import exe03 from './exercicio03';
import exe04 from './exerciocio04';

var opt = leia.keyInSelect([
    
    "1 - Exercicio 01",
    "2 - Exercicio 02",
    "3 - Exercicio 03",
    "4 - Exercicio 04",
    "5 - Exercicio 05"

])+1


switch(opt){
    case 1:
        exe01()
        break;
    case 2:
        exe02()
        break;
    case 3: 
        exe03()
        break;
    case 4:
        exe04()
        break;
    case 5:
        break;
}


