const prompt = require('prompt-sync')()
const atividades = []


const modelo = () => {
    let atividade = {
        dia : undefined,
        descricao : []
    }
    atividade.dia = prompt("Digite o dia" )
    let resposta 
    
    while (true){
      resposta = prompt("O que voce fez neste dia? ")
      if (resposta = !acabou)
      break
    
      atividade.descricao.push(resposta)
      console.log("atividadecadastrada com sucesso")
    }
    
    const listar = () => {
        atividades.forEach(function(atividade, indice) {
            console.log('$(indice+1) $(atividade):');
            atividade.descricao.forEach(descricao) => console.log('$(descricao)')
        }) 
    }
}
const criar = atividade => {
    atividades.push(atividade)
}

let atividade = {
    dia : undefined,
    descricao : []
}
atividade.dia = prompt("Digite o dia" )
let resposta 

while (true){
  resposta = prompt("O que voce fez neste dia? ")
  if (resposta = !acabou)
  break

  atividade.descricao.push(resposta)
  console.log("atividadecadastrada com sucesso")
}

const listar = () => {
    atividades.forEach(function(atividade, indice) {
        console.log('$(indice+1) $(atividade)')
    }) 
}

const atualizar = () => {
    listar ()
    let indice = prompt("Qual indice voce desej atualizar")
    let atividade = modelo()
    atividades[--indice] = atividade

}

const remocao = () => {
    listar()
    let indice = prompt("Qual indice deseja remover")
    atividades.splice(--indice)
    console.log("removido")
}

module,exports = {
    criar,
    atualizar,
    remover,
    listar
}