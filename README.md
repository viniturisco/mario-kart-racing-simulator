# Mario Kart Racing Simulator

> Projeto completo do desafio do Felipão da DIO, do curso de Node.js, adaptado e implementado por mim.

## Objetivo

<table>
  <tr>
    <td>
      <img src="./docs/header.gif" alt="Mario Kart" width="200">
    </td>
    <td>
      <b>Objetivo:</b>
      <p>Simular uma corrida de Mario Kart com dois personagens em um circuito de 5 rodadas, usando dados e atributos para retas, curvas e confrontos.</p>
    </td>
  </tr>
</table>

## Personagens

<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
  <tr>
    <td style="border: 1px solid black; text-align: center;"><p>Mario</p><img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60"></td>
    <td style="border: 1px solid black; text-align: center;"><p>Velocidade: 4</p><p>Manobrabilidade: 3</p><p>Poder: 3</p></td>
    <td style="border: 1px solid black; text-align: center;"><p>Peach</p><img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60"></td>
    <td style="border: 1px solid black; text-align: center;"><p>Velocidade: 3</p><p>Manobrabilidade: 4</p><p>Poder: 2</p></td>
    <td style="border: 1px solid black; text-align: center;"><p>Yoshi</p><img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60"></td>
    <td style="border: 1px solid black; text-align: center;"><p>Velocidade: 2</p><p>Manobrabilidade: 4</p><p>Poder: 3</p></td>
  </tr>
  <tr>
    <td style="border: 1px solid black; text-align: center;"><p>Bowser</p><img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60"></td>
    <td style="border: 1px solid black; text-align: center;"><p>Velocidade: 5</p><p>Manobrabilidade: 2</p><p>Poder: 5</p></td>
    <td style="border: 1px solid black; text-align: center;"><p>Luigi</p><img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60"></td>
    <td style="border: 1px solid black; text-align: center;"><p>Velocidade: 3</p><p>Manobrabilidade: 4</p><p>Poder: 4</p></td>
    <td style="border: 1px solid black; text-align: center;"><p>Donkey Kong</p><img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60"></td>
    <td style="border: 1px solid black; text-align: center;"><p>Velocidade: 2</p><p>Manobrabilidade: 2</p><p>Poder: 5</p></td>
  </tr>
</table>

## Como funciona

O jogo escolhe um personagem para o jogador e um oponente aleatório. São 5 rodadas, e em cada rodada o tipo de pista é sorteado entre:

- Reta: usa velocidade
- Curva: usa manobrabilidade
- Confronto: usa poder

Para cada rodada, o simulador joga um dado de 6 lados e soma ao atributo correspondente. Nas retas e curvas, quem tem maior resultado ganha 1 ponto. Nos confrontos, o perdedor perde 1 ponto, mas a pontuação nunca fica negativa.

## Resultado

Vence quem acumula mais pontos ao final das 5 rodadas. Se empatar, o jogo termina em empate.

## Tecnologias usadas

- Node.js
- JavaScript
- readline-sync

## Conceitos aprendidos

- lógica de jogo e fluxo de rodadas
- uso de arrays e objetos para armazenar personagens
- estruturas condicionais `switch` e `if`
- tempo de execução com `setTimeout` e promessas
- interação com o usuário via terminal
- jogo inteiro em inglês
