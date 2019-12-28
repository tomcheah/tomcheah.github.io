import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              Hi! My name is Tom Cheah and I'm a third year Electrical Engineering and Computer Science major at {' '} <span className="highlight">UC Berkeley</span>.
            </p>
            <p>
              When I'm not coding, I enjoy spending my time dancing, cooking, and gaming. I love combining my two {' '} <span className="highlight">passions</span>, dance and tech, through creative projects. Developing software in student organizations for real users has been one of my highlights of college.  
            </p>
            <p>
              I'll be working at {' '} <span className="highlight">Amazon</span> as a Software Developer Intern in Summer 2020 and at {' '} <span className="highlight">Facebook</span> as a Production Engineer Intern in Fall 2020! 
            </p>
            <p>
              My resume can be found <a href="https://docs.google.com/document/d/10GOcg4CKWJTQ5xmGaRYjH1x2Yu-LP8UhueNfkDUC19s/edit?usp=sharing" target="_blank">here</a>.
            </p>
            <p> 
              Contact me via email: {' '} <span className="highlight">tomcheah@berkeley.edu</span>.
            </p> 
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
