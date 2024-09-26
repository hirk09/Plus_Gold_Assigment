import React from "react";

import "./how-its-work-component.css";

const HowItsWorkComponent = () => {
  return (
    <div className="how-its-work-component">
      <div className="container">
        <div className="mainSection">
          <div className="sect-1">
            <div className="sectionLeftPart">
              <div className="HowItWorks_howItworksTitle">
                How it
                <span>
                  works?
                  <div class="flex justify-center">
                    <div class="HowItWorks_curve_container__E2r5Z">
                      <svg
                        viewBox="0 0 500 50"
                        xmlns="http://www.w3.org/2000/svg"
                        class="HowItWorks_curve_margin__1YQ1R"
                        style={{width: '100%', height: '100%' }}
                      >
                        <path
                          class="HowItWorks_curve_line_non_animate__eCTRu"
                          d="M 0 50 Q 250 0 500 50 T 1000 50"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="sect-1">
            <div class="sectionRightPart">
              <div class="flex justify-center sectionRightPart1">
                <div
                  class="HowItWorks_videoContainerflex justify-center align-center"
                  style={{width: "80%"}}
                >
                  <div class="HorizontalVideoCarousel_carouselContainer__KkUQs flex items-center justify-center">
                    <div
                      class="HorizontalVideoCarousel_carousel__ibyrF"
                    ></div>

                    <div class="HorizontalVideoCarousel_dots mt-2">
                      <div class="HorizontalVideoCarousel_dot"></div>
                      <div class="HorizontalVideoCarousel_dot"></div>
                      <div class="HorizontalVideoCarousel_dot"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItsWorkComponent;
