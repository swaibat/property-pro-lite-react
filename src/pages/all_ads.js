import React from 'react';

function Ads() {
  return (
<main role="main">
        <div className="padding-1 page-container ">
            <div className="wrap-title flex-y-center margin-x-2">
                <h3 className="page-title margin-l-1"><i className="pro-stack-lite margin-r-2"></i>property</h3>
                <form className="margin-l-auto d-flex" autocomplete="off">
                    <div className="autocomplete">
                        <input id="city-search" type="text" onkeyup="myFunction()" placeholder="Quick seach ..."/>
                    </div>
                    <select id="types" onchange="myFunctionTwo()">
                        <option value="singlerooms">singlerooms</option>
                        <option value="3bedrooms">3bedrooms</option>
                        <option value="5bedrooms">5bedrooms</option>
                        <option value="miniflat">miniFlat</option>
                        <option value="others">others</option>
                    </select>
                    <span className="btn teal"><i className="pro-search-lite margin-r-1"></i></span>
                </form>
            </div>
            <div className="sub-container margin-2">
                <div id="all-ads" className="main">
              
                </div>
                <div className="align-center margin-y-3" id="pagination">
                    <span  className="btn blue" id="btn_prev">Prev</span>
                    <span className="btn blue-txt">page: <span id="page"></span></span>
                    <sapn  className="btn blue" id="btn_nex">Next</sapn>  
                </div>
            </div>
        </div>
    </main>
     );
    }
    
export default Ads;