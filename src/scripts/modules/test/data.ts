export interface QuestionTypes {
  questionText: string
  number: number
  questionAnswers: AnswerTextType[]
}

export interface AnswerTextType {
  score: number
  text: string
}

export interface ResultType {
  subtitle: string
  text: string
  desc: string
  image: URL
}

export const DataQuestions: QuestionTypes[] = [
  {
    questionText:
      'Представьте, что на&nbsp;один день вы&nbsp;вновь стали ребёнком. Чем займётесь в&nbsp;этот зимний день?',
    number: 1,
    questionAnswers: [
      {
        text: 'Возьму ледянку и&nbsp;пойду на&nbsp;самую высоую горку во&nbsp;дворе. Картонка тоже подойдёт',
        score: 3,
      },
      {
        text: 'Сделаю бутерброды, позову друга. Весь день будем &laquo;резаться&raquo; в&nbsp;приставку',
        score: 1,
      },
      {
        text: 'На&nbsp;целый день пойдём с&nbsp;родителями в&nbsp;парк&nbsp;&mdash; гулять и&nbsp;есть пончики в&nbsp;сахарной пудре',
        score: 1,
      },
      {
        text: 'Устрою марафон &laquo;Гарри Поттера&raquo;! Книга или кино&nbsp;&mdash; не&nbsp;так важно',
        score: 2,
      },
    ],
  },
  {
    questionText:
      'У&nbsp;вас есть 3&nbsp;выходных и&nbsp;неограниченный бюджет. Куда отправитесь?',
    number: 2,
    questionAnswers: [
      {
        text: 'Арендую самое большое спа в&nbsp;городе и&nbsp;3&nbsp;дня буду переходить из&nbsp;одного бассейна в&nbsp;другой. Иногда прерываясь на&nbsp;массаж',
        score: 2,
      },
      {
        text: 'Соберу друзей, купим билеты и&nbsp;вместе полетим в&nbsp;лето! Загар, волны и&nbsp;полное &laquo;всё включено&raquo;',
        score: 1,
      },
      {
        text: 'Накуплю снаряжения для горнолыжного спорта, давно пора обновить экипировку. Вся зима впереди!',
        score: 3,
      },
    ],
  },
  {
    questionText: 'Какую работу вы&nbsp;бы&nbsp;выбрали?',
    number: 3,
    questionAnswers: [
      {
        text: 'Переворачиватель пингвинов в Арктике',
        score: 3,
      },
      {
        text: 'Смотритель маяка в тёплом море (можно с семьёй!)',
        score: 1,
      },
      {
        text: 'Испытатель 5-звёздочных отелей',
        score: 2,
      },
    ],
  },
  {
    questionText: 'Самый необходимый предмет зимой?',
    number: 4,
    questionAnswers: [
      {
        text: 'Сноуборд или лыжи',
        score: 3,
      },
      {
        text: 'Самый тёплый пуховик',
        score: 1,
      },
      {
        text: 'Чашка горячего чая, книжка и плед',
        score: 2,
      },
    ],
  },
  {
    questionText:
      'Какое у&nbsp;вас самое яркое воспоминание о&nbsp;зиме из&nbsp;детства?',
    number: 5,
    questionAnswers: [
      {
        text: 'Сонный переход от дома до сада или школы морозным утром',
        score: 2,
      },
      {
        text: 'Веник, которым сметали с&nbsp;вас снег в&nbsp;прихожей',
        score: 3,
      },
      {
        text: 'Постройка самой большой снежной крепости во&nbsp;дворе: не&nbsp;таяла до&nbsp;весны!',
        score: 1,
      },
      {
        text: 'Санки, горка, друзья&nbsp;&mdash; и&nbsp;целый день свободы впереди',
        score: 1,
      },
    ],
  },
]

export const dataResults: ResultType[] = [
  {
    image: new URL('/src/images/quiz/res1.jpg', import.meta.url),
    subtitle: 'На горку!',
    desc: '*LiftACTIVATOR [ЛифтАКТИВАТОР]',
    text: 'Кажется, вы&nbsp;действительно любите зиму,&nbsp;&mdash; и&nbsp;это прекрасно! Нет времени откладывать удовольствие. Хватайте ледянку, лыжи или сноуборд и&nbsp;отправляйтесь на&nbsp;склоны или в&nbsp;лес, пока снег не&nbsp;растаял. А&nbsp;после прогулки не&nbsp;забудьте уделить внимание уходу за&nbsp;лицом &mdash;с&nbsp;этим поможет восстанавливающая <a href=`https://www.myblackpearl.ru/product/syvorotka-buster-kollagen target="_blank"`>сыворотка-бустер с&nbsp;коллагеном</a> и&nbsp;<a href=`https://www.myblackpearl.ru/product/face-and-neck-sculpting-cream-liftactivator target="_blank"`>крем-скульптор LiftACTIVATOR*</a> от&nbsp;&laquo;Черного Жемчуга&raquo;, активно питающий кожу и&nbsp;обеспечивающий лифтинг-эффект и&nbsp;контуринг.',
  },
  {
    image: new URL('/src/images/quiz/res2.jpg', import.meta.url),
    subtitle: 'Свидание с собой',
    desc: '*в ассортименте ООО “Юнилевер Русь”',
    text: 'Зима&nbsp;&mdash; это в&nbsp;первую очередь уют и&nbsp;забота о&nbsp;себе. Тёплый свет лампы, гирлянды и&nbsp;хорошее кино создадут праздничную атмосферу. А&nbsp;позаботиться о&nbsp;коже поможет косметика из&nbsp;премиум-коллекций* от&nbsp;&laquo;Черного Жемчуга&raquo;: подготовьте кожу с&nbsp;обновляющей <a href=`https://www.myblackpearl.ru/resort/peelingexpert target="_blank"`>пилинг-маской с&nbsp;АНА- и&nbsp;BHA-кислотами</a>, нанесите увлажняющую <a href=`https://www.myblackpearl.ru/product/syvorotka-buster-gialuron target="_blank"`>сыворотку-бустер</a> для быстрого интенсивного увлажнения, и&nbsp;в&nbsp;завершении&nbsp;&mdash; дневной <a href=`https://www.myblackpearl.ru/product/dnevnoy-krem-filler-dlya-lica target="_blank"`>крем-филлер</a> с&nbsp;пептидным комплексом, который поможет выровнять рельеф кожи и&nbsp;сократить видимость морщин.',
  },
  {
    image: new URL('/src/images/quiz/res3.jpg', import.meta.url),
    subtitle: 'Тематический квартирник',
    desc: '',
    text: 'Ничто не&nbsp;согревает вас зимой лучше хорошей компании! Скорее собирайте друзей на&nbsp;мексиканскую вечеринку с&nbsp;настолками&nbsp;&mdash; с&nbsp;гостей угощение, с&nbsp;вас тематические украшения и&nbsp;сомбреро. Закончить вечер можно на&nbsp;катке, главное&nbsp;&mdash; не&nbsp;снимать шляпы. <br><br>Темы вечеринок ограничены лишь вашей фантазией: хоть в&nbsp;стиле &laquo;Великий Гэтсби&raquo;, хоть с&nbsp;аниме-вайбом. А&nbsp;чтобы сохранить кожу сияющей в&nbsp;череде зимних развлечений, используйте <a href=`https://www.myblackpearl.ru/resort/serum target="_blank"`>сыворотки-бустеры</a> от&nbsp;&laquo;Черный Жемчуг&raquo; перед нанесением макияжа или дневного крема. Это поможет интенсивно увлажнить кожу, сократить мимические морщины&nbsp;&mdash; и&nbsp;не&nbsp;бояться появления новых заломов на&nbsp;лице от&nbsp;ярких эмоций.',
  },
]
