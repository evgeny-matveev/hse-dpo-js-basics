let scores = [22, 33, 49, 87, 82, 38, 18, 49, 87, 49, 73, 18, 56, 62]

let highScore = 0
// let i = 0
// while (i < scores.length) {
//   if (scores[i] > highScore) {
//     highScore = scores[i]
//   }
//   i = i + 1
// }
for (let i = 0; i < scores.length; i++) {
  if (scores[i] > highScore) {
    highScore = scores[i]
  }
}
console.log("highScore = ", highScore)

// Найти лошадей с лучшим результатом
// и сохранить в переменную bestScores
let bestScores = []
// let j = 0
// while (j < scores.length) {
//   if (scores[j] === highScore) {
//     bestScores.push(j)
//   }
//   j += 1
// }
for (let i = 0; i < scores.length; i++) {
  if (scores[i] === highScore) {
    bestScores.push(i)
  }
}
console.log("bestScores = ", bestScores)










// EOF
