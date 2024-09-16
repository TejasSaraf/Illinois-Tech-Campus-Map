import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div id="titlebar">
      <div id="wrapper" style={{ padding: '4px 10px 0' }}> 
        <h1
          style={{
            borderRight: '0px',
            padding: '0',
            margin: '0',
            display: 'inline',
            fontSize: '26px',
            marginTop: '0',
            marginBottom: '10px',
            marginBlockStart: '0em',
            marginBlockEnd: '1em',
          }}
        >
         Illinois Tech
        </h1>

        <div className="topright" style={{ pointerEvents: 'all' }}>
          <a
            href="https://iit.okta.com/oauth2/v1/authorize?client_id=okta.2b1959c8-bcc0-56eb-a589-cfcfb7422f26&code_challenge=aUHnjC370QoQtg2Vaxi9gy17_BmrS3n4OSMi_LIITnE&code_challenge_method=S256&nonce=BREMsOeZ2yzGBqNF3NXy2hJtT49hdfFhZL4E5lj9pGBoqlFkv2aoCDOXWqKxjbbc&redirect_uri=https%3A%2F%2Fiit.okta.com%2Fenduser%2Fcallback&response_type=code&state=jCVjys9lAE47kVAPVyJofaCqRALQK5ZXHkSa4KlVjtAeMc6VyhqBwPXrhtp0vljz&scope=openid%20profile%20email%20okta.users.read.self%20okta.users.manage.self%20okta.internal.enduser.read%20okta.internal.enduser.manage%20okta.enduser.dashboard.read%20okta.enduser.dashboard.manage%20okta.myAccount.sessions.manage"
            className="btn btn-primary login headlogin"
            data-intro="Student Login"
            title="Student Login"
            data-position="bottom"
            id="maincontent"
          >
            <i className="fa fa-sign-in" aria-hidden="true"></i>
            <span className="conditionaldisplay">Student </span>Login
          </a>

          <button id="selfTourBlock" title="Virtual Visitor Tour">
            <img
              src=".\assets\images\camera.png"
              width="23"
              height="23"
              alt="Virtual Visitor Tour"
              title="Virtual Visitor Tour"
            />
          </button>

          <button id="relativeLinkBlock" title="Related Websites">
            <img
              src=".\assets\images\relative_link_g1.png"
              width="23"
              height="23"
              alt="Related Websites"
            />
          </button>

          <button id="mapLegendBlock" title="Map Legend">
            <img
              src="./assets/images/map_legend_g1.png"
              width="23"
              height="23"
              alt="Map Legend"
            />
          </button>

          <button id="infoLinkBlock" title="Information">
            <img
              src="./assets/images/faq_1.png"
              width="23"
              height="23"
              alt="Information"
            />
          </button>

          <button id="questionsBlock">
            <img
              src="./assets/images/questions.png"
              alt="Questions"
              width="23"
              height="23"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

