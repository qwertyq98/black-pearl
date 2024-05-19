import { lockScroll, unlockScroll } from './scroll-lock'

interface PopupElement extends HTMLElement {
  dataset: {
    popupId?: string
  }
}

let counter = 0

const popups: NodeListOf<HTMLElement> = document.querySelectorAll('.popup')
const linkPopups: NodeListOf<PopupElement> =
  document.body.querySelectorAll('[data-popup-id]')

popups.forEach((popup) => setClosePopupHandler(popup))
linkPopups.forEach((link) => setOpenPopupHandler(link))

export function setOpenPopupHandler(link: PopupElement) {
  link.addEventListener('click', openPopupHandler)

  function openPopupHandler(event: MouseEvent) {
    event.preventDefault()

    if (link.dataset.popupId) {
      openPopup(link.dataset.popupId)
    }
  }
}

export function setClosePopupHandler(popup: HTMLElement) {
  const buttonClosePopup = popup.querySelector(
    '.popup__close-button'
  ) as HTMLElement

  buttonClosePopup?.addEventListener('click', closePopup)
  popup.addEventListener('click', overlayCloseHandler)

  function overlayCloseHandler(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      closePopup()
    }
  }

  function closePopup() {
    counter--
    popup.style.backgroundColor = ''
    popup.classList.remove('popup-open')
    unlockScroll()
    document.removeEventListener('keydown', escapeHandler)
  }
}

function openPopup(popupSelector: string) {
  const popup = document.getElementById(popupSelector) as HTMLElement
  popup.style.backgroundColor = ''
  counter++
  if (counter === 1) {
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
  }

  if (popup) {
    lockScroll()
    popup.classList.add('popup-open')
    document.addEventListener('keydown', escapeHandler)
  }
}

export function escapeHandler(event: KeyboardEvent) {
  if (event.key == 'Escape') {
    const popups: NodeListOf<HTMLElement> = document.querySelectorAll('.popup')
    const resultPopup = document.querySelector('.quiz__result-wrapper')

    popups.forEach((popup) => {
      popup.classList.remove('popup-open')
    })
    unlockScroll()
    document.removeEventListener('keydown', escapeHandler)

    if (resultPopup) {
      resultPopup?.closest('.popup')?.remove()
    }
  }
}
