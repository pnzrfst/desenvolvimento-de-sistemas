import leia from 'readline-sync'

export default function exe05(){
    var temperaturaUser = leia.questionFloat('Digite a temperatura em Celsius: ');

    var convertidaFahrenheit = (temperaturaUser * 9 / 5) + 32;
    var convertidaKelvin = temperaturaUser + 273.15

    var opt = leia.keyInSelect(

        [
            "1 - Converter para Fahrenheit: ",
            "2 - Converter para Kelvin:  "
        ]

    )+1


    switch(opt){
        case 1: 
            console.log(convertidaFahrenheit);
        break;
        case 2:
            console.log(convertidaKelvin);
        break;
    }
    
    


}