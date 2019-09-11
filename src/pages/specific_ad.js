import React from 'react';

function Ad() {
  return (
    <main role="main">
        <div className="padding-1 page-container">
            <h3 className="page-title margin-3"><i className="pro-plus-lite margin-r-2 sm-font"></i><span>All property</span></h3>
            <div className="sub-container transparent margin-l-1">
                <div className="d-flex product">
                    <div className="white d-flex product padding-2 border-radius margin-r-2">

                        <div id="slider-holder" className="slider-holder">
                            <div id="slider">

                            </div>
                            <span className="prev" onClick="plusSlides(-1)">&#10094;</span>
                            <span className="next" onClick="plusSlides(1)">&#10095;</span>
                            <div id="related" className="row"></div>
                        </div>
                        <div className="flex-y prdt-dtls">
                            <div id="details"></div>
                            <div id="map" className="shadow border-radius"></div>
                            <div className="d-flex float-right margin-t-2">
                                <span onClick="report()" className="btn orange "><i className="pro-like-lite margin-r-1"></i>Favaourite</span>
                                <span onClick="report()" className="btn red margin-l-auto"><i className="pro-flag-lite margin-r-1"></i>Report Ad</span>
                            </div>
                        </div>
                    </div>
                    <div id="agent" className="user-card flex-center shadow">
                    </div>
                </div>
                <h3 className="align-center">More ads by from  swaibu</h3>
                <div id="agentAds" className="card-wrapper flex-center">

                </div>
            </div>

        </div>
    </main>
    );
}

export default Ad;