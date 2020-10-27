//A função abaixo irá receber um tabuleiro de Xadrez cujo números de casas é determinado pelo usuário,
//onde, normalmente, conta com 64 casas (8 x 8).

function matrizTabuleiro(col, lin) {
  // Variavel Matrix - Recebe os dados das Colunas e linhas
  let matriz = [];
  let i = 0;
  let j = 0;

  //Usando o For loops para enviar os numeros a matriz
  for (i = 0; i < lin; i++) {
    let linha = [];
    matriz.push(linha);

    //Aqui, a variável coluna irá gerar aleatoriamente números entre 0 e 6
    //Multiplicamos por 7 para que os resultados sejam arredondados para 0 - o menor
    //E 6 - o maior
    for (j = 0; j < col; j++) {
      let coluna = Math.floor(Math.random() * 7);
      matriz[i].push(coluna);
    }
  }

  console.log(matriz);

  let pecas = [];
  for (i = 0; i < 8; i++) {
    pecas.push(0);
  }

  for (i = 0; i < matriz.length; i++) {
    for (j = 0; j < matriz[i].length; j++) {
      pecas[matriz[i][j]]++;
    }
  }

  //com isso, criamos variaveis representando as possibilidades de pecas
  //Associadas a um determinado indice no array. Por conta do For Loop acima
  //cada variável já tem um valor armazenado, será utilizado abaixo
  vazio = pecas[0];
  peao = pecas[1];
  bispo = pecas[2];
  cavalo = pecas[3];
  torre = pecas[4];
  rainha = pecas[5];
  rei = pecas[6];

  //Por fim, iremos retornar os valores das peças abaixo.

  console.log("Casas vazias: " + vazio);
  console.log("Peões: " + peao);
  console.log("Bispos: " + bispo);
  console.log("Cavalos: " + cavalo);
  console.log("Torres: " + torre);
  console.log("Rainhas: " + rainha);
  console.log("Reis: " + rei);
}

matrizTabuleiro(8, 8);
