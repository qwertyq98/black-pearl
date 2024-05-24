import { escapeHandler } from '@modules/popups/popups'
import { createElement, occurrence } from '@modules/utils'
import { lockScroll, unlockScroll } from '@modules/utils/scroll-lock'

import { DataQuestions, QuestionTypes } from './data'
import { quizTemplate, resultTemplate } from './template-test'

const answers: number[] = []
let questionNumber = 0

const createQuizCardsTemplates = (questions: QuestionTypes[]) =>
  questions.map((question) => createElement(quizTemplate(question)))
const createResultTemplates = (result: number) =>
  createElement(resultTemplate(result))
const quizCardsTemplates = createQuizCardsTemplates(DataQuestions)
const startTestButton = document.querySelector('.test__start-btn')

const closeButtons: (HTMLButtonElement | null)[] = quizCardsTemplates.map(
  (question) => question?.querySelector('.popup__close-button')
)

quizCardsTemplates.forEach((item) => item && document.body.append(item))

// при нажатии кнопки закрытия очищаю массив ответов
closeButtons.forEach((button: HTMLButtonElement | null | undefined) =>
  button?.addEventListener('click', () => {
    const currentPopup = button.closest('.popup')
    closeTest(currentPopup)
  })
)

const buttonsContainers = document.querySelectorAll('.quiz__buttons')

startTestButton?.addEventListener('click', () => {
  showQuestion(quizCardsTemplates[0])
})

function showQuestion(element) {
  element.classList.add('popup-open')
  document.addEventListener('keydown', (e) => {
    escapeHandler(e)
    answers.length = 0
    questionNumber = 0
  })
  element.addEventListener('click', overlayCloseHandler)
  lockScroll()
}

function closeQuestion(element) {
  element.classList.remove('popup-open')
  document.removeEventListener('keydown', (e) => {
    escapeHandler(e)
    answers.length = 0
    questionNumber = 0
  })
  element.removeEventListener('click', overlayCloseHandler)
  unlockScroll()
}

function closeTest(popup) {
  answers.length = 0
  questionNumber = 0
  unlockScroll()
  closeQuestion(popup)
  document.removeEventListener('keydown', (e) => {
    escapeHandler(e)
    answers.length = 0
    questionNumber = 0
  })
  popup.removeEventListener('click', overlayCloseHandler)
}

function showResults() {
  lockScroll()
  questionNumber = 0
  const result = occurrence(answers)
  document.body.append(createResultTemplates(result - 1))
  const resultPopup = document.getElementById('quizPopup')

  document.addEventListener('keydown', (e) => {
    escapeHandler(e)
    answers.length = 0
    questionNumber = 0
  })
  resultPopup?.addEventListener('click', overlayCloseHandler)

  showQuestion(resultPopup)

  resultPopup
    ?.querySelector('.popup__close-button')
    ?.addEventListener('click', () => {
      answers.length = 0
      resultPopup?.remove()
      unlockScroll()
    })
}

function overlayCloseHandler(event: MouseEvent) {
  const currentTarget = event.currentTarget as HTMLElement
  if (event.target === currentTarget) {
    closeQuestion(currentTarget)
    currentTarget.querySelector('.quiz__result-wrapper') &&
      currentTarget?.remove()
  }
}

buttonsContainers.forEach((container) => {
  container.addEventListener('click', (event) => {
    const element = (event.target as HTMLElement).closest(
      '.quiz__answer-wrapper'
    ) as HTMLElement | null

    if (element) {
      const elementId: string | undefined = element.dataset.answerId

      if (elementId) {
        answers.push(
          DataQuestions[questionNumber].questionAnswers[+elementId].score
        )
      }
      closeQuestion(quizCardsTemplates[questionNumber])

      if (DataQuestions.length - 1 > questionNumber) {
        questionNumber++
        showQuestion(quizCardsTemplates[questionNumber])
      } else {
        showResults()
      }
    }
  })
})
