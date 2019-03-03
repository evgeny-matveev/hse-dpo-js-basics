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

/*
  checkSeason() — принимает текущий месяц в виде числа
  и сообщает какое сейчас время года: 3, 4, 5 — весна; 6, 7, 8 — лето; 9, 10, 11 — осень; 12, 1, 2 — зима.
*/
function checkSeason(month) {
  if (month < 1 || month > 12) {
    console.error("На планете Земля такого месяца нет, введите числа от 1 до 12")
  } else {
    if (month === 3 ||
        month === 4 ||
        month === 5) {
      console.log("весна")
    }
    if (month === 6 || month === 7 || month === 8) {
      console.log("лето")
    }
    if (month === 9 || month === 10 || month === 11) {
      console.log("осень")
    }
    if (month === 12 || month === 1 || month === 2) {
      console.log("зима")
    }
  }
}
checkSeason(0)
checkSeason(4)

/*

  Создаю ФУНКЦИЮ checkBedTime, которая принимает время пробуждения — wakeUpTime

  Создаю переменную для желаемого времени засыпания — bedTime

  Рассчитываю в котором часу лечь спать, чтобы поспать 8 часов и сохраняю результат в переменную bedTime

  Вывожу рекомендацию во сколько лечь (bedTime)
  в консоль

*/
function checkBedTime(wakeUpTime) {
  let bedTime
  if (wakeUpTime < 8) {
    bedTime = wakeUpTime + 16
  } else {
    bedTime = wakeUpTime - 8
  }
  console.log(bedTime)
}
checkBedTime(8)
checkBedTime(7)

function double(number) {
  return number * 2
}

let four = double(2)
console.log(four)

console.log(double(2) + double(3))

console.log(double(double(3)))

let readers = 27
function addReader(readersNum) {
  return readersNum + 1
}
console.log(addReader(readers))

function nextEven(num) {
  if (num % 2 === 0) {
    return num + 2
  }
  return num + 1
}
console.log(nextEven(1))
console.log(nextEven(2))

function addOne(num) {
  return num + 1
}
console.log(addOne(123))

let number42 = 42
console.log(addOne(number42))

let num = 7
console.log(addOne(num))

// принимает количество товаров и стоимость за один и возвращает результат
function calcPrice(qty, itemPrice) {
  return qty * itemPrice
}
console.log("calcPrice(10, 2): ", calcPrice(10, 2))

// splitPrice() — принимает общую стоимость, количество человек и говорит, сколько с каждого
function splitPrice(total, peopleNum) {
  return total / peopleNum
}
console.log("splitPrice(100, 2)", splitPrice(100, 2))

// makeDiff() — принимает 3 числа и к наименьшему прибавляет 1, среднее делает четным: а от большого отнимает меньшее + среднее. Описывает все шаги в консоли
// Первая часть: найти минимальное и максимальные числа
// Вторая — сделать вычисления
function makeDiff(a, b, c) {
  let min = Math.min(a, b, c)
  let max = Math.max(a, b, c)
  let median = (a + b + c - max - min)
  let minPlusOne = addOne(min)
  let evenMedian = nextEven(median)
  let newMax = max - min + median
  console.log("К наименьшему прибавляю 1: ", minPlusOne)
  console.log("Среднее делаю четным: ", evenMedian)
  console.log("От большого отнимает меньшее + среднее: ", newMax)
}







// EOL
