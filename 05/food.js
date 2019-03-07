// когда функцию вызовут и передадут в скобки аргумент, то надо ожидать, что это будет нечто под названием meal
function checkMeal(foodObject) {
  if (foodObject["isHealthy"]) {
    console.log("Можно кушать")
  } else {
    console.log("Делай зарядку по утрам!")
  }
  for (let i = 0; i < foodObject.spoons; i++) {
    console.log("ном-ном-ном")
  }
}

let mealOne = {
  name: "Гречка",
  isHealthy: true,
  spoons: 2
}

let mealTwo = {
  name: "Овсянка",
  isHealthy: true,
  spoons: 3
}

let mealThree = {
  name: "Дошик",
  isHealthy: false,
  spoons: 4
}

checkMeal(mealOne)
checkMeal(mealTwo)
checkMeal(mealThree)
