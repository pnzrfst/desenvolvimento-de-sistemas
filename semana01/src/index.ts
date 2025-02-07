import leia from 'readline-sync'
import exe01 from './exercicio01';
import exe02 from './exercicio02';
import exe03 from './exercicio03';
import exe04 from './exerciocio04';
import exe05 from './exercicio05';
import exe06 from './exercicio06';
import exe07 from './exercicio07';
import exe08 from './exercicio8';
import exe09 from './exercicio09';
import exe10 from './exercicio10';
import exe11 from './exercicio11';
import exe12 from './exercicio12';

var opt = leia.keyInSelect([
    
    "1 - Exercicio 01",
    "2 - Exercicio 02",
    "3 - Exercicio 03",
    "4 - Exercicio 04",
    "5 - Exercicio 05",
    "6 - Exercicio 06",
    "7 - Exercicio 07",
    "8 - Exercicio 08",
    "9 - Exercicio 09",
    "10 - Exercicio 10",
    "11 - Exercicio 11",
    "12 - Exercicio 12"
    

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
        exe05()
    break;
    case 6:
        exe06();
    break;
    case 7:
        exe07();
    break;
    case 8:
        exe08()
    break;
    case 9:
        exe09()
    break;
    case 10:
        exe10()
    break;
    case 11:
        exe11()
    break;
    case 12:
        exe12()
    break;
}


