import { useState } from 'react'
import WorkItem from '../workItem'
// slides
import { activebox_preview, activebox_slides } from '../../img/works/activebox'
import { mogo_preview, mogo_slides } from '../../img/works/mogo'
import { designerPortfolio_preview, designerPortfolio_slides } from '../../img/works/designer-portfolio'
// import { calculator_preview, calculator_slide } from '../../img/works/calculator'
import { todoList_preview, todoList_slide } from '../../img/works/todoList'
import { ticTacToe_preview, ticTacToe_slide } from '../../img/works/tic-tac-toe'
import { weatherWidget_preview, weatherWidget_slide } from '../../img/works/weather-widget'
import { contectsMenu_preview, contectsMenu_slide } from '../../img/works/contectsMenu'
import { userCards_preview, userCards_slide } from '../../img/works/user-cards'
import { zadanieRekrutacyjne_preview, zadanieRekrutacyjne_slides } from '../../img/works/zadanie-rekrutacyjne'
import { usersTable_preview, usersTable_slides } from '../../img/works/usersTable'

const works = [
  {
    id: 11,
    name: 'Social Users Table',
    category: 'App',
    date: 'now',
    file_link: 'https://github.com/ZagSerSan/ZagSerSan.github.io/tree/master/portfolio/app/usersTable/',
    img_src: usersTable_preview,
    modal_images: usersTable_slides,
    description: {
      en: 'The project was created in the process of studying at the Junior Frontend course from Vladilen Minima at the Result School. The creation process is relevant at the current time. React, webpack, eslint technologies and libraries like Lodash, router v5-v6, etc. are being studied. This is a new and valuable experience of working and gaining development skills. There will also be a production version.',
      ru: 'Проект был создан в процессе обучения на курсе "Junior Frontend" от Владилена Минима в Result School. Процесс создания актуален на текущий момент времени. Изучаются технологии react, webpack, eslint и библиотеки типа lodash, router v5-v6 и др. Это новый и ценный опыт работы и получения навыков разработки. Также будет продакшн версия.',
      pl: 'Projekt powstał w trakcie nauki na kursie "Junior Frontend" od Vladilena minima w Result School. Proces tworzenia jest aktualny w danym momencie. Badane są technologie react, webpack, eslint i biblioteki takie jak lodash, router v5-v6 itp.To nowe i cenne doświadczenie w pracy i zdobywaniu umiejętności programistycznych. Będzie też wersja produkcyjna.'
    }
  },
  {
    id: 10,
    name: 'Our team',
    category: 'App',
    date: '2023-08-27',
    website_link: 'https://zagsersan.github.io/portfolio_project-files/app/user-cards/build/index.html',
    file_link: 'https://github.com/ZagSerSan/portfolio_project-files/tree/main/app/user-cards',
    img_src: userCards_preview,
    modal_images: userCards_slide,
    used_stack: ['html', 'tailwindcss', 'react', 'webpack', 'github'],
    description: {
      en: 'The project was created by our team of students on the course from Vladilen Minima at Result School in the event of a team competition (hackathon). We coped with the task perfectly and took the first place. Gained valuable team experience and other development skills.',
      ru: 'Проект был создан нашей командой учеников на курсе от Владилена Минима в Result School в мероприятии соревнования команд (хакатон). С заданием мы справились отлично и заняли первое место. Получил ценный опыт работы в команде и другие навыки разработки.',
      pl: 'Projekt został stworzony przez nasz zespół uczniów na kursie od Vladilena minima w Result School w konkursie "hackathon". Z zadaniem poradziliśmy sobie doskonale i zajęliśmy pierwsze miejsce. Zdobył cenne doświadczenie zespołowe i inne umiejętności programistyczne.'
    }
  },
  {
    id: 9,
    name: 'Zadanie Rekrutacyjne',
    category: 'Lending',
    date: '2023-08-22',
    website_link: 'https://zagsersan.github.io/portfolio_project-files/lending/zadanie-rekrutacyjne/dist/index.html',
    file_link: 'https://github.com/ZagSerSan/portfolio_project-files/tree/main/lending/zadanie-rekrutacyjne',
    img_src: zadanieRekrutacyjne_preview,
    modal_images: zadanieRekrutacyjne_slides,
    used_stack: ['html', 'scss', 'tailwindcss', 'javascript', 'jquery', 'github', 'vite'],
    description: {
      en: 'Recruitment task. Here I learned how to make a commercial project, according to the technical task.',
      ru: 'Рек­рутационное задание. Тут я учился делать коммерческий проект, по техническому заданию.',
      pl: 'Zadanie rekrutacyjne. Tutaj nauczyłem się robić projekt komercyjny, zgodnie z zadaniem technicznym.'
    }
  },
  {
    id: 8,
    name: 'Tic-Tac-Toe',
    category: 'App',
    date: '2022-07-23',
    website_link: 'https://zagsersan.github.io/portfolio_project-files/app/tic-tac-toe/dist/index.html',
    file_link: 'https://github.com/ZagSerSan/portfolio_project-files/tree/main/app/tic-tac-toe',
    img_src: ticTacToe_preview,
    modal_images: ticTacToe_slide,
    used_stack: ['html', 'scss', 'react', 'vite'],
    description: {
      en: 'I improved his skills independently developed a small project proposed during the course.',
      ru: 'Я повышал свои навыки самостоятельно разрабатывал небольшой проект, предложенный на курсе.',
      pl: 'Podnosiłem swoje umiejętności, samodzielnie opracowując mały projekt zaproponowany na kursie.'
    }
  },
  {
    id: 7,
    name: 'Weather Widget',
    category: 'App',
    date: '2022-07-12',
    website_link: 'https://zagsersan.github.io/portfolio_project-files/app/weather-widget/dist/index.html',
    file_link: 'https://github.com/ZagSerSan/portfolio_project-files/tree/main/app/weather-widget',
    img_src: weatherWidget_preview,
    modal_images: weatherWidget_slide,
    used_stack: ['html', 'scss', 'react', 'vite'],
    description: {
      en: 'I improved his skills independently developed a small project proposed during the course.',
      ru: 'Я повышал свои навыки самостоятельно разрабатывал небольшой проект, предложенный на курсе.',
      pl: 'Podnosiłem swoje umiejętności, samodzielnie opracowując mały projekt zaproponowany na kursie.'
    }
  },
  {
    id: 6,
    name: 'Contects Menu',
    category: 'App',
    date: '2022-04-03',
    website_link: 'https://zagsersan.github.io/portfolio_project-files/app/contectsMenu/index.html',
    file_link: 'https://github.com/ZagSerSan/portfolio_project-files/tree/main/app/contectsMenu',
    img_src: contectsMenu_preview,
    modal_images: contectsMenu_slide,
    used_stack: ['html', 'scss', 'react', 'webpack', 'github'],
    description: {
      en: 'The project was created by our team of students on a course from Vladilen Minima at Result School. There was a team competition (hackathon) and the task was to create a context menu, which we coped with perfectly and took first place among the other participating teams. Gained valuable team experience and other development skills.',
      ru: 'Проект был создан нашей командой учеников на курсе от Владилена Минима в Result School. Было соревнование команд (хакатон) и заданием было создать контекстное меню, с чем мы справились отлично и заняли первое место среди других команд участников. Получил ценный опыт работы в команде и другие навыки разработки.',
      pl: 'Projekt został stworzony przez nasz zespół uczniów na kursie od Vladilena minima w Result School. Odbył się konkurs drużynowy (Hackathon), a zadaniem było stworzenie menu kontekstowego, z którym poradziliśmy sobie doskonale i zajęliśmy pierwsze miejsce wśród innych drużyn uczestniczących. Zdobył cenne doświadczenie zespołowe i inne umiejętności programistyczne.'
    }
  },
  {
    id: 5,
    name: 'Todo list',
    category: 'App',
    date: '2022-03-23',
    website_link: 'https://zagsersan.github.io/portfolio_project-files/app/todoList/index.html',
    file_link: 'https://github.com/ZagSerSan/portfolio_project-files/tree/main/app/todoList',
    img_src: todoList_preview,
    modal_images: todoList_slide,
    used_stack: ['html', 'scss', 'react', 'webpack'],
    description: {
      en: 'The project was created in the process of studying at the Junior Frontend course from Vladilen Minima at the Result School. Gained new and valuable work experience and development skills.',
      ru: 'Проект был создан в процессе обучения на курсе "Junior Frontend" от Владилена Минима в Result School. Получил новый и ценный опыт работы и навыки разработки.',
      pl: 'Projekt powstał w trakcie nauki na kursie "Junior Frontend" od Vladilena minima w Result School. Zdobyłem nowe i cenne doświadczenie zawodowe i umiejętności programistyczne.'
    }
  },
  // {
  //   id: 4,
  //   name: 'Custom Calculator',
  //   category: 'App',
  //   date: '2022-11-23',
  //   website_link: 'https://zagsersan.github.io/portfolio_project-files/app/calculator/index.html',
  //   file_link: 'https://github.com/ZagSerSan/portfolio_project-files/tree/main/app/calculator',
  //   img_src: calculator_preview,
  //   modal_images: calculator_slide,
  //   description: {
  //     en: 'I must say right away that this calculator is written very scary, because it was my first platform for learning JavaScript. But despite this, it turned out to implement some of the conceived functions and they work, but there are also bugs. In the future, after further training, I want to redo it.',
  //     ru: 'Сразу скажу, что данный калькулятор написан очень страшно, потому что это было моей первой площадкой для изучения JavaScript. Но несмотря на это, всё же некоторые задуманные функции получилось реализовать и они работают, но также присутствуют баги. В дальнейшем, после повышения квалификации, я хочу переделать его.',
  //     pl: 'pl version is none now..'
  //   }
  // },
  {
    id: 3,
    name: 'Designer Portfolio',
    category: 'Lending',
    date: '2021-10-12',
    website_link: 'https://zagsersan.github.io/portfolio_project-files/lending/designer-portfolio/index.html',
    file_link: 'https://github.com/ZagSerSan/portfolio_project-files/blob/main/lending/designer-portfolio/',
    img_src: designerPortfolio_preview,
    modal_images: designerPortfolio_slides,
    used_stack: ['html', 'scss', 'jquery', 'javascript'],
    description: {
      en: 'The third of the same series of lessons on layout. At this time, I was perfecting old skills and trying to learn something new. Here I learned more to program logic, functionality and animations in JavaScript and css. Later, also after consolidating the old and gaining new knowledge, I decided to redo it again with better practice.',
      ru: 'Третий из той самой серии уроков по вёрстке. В это время я совершенствовал старые навыки и пробовал изучать что-то новое. Тут я больше учился программировать логику, функционал и анимации на JavaScript и css. Позже, так же после закрепления старых и получения новых знаний, я решил переделать его снова с более лучшей практикой.',
      pl: 'Trzecia z tej samej serii lekcji układu. W tym czasie doskonaliłem stare umiejętności i próbowałem nauczyć się czegoś nowego. Tutaj nauczyłem się bardziej programować logikę, funkcjonalność i animacje w JavaScript i css. Później, podobnie jak po utrwaleniu starych i zdobyciu nowej wiedzy, postanowiłem przerobić go ponownie z lepszą praktyką.'
    }
  },
  {
    id: 2,
    name: 'MoGo',
    category: 'Lending',
    date: '2021-08-21',
    website_link: 'https://zagsersan.github.io/portfolio_project-files/lending/mogo/index.html',
    file_link: 'https://github.com/ZagSerSan/portfolio_project-files/blob/main/lending/mogo/',
    img_src: mogo_preview,
    modal_images: mogo_slides,
    used_stack: ['html', 'scss', 'jquery'],
    description: {
      en: 'The second project after ActiveBox. Here I learned more about using css and jquery preprocessors. Later, after consolidating the old and gaining new knowledge, I decided to redo it again with better practice. After finishing the course, I want to change it to react.js',
      ru: 'Второй проект после ActiveBox. Тут я больше учился пользоваться препроцессорами scss и jquery. Позже, после закрепления старых и получения новых знаний, я решил переделать его снова с более лучшей практикой. После окончания курса хочу переделать его на react.js',
      pl: 'Drugi projekt po ActiveBox. Tutaj nauczyłem się więcej korzystać z preprocesorów css i jquery. Później, po utrwaleniu starej i zdobyciu nowej wiedzy, postanowiłem przerobić ją ponownie z lepszą praktyką. Po ukończeniu kursu chcę go przerobić na react.js'
    }
  },
  {
    id: 1,
    name: 'ActiveBox',
    category: 'Lending',
    date: '2021-06-10',
    website_link: 'https://zagsersan.github.io/portfolio_project-files/lending/activebox/index.html',
    file_link: 'https://github.com/ZagSerSan/portfolio_project-files/blob/main/lending/activebox/',
    img_src: activebox_preview,
    modal_images: activebox_slides,
    used_stack: ['html', 'css', 'jquery'],
    description: {
      en: 'This site was my first project. At that time, I was just starting to learn the basics of layout using a design template. But then, after consolidating the old and gaining new knowledge, I decided to redo it again with better practice. After finishing the course, I want to change it to react.js',
      ru: 'Данный сайт был моим первым проектом. В это время я только начинал изучать основы вёрстки по шаблону дизайна. Но потом, после закрепления старых и получения новых знаний, я решил переделать его снова с более лучшей практикой. После окончания курса хочу переделать его на react.js',
      pl: 'Ta strona była moim pierwszym projektem. W tym czasie dopiero zaczynałem uczyć się podstaw układu szablonu projektu. Ale potem, po utrwaleniu starej i zdobyciu nowej wiedzy, postanowiłem przerobić ją ponownie z lepszą praktyką. Po ukończeniu kursu chcę go przerobić na react.js'
    }
  }
]

const Portfolio = () => {
  const [filter, setFilter] = useState('all')

  const filteredWorks = filter !== 'all'
    ? works.filter(item => item.category.toLowerCase() === filter)
    : works

  return (
    <div className="work" id="work">
      <div className="container">
        <div className="filter">
          <button
            onClick={() => setFilter('all')}
            className={'filter__link' + (filter === 'all' ? ' active' : '')}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('lending')}
            className={'filter__link' + (filter === 'lending' ? ' active' : '')}
          >
            Lending
          </button>
          <button 
            onClick={() => setFilter('app')}
            className={'filter__link' + (filter === 'app' ? ' active' : '')}
          >
            App
          </button>
        </div>

        <div className="portfolio">
          {Object.keys(filteredWorks).map((work) => (
            <WorkItem key={filteredWorks[work].id} workItem={filteredWorks[work]} />
          ))}
        </div>
        {/* <button type="button" id="loadmoreworks" className="work__btn btn-black">LOAD MORE WORK</button> */}
      </div>
    </div>
  )
}

export default Portfolio
