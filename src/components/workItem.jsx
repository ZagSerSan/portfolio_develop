import { useState } from 'react'
import Modal from './modal'

const WorkItem = ({ workItem }) => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    if (show) {
      setShow(false)
      document.body.style.removeProperty('overflow')
    } else {
      setShow(true)
      document.body.style = 'overflow: hidden;'
    }
  }

  return (
    <>
      {show && <Modal {...{ workItem, handleShow }} />}
      <div
        onClick={handleShow}
        className="portfolio-item"
        id="lending"
        data-filter="#lending"
        data-modal="modal_1"
      >
        <img
          className="portfolio-item__image"
          src={workItem.img_src}
          alt={workItem.name}
        />
        <div className="portfolio-item__suptitle">
          CATEGORY: {workItem.category}
        </div>
        <div className="portfolio-item__title">
          {workItem.name}
          <time dateTime="2022-11-23">{workItem.date}</time>
        </div>
      </div>
    </>
  )
}

export default WorkItem