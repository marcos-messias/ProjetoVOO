var readline = require('readline-sync');
 
do{
   
console.log("│−−−−Passagens Aéreas−−−−−│")
console.log("│ 1 - Comprar Passagem    │")
console.log("│ 2 - Consultar Voos      │")
console.log("│ 3 - Mapa de Assentos    │")
console.log("│ 4 - Emitir Ticket       │")
console.log("│ 0 - Encerrar o Programa │")
console.log("│−−−−−−−−−−−−−−−−−−−−−−−−−│")


var desejo = readline.question("O que deseja? = ");


/*Pode voltar para if e else */
     if(desejo == 1){
        console.clear()
        console.log("Você esta em - Comprar Passagem")
        var readline = require('readline-sync');
        var nome = readline.question('Nome:')
        var sobreNome = readline.question('Sobrenome:')
        var idade = readline.question('Idade:')
        var assento = readline.question('Assento:')
        
        
        var origem  = readline.question('Origem:') 
        switch(origem){
            case "Presidente Prudente" :
            console.log("Presidente Prudente")
            break;
            default:
                console.log("Não temos este ponto de origem")
        }
    
        var destino = readline.question('Destino:')
        switch(destino){
            case "Nova York" :
            console.log("Nova York")
            break;
            case "Veneza" :
            console.log("Veneza")
            break;
            case "Tokyo" :
            console.log("Tokyo")
            break;
            case "Rio de Janeiro" :
            console.log("Rio de Janeiro")
            break;
            case "Londres" :
            console.log("Londres")
            break;
            }
             
           
}
    else if(desejo == 2){
        
    console.log("Você esta em - Consulta de Voos")
    console.log("    Origem            x      Destino")
    console.log("--------------------------------------")
    console.log("Presidente Prudente   x     Londres")
    console.log("Presidente Prudente   x     Nova York")
    console.log("Presidente Prudente   x     Veneza")
    console.log("Presidente Prudente   x     Tokyo")
    console.log("Presidente Prudente   x     Rio de Janeiro")

    
}
    

   else if(desejo == 3){
    var i
    var aux 
    var fileiraA = ''
    var fileiraB = ''

    for(i = 1; i <= 12; i++){
        aux = ("A" + i)
        if(aux == assento){
            fileiraA = fileiraA + ' X '
        }else{
            fileiraA = fileiraA + aux+" "
        }
        
    }
    for(i = 1; i <= 12; i++){
        aux = ("B" + i+" ")
        if(aux == assento){
            fileiraB = fileiraB + 'X'
        }else{
            fileiraB = fileiraB + aux
        }
        
    }
   console.log("   Voce esta em - Mapa de assento   ")
   console.log("--------------------------------------")
   console.log(fileiraA)
   console.log(fileiraB)
   console.log("--------------------------------------")
   }
   
    
    
    
   else if(desejo == 4){
   
   console.log("Você esta em - Emitir Ticket")

   console.log("Cliente:" + nome + sobreNome)
   console.log("Idade:" + idade)  
   console.log("Assento:" + assento)
   console.log("Origem/Destino:" + origem + "/" + destino)
   }
    
}while(desejo != 0);

   
    



