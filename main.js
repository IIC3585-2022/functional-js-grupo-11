function main_loop(...players) {
  scoreboard = init_game(...players)
}

function init_game(...players) {
  // if (players.length < 2) throw new Error('Get friends');
  let scoreboard = {};
  players.forEach(player => scoreboard[player] = 501)
  return scoreboard;
}

function eval_throw(thro) {
  if (thro === 'DB') return 50;
  if (thro === 'SB') return 25;
  return thro[0] * thro[1];
}

function ingresar_jugada(score, throws) {
  return score - throws.map(eval_throw).reduce((acc, next) => acc + next);
}

console.log(init_game('Jaime', 'Ema'));
console.log(ingresar_jugada(501, ['DB', [3, 20], [3, 19]]));
