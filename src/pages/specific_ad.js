import React from 'react';

function Ad() {
  return (
    <main role="main">
        <div class="padding-1 page-container">
            <h3 class="page-title margin-3"><i class="pro-plus-lite margin-r-2 sm-font"></i><span>All property</span></h3>
            <div class="sub-container transparent margin-l-1">
                <div class="d-flex product">
                    <div class="white d-flex product padding-2 border-radius margin-r-2">

                        <div id="slider-holder" class="slider-holder">
                            <div id="slider">

                            </div>
                            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                            <a class="next" onclick="plusSlides(1)">&#10095;</a>
                            <div id="related" class="row"></div>
                        </div>
                        <div class="flex-y prdt-dtls">
                            <div id="details"></div>
                            <div id="map" class="shadow border-radius"></div>
                            <div class="d-flex float-right margin-t-2">
                                <a onclick="report()" class="btn orange "><i class="pro-like-lite margin-r-1"></i>Favaourite</a>
                                <a onclick="report()" class="btn red margin-l-auto"><i class="pro-flag-lite margin-r-1"></i>Report Ad</a>
                            </div>
                        </div>
                    </div>
                    <div id="agent" class="user-card flex-center shadow">
                    </div>
                </div>
                <h3 class="align-center">More ads by from  swaibu</h3>
                <div id="agentAds" class="card-wrapper flex-center">

                </div>
            </div>

        </div>
    </main>
    );
}

export default Ad;