window.addEventListener('DOMContentLoaded', function(event) {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) document.documentElement.classList.add('dark-mode')

  document.querySelector('.logo').addEventListener('click', function(event) {
    const state = document.documentElement.classList.toggle('dark-mode')
    this.style.transform = `rotateZ(${Number(state)}turn)`
  })
})
