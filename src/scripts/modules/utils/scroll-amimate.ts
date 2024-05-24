document.addEventListener('DOMContentLoaded', () => {
  let windowWidth = document.body.clientWidth
  window.addEventListener('resize', (e) => {
    windowWidth = document.body.clientWidth
  })

  if (windowWidth < 1000) {
    const options = {
      threshold: [0.5],
    }
    const observer = new IntersectionObserver(onEntry, options)
    const elements: NodeListOf<HTMLElement> =
      document.querySelectorAll('.element-animation')
    const texts: NodeListOf<HTMLElement> = document.querySelectorAll(
      '.element-animation_text'
    )

    for (const elm of elements) {
      observer.observe(elm)
    }

    for (const text of texts) {
      observer.observe(text)
    }
  }
})

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      if (change.target.classList.contains('element-animation_text')) {
        change.target.classList.add('element-show_text')
      } else {
        change.target.classList.add('element-show')
      }
    }
  })
}
