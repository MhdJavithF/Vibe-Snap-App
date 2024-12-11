import React from 'react'

const ShareBox = () => {
  return (
    <div className='share-wrapper'>
      <div className='share-head'>
        <p>Share Post</p>
        <div className='close'>X</div>
      </div>

      <div className="share-icons">
        <div className="icon">twitter</div>
        <div className="icon">FB</div>
        <div className="icon">Red</div>
        <div className="icon">Dic</div>
        <div className="icon">WP</div>
        <div className="icon">Msgr</div>
        <div className="icon">Tele</div>
        <div className="icon">Inst</div>
      </div>

      <div className="page-link"></div>
    </div>
  )
}

export default ShareBox