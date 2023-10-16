'use strict'


// console.log(this)
// console.log(window === this)

// this.name = 'Alexandre'

// function saudar(){
//     console.log('this no contexto da função', this)
//     console.log('Olá, ' + this.name)
// }
// saudar()


// let usuario = {
//     nome: 'Alexandre',
//     saudar: function(){
//         console.log('this no contexto do metodo', this)
//         console.log('this.nome no contexto do metodo', this.nome)
//     }
// }
// usuario.saudar()


let comida = {
    nome:'Brocólis',
    temperatura: 0,
    cozinhar: function(temperaturaDeCozimento){
        console.log('this no contexeto do objeto comida', this)
        this.temperatura = temperaturaDeCozimento
    }
}



comida.cozinhar = function(temperaturaDeCozimento){
    console.log('this no contexeto do objeto comida', this)
    this.temperatura = temperaturaDeCozimento
}
comida.cozinhar(100)
console.log(comida)
