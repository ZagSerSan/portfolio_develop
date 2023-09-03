import IconSVG from './iconSVG'
import ModalSlider from './modalSlider'

const Modal = ({ workItem, handleShow }) => {
  const { name, category, date, modal_images, description, website_link, file_link, used_stack } = workItem
  const lang = 'en' // польский язык

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
            {used_stack && used_stack.map(icon => (
              <div key={icon} title={icon}>
                <IconSVG iconName={icon}/>
              </div>
            ))}
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
            <p className="modal-work__text">{description[lang]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
