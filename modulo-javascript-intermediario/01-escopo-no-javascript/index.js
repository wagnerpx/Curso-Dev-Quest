    // O bloco de código if: cria um escopo para a variável mensagem.
    // A variável fica limitada dentro do escopo. 
if(true){
    const mensagem = 'Olá'
    console.log(mensagem)
}
console.log(mensagem)
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //Bloco de codigo não cria um escopo para variáves declaradas com (var)
    //(var) fica acessivel tanto dentro quando fora do escopo.
// {
//     var mensagem = "Olá"
//     console.log(mensagem)
// }
// console.log(mensagem)
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// O corpo da função falar cria um escopo para variável mensagem
// function falar(){
//     var mensagem = 'Olá Mundo!'
//     console.log(mensagem)
// }
// falar()
// console.log(mensagem)
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function falar(){
//     var mensagem = 'Olá Mundo!'
//     console.log(mensagem)
//     function falarOutraCoisa(){

//     }

//     falarOutraCoisa()
//     console.log(falarOutraCoisa)
// }

// falar()
// console.log(url)
