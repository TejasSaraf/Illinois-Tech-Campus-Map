import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showContainer, setShowContainer] = useState(false); // Retaining showContainer
  const [showAerialView, setShowAerialView] = useState(false); // New state for showing the aerial view
  const [videoSrc, setVideoSrc] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const videoRef = useRef(null);

  const PARAMETER_VALUE = "Chicago, IL 60616";

  const videoIdOrAddress = (value) => {
    const videoIdRegex = /[0-9a-zA-Z-_]{22}/;
    return value.match(videoIdRegex) ? "videoId" : "address";
  };

  useEffect(() => {
    const initAerialView = async () => {
      if (videoSrc) return; // Avoid re-fetching if videoSrc already exists

      const parameterKey = videoIdOrAddress(PARAMETER_VALUE);
      const urlParameter = new URLSearchParams();
      urlParameter.set(parameterKey, PARAMETER_VALUE);

      try {
        const response = await fetch(
          `https://aerialview.googleapis.com/v1/videos:lookupVideo?key=AIzaSyAZReI0InY1irXqcWAXA0E9pDMiRhi5Mf0&${urlParameter.toString()}`
        );
        const videoResult = await response.json();

        if (videoResult.state === "PROCESSING") {
          setErrorMessage("Video still processing..");
        } else if (videoResult.error && videoResult.error.code === 404) {
          setErrorMessage(
            "Video not found. To generate video for an address, call on Aerial view renderVideo method."
          );
        } else if (videoResult.uris && videoResult.uris.MP4_HIGH) {
          setVideoSrc(videoResult.uris.MP4_HIGH.portraitUri);
        } else {
          setErrorMessage("Unexpected response structure from server.");
        }
      } catch (error) {
        setErrorMessage("An error occurred while fetching the video.");
      }
    };

    if (showAerialView) {
      initAerialView();
    }
  }, [showAerialView, videoSrc]);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  // Function to toggle aerial view visibility when "relativeLinkBlock" is clicked
  const toggleAerialView = () => {
    setShowAerialView(!showAerialView);
  };

  return (
    <div id="titlebar">
      <div id="wrapper" style={{ padding: "1px 5px 0px" }}>
        <h1
          style={{
            borderRight: "0px",
            padding: "0",
            margin: "0",
            display: "inline-block",
            fontSize: "26px",
            marginTop: "0",
            marginBottom: "10px",
            marginBlockStart: "0em",
            marginBlockEnd: "1em",
          }}
        >
          Illinois Tech
        </h1>

        <div className="topright" style={{ pointerEvents: "all" }}>
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

          <button
            id="selfTourBlock"
            title="Virtual Visitor Tour"
            onClick={() => setShowContainer(!showContainer)}
          >
            <img
              src="./assets/images/camera.png"
              width="23"
              height="23"
              alt="Virtual Visitor Tour"
              title="Virtual Visitor Tour"
            />
          </button>

          {showContainer && (
            <div
              style={{
                width: "30%",
                height: "52%",
                backgroundColor: "white",
                border: "2px solid #edecec",
                position: "absolute",
                zIndex: 1000,
                top: "50px",
                right: "10px",
              }}
            >
              <div
                className="popover fade bottom in"
                role="tooltip"
                id="popover768090"
              >
                <div className="arrow"></div>
                <h3 className="popover-title">Virtual Visitor Tour</h3>
                <div className="popover-content">
                  <div className="col-sm-12">
                    <img
                      src="./assets/images/campus.jpg"
                      className="img-responsive"
                      alt="Main Quad"
                    />
                  </div>
                  <div className="col-sm-12">
                    <button
                      id="campus_tour_button"
                      type="button"
                      className="btn btn-primary"
                      onClick={() =>
                        (window.location.href =
                          "https://www.iit.edu/admissions-aid/visit-and-tour/virtual-tour")
                      }
                    >
                      Let's Get Started!
                    </button>
                  </div>
                  <div className="col-sm-12">&nbsp;</div>
                </div>
              </div>
            </div>
          )}

          {/* Button to trigger aerial view */}
          <button
            id="relativeLinkBlock"
            title="Related Websites"
            onClick={toggleAerialView}
          >
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

      {/* Aerial View Container */}
      {showAerialView && (
        <div
          style={{
            position: "fixed", // Changed to 'fixed' to make sure it stays visible while scrolling
            top: "100px",
            right: "50px",
            height: "500px",
            zIndex: 1000,
            padding: "10px",
          }}
        >
          {errorMessage && <p>{errorMessage}</p>}
          {videoSrc ? (
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              onClick={handleVideoClick}
              style={{ width: "100%", height: "80%" }}
            />
          ) : (
            <p>Loading aerial view...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
