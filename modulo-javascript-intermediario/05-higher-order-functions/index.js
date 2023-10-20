// const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
//     const mesAtual = 10
//     let anoDeNascimento = 2023 - idade
//     if(mesDeNascimento > mesAtual) anoDeNascimento --
//     imprimir(anoDeNascimento)
// }

// let imprimirAnoDeNascimento = anoDeNascimento => {
//     console.log('Seu ano de nascimento é: ' + anoDeNascimento)
// }

// calcularAnoDeNascimento(42, 2, imprimirAnoDeNascimento)

const calcularIdade = function (anoDeNascimento, anoAtual, imprimir){
    let idade = 2023 - anoDeNascimento
    imprimir(idade)
}
let imprimirIdade = idade => {
    console.log('Você tem ' + idade + ' anos de idade.')
}
calcularIdade(1981, 2023, imprimirIdade)











// function multiplicar(multiplicador){
//     return function(numero){
//         return numero * multiplicador
//     }
// }

// let dobrar = multiplicar(2)
// let triplicar = multiplicar(3)
// let quadruplicar = multiplicar(4)

// console.log(dobrar(2))
// console.log(triplicar(2))
// console.log(quadruplicar(2))