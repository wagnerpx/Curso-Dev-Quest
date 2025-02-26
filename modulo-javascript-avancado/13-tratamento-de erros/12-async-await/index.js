let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    // throw retorna o tipo de erro, desejado.
    if(typeof chaleiraEstaNoFogao != 'boolean') throw "somente o tipo booleano é aceito"

    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      console.log("Passo 1 finalizado: Água foi fervida");
      resolve(true);
    } else {
      const mensagemDeErro =
        "é necessário colocar a chaleira com água e ligar o fogão, senão teu cáfezinho não vai ficar pronto nunca!";
      reject(mensagemDeErro);
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

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = false;

async function iniciarProcessoDefazerCafe() {
  // try ajuda a tratar o erro
  try {
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
    const cafePassado = await passarCafe(aguaFervida);
    const cafeTomado = await tomarCafe(cafePassado);
    const xicaraLavada = await lavarXicara(cafeTomado);
    // catch trabalha em conjunto com try
  } catch (err) {
    console.log(err);
    // finally roda sempre por último.
  }finally{
    console.log("Finalizado o ritual de tomar café, bora trabalhar!");
  }
}

iniciarProcessoDefazerCafe();
