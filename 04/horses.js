let scores = [22, 33, 49, 87, 82, 38, 18, 49, 87, 49, 73, 18, 56, 62]

// Вывести номер и результат каждой лошади в консоль
// Найти и сохранить самый высокий результат в переменную highScore

let highScore = 0
let i = 0
while (i < scores.length) {
  console.log("i = ", i)
  console.log("Длина массива, scores.length = ", scores.length)
  console.log("Теккущий элемент массива, scores[i] = ", scores[i])
  console.log("highScore = ", highScore)
  if (scores[i] > highScore) {
    highScore = scores[i]
  }
  i = i + 1
}
console.log("highScore = ", highScore)













// EOF
