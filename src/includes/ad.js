import React from 'react'

function Property({type,price,city,views,image}) {
    return(
        <div class="card">
            <div class="card-body">
                <span class="white shadow price-tag">${price}</span>
                <a href="oneAd.html?id=1"><img class="card-img" src={image} alt={city}/></a>
            </div>
            <div class="card-foot flex-y">
                <div class="ad-hero bg-imgs">
                    <span class="img-size">
                        <span class="sm-font">1<i class="pro-camera-lite margin-l-1"></i></span>
                    </span>
                    <span class="sm-font"><i class="pro-eye-lite red-txt margin-r-1"></i>{views} views</span>
                    <span id="city" class="sm-font margin-r-2"><i class="pro-map-placeholder-dark-symbol-lite margin-r-1"></i>Kampala</span>
                </div>
                <div class="card-footer justify-btn flex-y-center">
                    <p id="type">{type}</p>
                    <span>
                        <a id="1" class="fav-btn btn orange-txt"><i class="pro-like-lite"></i></a>
                        <a href="oneAd.html?id=1" class="btn orange-txt"><i class="pro-earth-lite"></i></a>
                    </span>     
                </div>
            </div>
        </div>
    );
    
}

export default Property;