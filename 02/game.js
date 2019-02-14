/*
  Первая версия игры
  1. Пользователь открывает сайт — запускает игру
  2. Игра размещает корабль
  3. Пользователь играет:
    а. Игра спрашивает куда стрелять и пользователь вводит ответ
    б. Если корабль не потоплен, то игра снова спрашивает координаты выстрела
  4. Финал. Игра выводит статистику и рейтинг игрока
*/

/*
  Создаем 3 переменные для корабля: location1, location2, location3
  Создаем переменную для координат текущего выстрела currentShot
  Создаем переменную, чтобы считать выстрелы shots и присваиваем ей значение 0
  Создаем переменную hits, чтобы считать количество попаданий и присваиваем ей значение 0
  Создаем переменную isSunk, чтобы остлеживать потлплен корабль или нет и присваиваем ей значение false

  Создаем цикл, который будет работать, пока корабль не потоплен:
    1. Получаем координаты выстрела
    2. Сравниваем координаты выстрела с координатами корабля. Если человек попал, то увеличиваем счетчик попаданий hits на 1
    3. Если количество попаданий равно 3, то меняем isSunk на true  и завершаем цикл.

  Выводим сообшение о победе, статистику игры и рейтинг.
*/

let location1 = 5
let location2 = 6
let location3 = 7
let currentShot
let shots = 0
let hits = 0
let isSunk = false

// isSunk !== true
// isSunk === false
while (isSunk !== true) {
  currentShot = Number(prompt("Введите число от 0 до 9"))
  shots = shots + 1
  if (currentShot === location1 ||
      currentShot === location2 ||
      currentShot === location3) {
    hits = hits + 1
  }
  if (hits === 3) {
    isSunk = true
    alert("Победа!")
  }
}
let rating = Math.round(hits / shots * 100)
alert("Всего выстрелов: " + shots + " Рейтинг: " + rating)














// EOF
