let toggler = document.getElementById('themeToggler')
toggler.onclick = toggleNightMode
function toggleNightMode() {
  document.body.classList.toggle('is-night')
}

let menuBtn = document.querySelector('.menu-btn')
menuBtn.onclick = toggleMenuVisibility
function toggleMenuVisibility() {
  let nav = document.querySelector('nav')
  nav.classList.toggle('is-active')
}
