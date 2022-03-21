function mainLoop(...players) {
  const scoreboard = initGame(...players)
  return scoreboard
}

function initGame(...players) {
  const entries = players.map((player) => [player, 501])
  return Object.fromEntries(entries)
}

function evalThrow(thro) {
  if (thro === 'DB') return 50
  if (thro === 'SB') return 25
  return thro.reduce(Math.imul)
}

function ingresarJugada(score, throws) {
  return score - throws.map(evalThrow).reduce((x, y) => x + y)
}

function parsePlay(input) {
  return input.split(' ').map(entry => {
    if (!entry.includes('x')) return entry
    return entry.split('x').map(Number)
  })
}

console.log(mainLoop('Jaime', 'Ema', 'Martin'))
console.log(ingresarJugada(501, parsePlay('DB 3x20 3x19')))
