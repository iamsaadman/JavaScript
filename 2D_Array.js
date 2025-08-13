function highestRunScorer(playersInfo) {
  //   console.log(playersInfo);

  var highestScorer = playersInfo[0][0];
  var highestScorer = playersInfo[0][1];

  for (var x = 1; x < playersInfo.length; x++) {
    if (highestRunScorer < playersInfo[x][1]) {
        highestRunScorer = playersInfo[x][1];
        highestRunScorer = playersInfo[x][0];
    }
  }

  return highestRunScorer;
}

var playersInfo = [
  ["Ashraful", 95],
  ["Mizan", 25],
  ["Rakib", 45],
  ["lu", 105],
];

highestRunScorer(playersInfo);
