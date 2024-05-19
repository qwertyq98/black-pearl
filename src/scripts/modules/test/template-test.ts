import { AnswerTextType, dataResults, QuestionTypes } from './data'

const renderAnswers = (answers: AnswerTextType[]) =>
  answers
    .map(
      (answer, index: number) => `
      <button class="quiz__answer-wrapper" data-answer-id="${index}">
        <div class="quiz__answer-number">0${index + 1}</div>
        <div class="quiz__answer-text">${answer.text}</div>
      </button>
      `
    )
    .join('')

const generateResult = (count: number, field: string) => {
  if (count === 1) {
    return dataResults[count][field]
  } else if (count === 2) {
    return dataResults[count][field]
  } else {
    return dataResults[count][field]
  }
}

export const quizTemplate = (question: QuestionTypes) => {
  return `
  <div class="popup popup__question" id='${question.number}'>
    <div class="popup__container quiz__wrapper">
        <button class="popup__close-button popup__close-button_violet"></button>
        <div class="quiz__text-wrapper">
            <h3 class="quiz__title">${question.number}/5</h3>
            <p class="quiz__subtitle">${question.questionText}</p>
        </div>
        <div class="${
          question.number === 1 || question.number === 5
            ? 'quiz__buttons quiz__buttons_row'
            : 'quiz__buttons'
        }">
            ${renderAnswers(question.questionAnswers)}
        </div>
    </div>
  </div>
  `
}

export const resultTemplate = (count: number) => {
  return `
  <div class="popup popup__container popup__question" id='quizPopup'>
    <div class="popup__container quiz__result-wrapper">
        <img class="quiz__result-img" src="${generateResult(count, 'image')}">
        <div class="quiz__result-content">
            <div class="quiz__result-content_wrapper">
            <h3>Результат</h3>
            <p class="quiz__result-text">${generateResult(
              count,
              'subtitle'
            )}</p>
            <p class="quiz__result-description">${generateResult(
              count,
              'text'
            )}</p>
            </div>
            <a class="quiz__result-button" 
            target="_blank"
            href="https://www.ozon.ru/highlight/uhod-za-litsom-chernyy-zhemchug-1124960/?utm_source=YandexTravel_initiative&utm_medium=Display&utm_campaign=vendor_org_120480_Unilever-BP-YandexTravel-SP-Face-Dec23&utm_term=1_RezultatyTesta_W.14-80_Socdem_2pd_AW_KnopkaVybratUhodRezultatTematicheskijKvartirnik&utm_content=LandingHtmlPageY">
            Выбрать уход
            </a>
            <p class="quiz__result-info">${generateResult(count, 'desc')}</p>
        </div>
        <button class="popup__close-button"></button>
    </div>
  </div>
  `
}
