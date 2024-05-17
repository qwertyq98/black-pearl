import { createElement, occurrence } from '@modules/utils'

import { DataQuestions, dataResults, QuestionTypes, ResultType } from './data'
import { quizTemplate, resultTemplate } from './template-test'

const answers: number[] = []
let res: number | undefined = 0

const createQuizCardsTemplates = (questions: QuestionTypes[]) =>
  questions.map((question) => createElement(quizTemplate(question)))
const createResultTemplates = (results: ResultType[]) =>
  results.map((result, index) => createElement(resultTemplate(index++)))
const quizCardsTemplates = createQuizCardsTemplates(DataQuestions)
const resultTestTemplate = createResultTemplates(dataResults)
const closeButtons: any[] = []

// нахожу конпки закрытия вопросов и добавляю в массив
quizCardsTemplates.forEach((item) => item && document.body.append(item))
quizCardsTemplates.forEach((question) => {
  const element = question && question.querySelector('.popup__close-button')
  element && closeButtons.push(element)
})

// нахожу конпки закрытия результатов и добавляю в массив
resultTestTemplate.forEach((item) => item && document.body.append(item))
resultTestTemplate.forEach((res) => {
  const element = res && res.querySelector('.popup__close-button')
  element && closeButtons.push(element)
})

// при нажатии кнопки закрытия очищаю массив ответов
closeButtons.forEach((button: HTMLButtonElement) =>
  button.addEventListener('click', () => {
    answers.length = 0
  })
)

// нахожу конпки вариантов ответа
const buttons = Array.from(
  document.getElementsByClassName('quiz__answer-wrapper')
)

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button instanceof HTMLElement) {
      if (button.dataset?.category) {
        answers.push(+button.dataset?.category)
      }

      // отрисовка окна результатов

      let lastId
      if (button.dataset.popupId === 'quizPopup6') {
        res = occurrence(answers)
        if (res) {
          lastId = resultTestTemplate[res]?.id
        }
        document.getElementById(lastId)!.id = 'quizPopup6'
        document.getElementById('quizPopup6')

        // если сменился класс заменяем на старый id
        const target = document.getElementById('quizPopup6')
        const config = {
          attributes: true,
        }
        const observer = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            if (mutation.attributeName === 'class') {
              if (target) {
                target.id = lastId
                observer.disconnect()
              }
            }
          })
        })
        target && observer.observe(target, config)
      }
    }
  })
})
