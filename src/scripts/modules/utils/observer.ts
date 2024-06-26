const $element: HTMLElement = document.querySelector('.more')!

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
}

const observer = new IntersectionObserver(handleIntersect, options)

//observer.observe(observer)

function handleIntersect(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target)
    }
  })
}
