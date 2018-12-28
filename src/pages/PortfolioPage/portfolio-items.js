import React from 'react';

export default [{
  name: 'berkeley-mobile',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Berkeley Mobile
      </div>
      <div className='portfolio-item__desc'>
        Web scrapers to retrieve data from UC Berkeley websites
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-python"></i>
        <i className="fab fa-android"></i>
        <i className="fab fa-apple"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/asuc-octo/asuc-backend">More</a>
      </div>
    </div>
  )
}, {
  name: 'afx-history',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        AFX Dance Website
      </div>
      <div className='portfolio-item__desc'>
        Implemented an image hover feature to display histories of members
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-react"></i>
        <i className="fab fa-js"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://afx.dance/">More</a>
      </div>
    </div>
  )
}, {
  name: 'afx-app',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        AFX Dance Auditions App
      </div>
      <div className='portfolio-item__desc'>
        Implemented the backend logic for team switches
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-chrome"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/afxdance/auditions-app">More</a>
      </div>
    </div>
  )
}]