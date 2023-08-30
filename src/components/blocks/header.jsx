import { useState } from "react"
import avatar from '../../img/header/logo-icon2.png'

const Header = () => {
  const [fixed, setFixed] = useState(false)
  const [burger, setBurger] = useState(false)

  window.addEventListener("scroll", (e) => {
      window.scrollY > 400 ? setFixed(true) : setFixed(false)
  })

  const handleBurger = () => {
    setBurger(prev => !prev)
  }

  // SMOOTH SCROLL
  const handleClick = ({ target }) => {
    const coordY =
      document.querySelector(target.dataset.scroll).getBoundingClientRect()
        .top + window.scrollY
    window.scrollTo({
      top: coordY - 150,
      behavior: 'smooth'
    })
    document.querySelector('.burger').classList.remove('active')
    document.querySelector('.nav').classList.remove('active')
  }

  return (
    <header className={'header' + (fixed ? ' fixed' : '')}>
      <div className="container">
        <div className="header__inner">
          <div className="header-logo">
            <img src={avatar} alt="logo" />
            <div className="header-logo__content">
              <div className="header-logo__name">Serhii Zahorskyi</div>
              <div className="header-logo__prof">Frontend dev</div>
            </div>
          </div>
          <div className="header__nav">
            <nav className={'nav' + (burger ? ' active' : '')}>
              <button
                onClick={handleClick}
                className="nav__link navlinkJS"
                data-scroll="#work"
              >
                PORTFOLIO
              </button>
              <button
                onClick={handleClick}
                className="nav__link navlinkJS"
                data-scroll="#about"
              >
                ABOUT ME
              </button>
              <a
                href="https://drive.google.com/drive/folders/1HKMRvPkR9TdaQ-3hU_OKvDMTbN0abX8l?usp=sharing"
                target="_blank"
                className="nav__link cv"
              >
                SEE MY CV
              </a>
            </nav>
            <a
              href="https://drive.google.com/drive/folders/1HKMRvPkR9TdaQ-3hU_OKvDMTbN0abX8l?usp=sharing"
              target="_blank"
              type="button"
              className="nav__link btn-black"
              id="btn_hireme"
            >
              SEE MY CV
            </a>
            <div onClick={handleBurger} className={'burger' + (burger ? ' active' : '')}>
              <div className="burger__icon">line</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
