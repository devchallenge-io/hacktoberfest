<br />
<p align="center">
  
  <h3 align="center">Desafio 2</h3>

  <p align="center">
   DevChallenge Hacktoberfest
  </p>

## Índice

- [Índice](#índice)
- [Desafio](#desafio)
- [Extras](#extras)
- [Dicas](#dicas)
- [Exemplos](#exemplos)
- [Comunidade](#comunidade)

## Desafio 

### Aplicação
Contando peças de xadrez

### Objetivo: 
- Teste sua logica de programação contabilizando as peças de um tabuleiro de xadrez

### Requisitos:
- Para cada posição do tabuleiro, deve ser informado o código da peça que se encontra nessa posição. 
    - O intervalo compreende -1 < x < 7, onde x representa o número da peça (ou ausência dela, no caso de 0)
    - Apenas inteiros positivos ou nulo podem ser usados como limites
    - O preenchimento do tabuleiro pode envolver uma leitura parcial dos valores (número por número), total (uma linha completa) ou definido no próprio código.
- Contabilize a quantidade de cada tipo de peça existente
- Retorne a quantidade de cada peças do tabuleiro de xadrez:

    - Peão: 4 peça(s)
    - Bispo: 0 peça(s)
    - Cavalo: 0 peça(s)
    - Torre: 2 peça(s)
    - Rainha: 0 peça(s)
    - Rei: 1 peça

### Extras
- Para ser mais desafiador, desenvolva uma solução sem usar estruturas condicionais ou de múltipla escolha (sem ifs, else e switch case).


## Dicas

- O xadrez é um jogo de tabuleiro estratégico, disputado por dois jogadores e que consiste em um tabuleiro com um arranjo de 8 linhas e colunas, formando 64 posições diferentes como uma matriz [8 x 8].

- Existem 6 diferentes tipos de peças no xadrez e cada tipo possui uma quantidade (destacada por parênteses):

    - Peão (8 peças)
    - Bispo (2 peças)
    - Cavalo (2 peças)
    - Torre (2 peças)
    - Rainha (1 peça)
    - Rei (1 peça)
    
- Um tabuleiro completo possui 32 peças. Cada tipo de peça receberá um código:
    - Vazio  = 0
    - Peão   = 1
    - Bispo  = 2
    - Cavalo = 3
    - Torre  = 4
    - Rainha = 5
    - Rei    = 6
    
- Poderá fazer uso do For Loop para resolução do problema    
    

- [Regras do xadrez](https://www.megajogos.com.br/xadrez-online/regras)
- [Sobre o Xadrez](https://pt.wikipedia.org/wiki/Xadrez)

## Exemplos

#### Entrada

    0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0
    0 0 0 1 1 0 0 0
    0 0 0 1 1 0 0 0
    0 0 0 0 0 0 0 0
    4 0 0 0 0 0 0 4
    0 0 0 0 0 6 0 0

#### Saida

    - Peão: 4 peça(s)
    - Bispo: 0 peça(s)
    - Cavalo: 0 peça(s)
    - Torre: 2 peça(s)
    - Rainha: 0 peça(s)
    - Rei: 1 peça

 - A ideia é o usuario informar ou gerar radomicamente os numeros de entrada, para serem proccessados no código 
 - Sendo assim , se na quela sequencia tiver apenas um numero que representa a peça devera retornar sua quantidade, como nso exemplos vistos acima

## Comunidade
Caso tenha alguma dúvida sobre os desafios, fique à vontade para pedir ajuda na comunidade! https://discord.gg/yvYXhGj <br>
<br>
Site: https://www.devchallenge.com.br/ <br>

<table style="border-color:transparent">
    <th>
        <td><a href="https://discord.gg/yvYXhGj"><img src="https://cdn3.iconfinder.com/data/icons/discord/64/discord_20-512.png" width="30px" height="30px" alt="Discord">      </a></td>
    <td><a href="https://www.linkedin.com/company/devchallenge/"><img src="https://image.flaticon.com/icons/svg/1384/1384014.svg" width="30px" height="30px"                alt="Linkedin"></a></td>
    <td><a href="https://twitter.com/dev_challenge"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png" width="30px" height="30px"        alt="Twitter"></a</td>
    <td><a href="https://www.instagram.com/devchallenge/"><img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-3-512.png" width="30px"            height="30px" alt="Instagram"></a></td>
    </th>
</table>

