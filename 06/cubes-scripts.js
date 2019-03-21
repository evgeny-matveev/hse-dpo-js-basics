let $rectOne = document.getElementById('one')
let $rectTwo = document.getElementById('two')
let $rectThree = document.getElementById('three')

$rectOne.onclick = onRectClick
$rectTwo.onclick = onRectClick
$rectThree.onclick = onRectClick

function onRectClick() {
  this.style.backgroundColor = getRGBColor()
  this.classList.toggle('is-cube')
  this.classList.toggle('is-circle')
  this.classList.toggle('is-animated')
  // changeBackground(this)
  // transformToCube(this)
  // transformToCircle(this)
  // toggleAnimation(this)
}
function getRGBCode() {
  return Math.floor(Math.random() * 255)
}
function getRGBColor() {
  return `rgb(${getRGBCode()}, ${getRGBCode()}, ${getRGBCode()})`
}
// function toggleAnimation($rect) {
//   $rect.classList.toggle('is-animated')
// }
// function transformToCircle($rect) {
//   $rect.classList.toggle('is-circle')
// }
// function transformToCube($rect) {
//   $rect.classList.toggle('is-cube')
// }
// function changeBackground($rect) {
//   $rect.style.backgroundColor = getRGBColor()
// }
