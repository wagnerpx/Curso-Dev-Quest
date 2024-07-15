let ordens = [
  { cliente: "Roberto", tipo: "compra", quantidade: 35, ativo: "NFLX34" },
  { cliente: "Rafael", tipo: "venda", quantidade: 45, ativo: "AAPL34" },
  { cliente: "Romero", tipo: "compra", quantidade: 25, ativo: "GOGL34" },
];

// let quantidadeDeOrdens = 0
// for (let i = 0; i < ordens.length; i++){
//     quantidadeDeOrdens += ordens[i].quantidade
// }
// console.log(quantidadeDeOrdens);

// let quantidadeDeOrdens = ordens.reduce(function (somaDasOrdens, ordem) {
//   console.log('ordens', somaDasOrdens, ordem);
//   return somaDasOrdens + ordem.quantidade;
// }, 0);
// console.log(quantidadeDeOrdens);

let quantidadeDeOrdens = ordens.reduce((somaDasOrdens, ordem) => somaDasOrdens + ordem.quantidade, 0);
console.log(quantidadeDeOrdens);