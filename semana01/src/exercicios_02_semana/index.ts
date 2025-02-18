import leia from 'readline-sync'
import exe31 from './exercicio31';
import exe32 from './exercicio32';
import exe33 from './exercicio33';
import exe34 from './exercicio34';
import exe35 from './exercicio35';
import exe36 from './exercicio36';
import exe37 from './exercicio37';
import exe38 from './exercicio38';
import exe39 from './exercicio39';
import exe40 from './exercicio40';
import exe41 from './exercicio41';


var opt = leia.keyInSelect([
    "1 - Exercicio 1",
    "2 - Exercicio 2",
    "3 - Exercicio 3",
    "4 - Exercicio 4",
    "5 - Exercicio 5",
    "6 - Exercicio 6",
    "7 - Exercicio 7",
    "8 - Exercicio 8",
    "9 - Exercicio 9",
    "10 - Exercicio 10",
    "11 - Exercicio 11",
    "12 - Exercicio 12",
    "13 - Exercicio 13",
    "14 - Exercicio 14",
    "15 - Exercicio 15",
    "16 - Exercicio 16",
    "17 - Exercicio 17",
    "18 - Exercicio 18",
    "19 - Exercicio 19",
    "20 - Exercicio 20",
    "21 - Exercicio 21"
])+1



switch(opt){
    case 1:
        exe31();
    break;
    case 2:
        exe32();
    break;
    case 3:
        exe33();
    break;
    case 4:
        exe34();
    break;
    case 5:
        exe35();
    break;
    case 6:
        exe36();
    break;
    case 7:
        exe37();
    break;
    case 8:
        exe38();
    break;
    case 9:
        exe39();
    break;
    case 10:
        exe40();
    break;
    case 11:
        exe41();
    break;
    
}