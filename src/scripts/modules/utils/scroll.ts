import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill()

const arrowDown: NodeListOf<HTMLElement> =
  document.querySelectorAll('[data-section]')

arrowDown.forEach((arrow) => {
  const section = document.querySelector(`.${arrow.dataset.section}`)
  arrow.addEventListener('click', (event) => {
    event.preventDefault()
    section?.scrollIntoView({
      block: window.innerWidth < 1000 ? 'start' : 'center',
      behavior: 'smooth',
    })
  })
})
