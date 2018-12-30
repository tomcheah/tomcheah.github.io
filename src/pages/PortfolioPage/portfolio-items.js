import React from 'react';

export default [{
  name: 'berkeley-mobile',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Berkeley Mobile
      </div>
      <div className='portfolio-item__desc'>
      	App to help UC Berkeley students discover campus resources
      </div>
      <br />
      <div className='portfolio-item__desc'>
        Implemented web scrapers to retrieve data from UC Berkeley websites
      </div>

      <div className='portfolio-item__icon'>
        <i className="fab fa-python"></i>
        <i className="fab fa-android"></i>
        <i className="fab fa-apple"></i>
      </div>
      <div className='portfolio-item__links'>
		<a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.asuc.asucmobile&hl=en">Play Store</a>
        <a target="_blank" rel="noopener noreferrer" href="https://lh3.googleusercontent.com/mIqZ2vnwvs8jHjCuEVqHB4t5hMF_SsZQ9SAFynxiysK0rOL3u26wYZ8BZVhJ773r6qI=w952-h968-rw">Image</a>
        <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/us/app/berkeley-mobile/id912243518?mt=8">App Store</a>      
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
      	Website to capture the history of a student dance organization
      </div>
      <br />
      <div className='portfolio-item__desc'>
        Implemented an image hover feature to display histories of members
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-react"></i>
        <i className="fab fa-js"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://afx.dance/">Link</a>
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
      	App to help directors manage dance auditions and organize team rosters
      </div>
      <br />
      <div className='portfolio-item__desc'>
        Implemented the backend logic for team switches
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-chrome"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://i.imgur.com/Ts8ovL9.png">Image</a>
        <a target="_blank" rel="noopener noreferrer" href="http://roster.afx.dance/teamswitch">Link</a>
      </div>
    </div>
  )
}]