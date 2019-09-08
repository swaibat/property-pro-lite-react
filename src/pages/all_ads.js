import React from 'react';

function Ads() {
  return (
<main role="main">
        <div class="padding-1 page-container ">
            <div class="wrap-title flex-y-center margin-x-2">
                <h3 class="page-title margin-l-1"><i class="pro-stack-lite margin-r-2"></i>property</h3>
                <form class="margin-l-auto d-flex" autocomplete="off">
                    <div class="autocomplete">
                        <input id="city-search" type="text" onkeyup="myFunction()" placeholder="Quick seach ..."/>
                    </div>
                    <select id="types" onchange="myFunctionTwo()">
                        <option value="singlerooms">singlerooms</option>
                        <option value="3bedrooms">3bedrooms</option>
                        <option value="5bedrooms">5bedrooms</option>
                        <option value="miniflat">miniFlat</option>
                        <option value="others">others</option>
                    </select>
                    <a class="btn teal"><i class="pro-search-lite margin-r-1"></i></a>
                </form>
            </div>
            <div class="sub-container margin-2">
                <div id="all-ads" class="main">
              
                </div>
                <div class="align-center margin-y-3" id="pagination">
                    <a class="btn blue" href="javascript:prevPage()" id="btn_prev">Prev</a>
                    <span class="btn blue-txt">page: <span id="page"></span></span>
                    <a class="btn blue" href="javascript:nextPage()" id="btn_nex">Next</a>  
                </div>
            </div>
        </div>
    </main>
     );
    }
    
export default Ads;