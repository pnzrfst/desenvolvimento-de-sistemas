import leia from 'readline-sync';


export default function exe25(){
    var tamanhoTotal = 1000
    for(var i = 10; i <= tamanhoTotal; i++){
        if(i <= 500){
            console.log(i)
        }
        
        if(i >= 900){
            console.log(i)
        }
    }
}
