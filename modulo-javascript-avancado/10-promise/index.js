/*
    Pendente
    Realizada = Resolve
    Recusada = Reject
    Estabelecida
*/

// new Promise((resolve, reject) => {

// });



let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
        console.log('começando o processo de ferver água');
      resolve();
    } else {
        console.log('é necessario ligar o fogão');
      reject();
    }
  });
};

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)