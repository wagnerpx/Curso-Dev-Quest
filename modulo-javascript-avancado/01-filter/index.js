let pessoas = [
    {nome:'Roberto', cidade:'São Paulo', idade:33},
    {nome:'Fernada', cidade:'Salvador', idade:29},
    {nome:'Gabriel', cidade:'Natal', idade:25},
    {nome:'Marcia', cidade:'Pedro Velho', idade:33},
    {nome:'Pratrício', cidade:'Santa Luzia', idade:33}
]

// let pessoasComIdadeDe33Anos = []
// for(let i = 0; i < pessoas.length; i++){
//     if(pessoas[i].idade === 33){
//         pessoasComIdadeDe33Anos.push(pessoas[i])
//     }
// }

// UTILIZANDO O FILTER
// let pessoasComIdadeDe33Anos = pessoas.filter(function(pessoa){
//     return pessoa.idade === 33
// })
// console.log(pessoasComIdadeDe33Anos);

// SIMPLIFICANDO FILTER COM HERO FUNCION
let pessoasComIdadeDe33Anos = pessoas.filter((pessoa) => pessoa.idade === 33)
console.log(pessoasComIdadeDe33Anos);