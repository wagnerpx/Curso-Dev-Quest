let pessoas = [
    {nome:'Juca', idade: 45},
    {nome:'Alice', idade: 47},
    {nome:'Eduardo', idade: 45}
]

// let nomeDasPessoas = []
// for (let i=0; i < pessoas.length; i++) {
//     nomeDasPessoas.push(pessoas[i].nome)
// }
// console.log(nomeDasPessoas);


// UTILIZANDO O MAP
// let nomeDasPessoas = pessoas.map(function(pessoa) {
//     return pessoa.nome + " tem " + pessoa.idade + " anos de idade."
// })
// console.log(nomeDasPessoas);


// SIMPLIFICANDO O MAP COM HERO FUNCION
let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + " tem " + pessoa.idade + " anos de idade");
console.log(nomeDasPessoas);