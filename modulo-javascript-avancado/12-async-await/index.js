let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      resolve(true);
      console.log("Passo 1 finalizado: Água foi fervida");
    } else {
      reject();
      console.log(
        "é necessário colocar a chaleira com água e ligaro  fogão senão teu cáfezinho não vai ficar pronto nunca"
      );
    }
  });
};

let passarCafe = (aguaFervida) => {
  return new Promise(function (resolve) {
    console.log("Passo 2 finalizado: Café foi passado");
    resolve();
  });
};

let tomarCafe = (cafePassado) => {
  return new Promise(function (resolve) {
    console.log("Passo 3 finalizado: Terminei de tomar o café");
    resolve();
  });
};

let lavarXicara = (cafeTomado) => {
  return new Promise(function (resolve) {
    console.log("Passo 4 finalizado: Terminei de lavar a xícara");
    resolve();
  });
};

/* 

>>> USANDO O THEN:

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
  .then(passarCafe)
  .then(tomarCafe)
  .then(lavarXicara); 

>>> USANDO ASYNC E AWAIT:

*/

async function iniciarProcessoDefazerCafe() {
  const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
  const cafePassado = await passarCafe(aguaFervida);
  const cafeTomado = await tomarCafe(cafePassado);
  const xicaraLavada = await lavarXicara(cafeTomado);
  if (xicaraLavada) console.log("Finalizado o ritual de tomar café");
}

iniciarProcessoDefazerCafe();

// ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
//   .then(() => {
//     return passarCafe();
//   })
//   .then(() => {
//     return tomarCafe();
//   })
//   .then(() => {
//     return lavarXicara();
//   })
//   .then(() => {
//     console.log('Finalizando ritual do café, bora trabalhar');

//   })
