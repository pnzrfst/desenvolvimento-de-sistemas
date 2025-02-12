import leia from 'readline-sync'
import exe01 from './exercicio01';
import exe02 from './exercicio02';
import exe03 from './exercicio03';
import exe04 from './exercicio04';
import exe05 from './exercicio05';
import exe06 from './exercicio06';
import exe07 from './exercicio07';
import exe08 from './exercicio08';
import exe09 from './exercicio09';
import exe10 from './exercicio10';
import exe11 from './exercicio11';
import exe12 from './exercicio12';
import exe13 from './exercicio13';
import exe15 from './exercicio15';
import exe16 from './exercicio16';
import exe17 from './exercicio17';
import exe18 from './exercicio18';
import exe19 from './exercicio19';
import exe20 from './exercicio20';
import exe21 from './exercicio21';
import exe22 from './exercicio22';
import exe23 from './exercicio23';
import exe24 from './exercicio24';
import exe25 from './exercicio25';
import exe26 from './exercicio26';
import exe27 from './exercicio27';
import exe28 from './exercicio28';

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
    "12 - Exercicio 12",
    "13 - Exercicio 13",
    //14 estava repetida,
    "15 - Exercicio 15",
    "16 - Exercicio 16",
    "17 - Exercicio 17",
    "18 - Exercicio 18",
    "18 - Exercicio 19",
    "19 - Exercicio 20",
    "20 - Exercicio 21",
    "21 - Exercicio 22",
    "22 - Exercicio 23",
    "22 - Exercicio 24",
    "23 - Exercicio 25",
    "24 - Exercicio 26",
    "25 - Exercicio 27",
    "26 - Exercicio 28"
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
    case 13:
       exe13()
    break;
    case 14:
       exe15()
    break;
    case 15:
       exe16()
    break;
    case 16:
       exe17()
    break;
    case 17:
       exe18()
    break;
    case 18:
       exe19()
    break;
    case 19:
       exe20()
    break;
    case 20:
       exe21()
    break;
    case 21:
       exe22()
    break;
    case 22:
       exe23()
    break;
    case 23:
       exe24()
    break;
    case 24:
       exe25()
    break;
    case 25:
       exe26()
    break;
    case 26:
       exe27()
    break;
    case 27:
       exe28()
    break;
}


