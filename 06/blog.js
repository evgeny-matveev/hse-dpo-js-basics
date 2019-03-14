let toggler = document.getElementById('themeToggler')
toggler.onclick = toggleNightMode

function toggleNightMode() {
  document.body.classList.toggle("is-night")
}
