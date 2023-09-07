const retornoDoUsuario = confirm('Seja bem vindo(a), aventureiro(a)! Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?')

// if(retornoDoUsuario){
//     alert('Ótimo! Nós temos as melhores camas de toda a região!')
// }else if(retornoDoUsuario){
//     alert('Que pena! Você parecia ser um aventureiro!')
// }

retornoDoUsuario ? alert('Ótimo! Nós temos as melhores camas de toda a região!') : alert('Que pena! Você parecia ser um aventureiro!')