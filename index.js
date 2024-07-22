
const prompt = require('prompt-sync')();
const ferias = require("./atividades.js")

const {criar,atualizar,remover,listar} = require ("./atividades.js")

while(true){
    console.log("Oque voce deseja fazer? \n . Criar\n . Atualizar \n Remover \n")
    let opcao = Number (prompt ())

    switch (key) {
        case 1:
            criar()
            break;

            case 2:
            atualizar()
            break;  

            case 3:
            remover()
            break;  

            case 4:
            listar()
            break;  
            
            case 5:
            sair()
            break;  
           
        default:
            console.log("Não entendi")
            break;
    }
}

