// estanciando o objeto

// let jogo1 = {
//     nome: 'Final fantasy'
// }

// let jogo2 = {
//     nome: 'Follout'
// }

// let videoGame = {
//     nome: 'Xbox',
//     valor: 4000,
//     jogos: ['Final fantasy', 'Fallout', 'Fifa']
// }

// let jogo3 = {
//     nome: 'Fifa'
// }

// modo simplificado

// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: [
//         {nome:'Final fantasy'},
//         {nome: 'Fallout'}
//     ]
// }
// videoGame.jogos.push(jogo3)
// console.log(videoGame)



let cliente = {
    nome: 'Alexandre',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            {nome: 'Fifa'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome)