import IconSVG from "../iconSVG"
// import my_photo from '../../img/intro/photo.png'
import my_photo from '../../img/intro/photo.webp'

const social = [
  {iconId: 'mail', subClass: 'linkedin', href: 'https://mailto:yan.steys1997@gmail.com'},
  {iconId: 'telegram', subClass: 'telegram', href: 'https://t.me/ZagSerSan'},
  {iconId: 'viber', subClass: 'viber', href: 'https://viber.click/48577782439'},
  {iconId: 'facebook', subClass: 'facebook', href: 'https://www.facebook.com/profile.php?id=100036791829059'},
  {iconId: 'instagram', subClass: 'instagram', href: 'https://www.instagram.com/zagsersan/'},
  {iconId: 'github', subClass: 'github', href: 'https://github.com/ZagSerSan'},
  {iconId: 'linkedin', subClass: 'linkedin', href: 'https://www.linkedin.com/in/zagsersan/'},
]

const Intro = () => {
  return (
    <div className="intro">
      <div className="container">
        <div className="intro__inner">
          <div className="intro-content">
            <div>
              <h2 className="intro-content__greeting">Hello, I’m</h2>
              <h1 className="intro-content__name">Serhii Zahorskyi</h1>
              <p className="intro-content__prof">Frontend developer</p>
              <div className="social">
                {social && social.map((item, index) => (
                  <a
                    key={`${index}_${item.iconId}`}
                    href={item.href}
                    target="_blank"
                    className={`social__item ${item.subClass}`}
                  >
                    <IconSVG iconName={item.iconId}/>
                  </a>
                ))}
              </div>
              {/* <button type="button" className="btn-black" id="btn_hireme">HIRE ME</button> */}
              {/* <button type="button" className="btn-black" id="btn_resume">SEE MY RESUME</button> */}
            </div>
          </div>
          <div className="intro-photo">
            <img src={my_photo} alt="photo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
