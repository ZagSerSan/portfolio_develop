import IconSVG from './iconSVG'
import ModalSlider from './modalSlider'

const Modal = ({ workItem, handleShow }) => {
  const { name, category, date, modal_images, description, website_link, file_link } = workItem

  document.addEventListener('keydown', (event) => {
    let key = event.key
    if (key === 'Escape') {
      handleShow()
      key = ''
      document.removeEventListener('keydown', handleShow)
    }
  })

  return (
    <div className="modal-bg--work bg" id="modal_bg">
      <div className="modal-work" id="modal_1">
        <button
          onClick={handleShow}
          type="button"
          className="modal-work__btn-close"
        >
          <IconSVG iconName='close'/>
        </button>

        <div className="modal-work__preview">
          {Array.isArray(modal_images)
            ? <ModalSlider modal_images={modal_images}/>
            : <div className="without-slide">
                <img className='' src={modal_images} alt='preview' />
              </div>
          }
        </div>

        <div className="modal-work__content">
          <h3 className="modal-work__projectname">{name}</h3>
          <h4 className="modal-work__category">
            CATEGORY: {category} <span>|</span> {date}
          </h4>
          <div className="modal-work__used-stack">
            <svg>
              <use href="#html"></use>
            </svg>
            <svg className="scss">
              <use href="#scss"></use>
            </svg>
            <svg className="jquery">
              <use href="#jquery"></use>
            </svg>
            {/* <a href="https://github.com/ZagSerSan/ZagSerSan.github.io/tree/master/portfolio/1-activebox">
                  <svg><use href="#folder"></use></svg>
                </a> */}
            {/* <svg className="react"><use href="#react"></use></svg> */}
          </div>
          <div className="modal-work__client">
            {website_link && (
              <a href={website_link} target="_blank">
                Open website
              </a>
            )}
            {file_link && (
              <a
                href={file_link}
                target="_blank"
              >
                View files
              </a>
            )}
            
          </div>
          <div className="modal-work__textbox">
            <p className="modal-work__text">{description.en}</p>
          </div>
          {/* <div className="modal-work__btnbox">
                <div className="modal-work__btnbox-prev">
                  <button className="modal-work__btn" id="btn_prev" data-openmodal="modal_1" data-prev="modal_4">previous</button>
                </div>
                <div className="modal-work__btnbox-next">
                  <button className="modal-work__btn" id="btn_next" data-openmodal="modal_1" data-next="modal_2">next</button>
                </div>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default Modal