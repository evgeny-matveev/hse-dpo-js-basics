function checkMovie(name, rating) {
  if (rating >= 7) {
    console.log("На " + name + " стоит сходить в кино.")
  } else {
    console.log(name + " лучше посмотреть дома.")
  }
}

let movieName = "Алита: Боевой ангел"
let movieRating = 7.3
checkMovie("Алита: Боевой ангел", 7.3)

movieName = "Спасти Ленинград"
movieRating = 5.5
checkMovie(movieName, movieRating)

movieName = "Дом, который построил Джек"
movieRating = 5.5
checkMovie(movieName, movieRating)


/*
  Практика. Пишем функции
*/

function sayHello(name) {
  console.log("Привет, " + name)
}
sayHello("Евгенчик")

// findMax() — принимает два числа и выводит большее из них
function findMax(a, b) {
  if (a > b) {
    console.log(a)
  } else {
    console.log(b)
  }
}
let randomNumberOne = Math.random() * 100
let randomNumberTwo = Math.random() * 100
findMax(randomNumberOne, randomNumberTwo)
findMax(22, 43)








// EOL
