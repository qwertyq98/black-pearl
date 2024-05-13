import { lockScroll, unlockScroll } from './utils/scroll-lock'

const $body: HTMLBodyElement = document.querySelector('body')!
const $burgers: NodeListOf<HTMLElement> =
  document.querySelectorAll('.hamburger')!
const $mobileMenus: NodeListOf<HTMLElement> =
  document.querySelectorAll('.header__wrapper')!
const $mobileLinks: NodeListOf<HTMLElement> =
  document.querySelectorAll('.header__list-item')!

const mobileMenuHandler = (event: Event) => {
  const target = event.target as Element
  if (!target.closest('.header')) {
    Array.from($burgers).forEach(($burger) =>
      $burger.classList.remove('is-active')
    )
    Array.from($mobileMenus).forEach(($mobileMenu) =>
      $mobileMenu.classList.remove('is-active')
    )
    $body.removeEventListener('click', mobileMenuHandler)
  }
}

Array.from($burgers).forEach(($burger) =>
  $burger.addEventListener('click', () => {
    $burger.classList.toggle('is-active')
    Array.from($mobileMenus).forEach(($mobileMenu) => {
      $mobileMenu.classList.toggle('is-active')
      if ($mobileMenus[0].classList.contains('is-active')) {
        lockScroll()
      } else {
        unlockScroll()
      }
    })
    Array.from($mobileLinks).forEach(($mobileLink) => {
      $mobileLink.addEventListener('click', () => {
        document
          ?.querySelector('.header__wrapper')
          ?.classList.remove('is-active')
        $burgers[0]?.classList.remove('is-active')
      })
    })
    $body.addEventListener('click', mobileMenuHandler)
  })
)
