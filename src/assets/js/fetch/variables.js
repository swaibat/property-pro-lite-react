document.api = {};
document.api.ads_url ='https://prop-pro.herokuapp.com/api/v2/property';
document.api.users_url ='https://prop-pro.herokuapp.com/api/v2/users';
document.api.ad = (ad)=> {
    return `
        <div className="card">
            <div className="card-body">
                <span className="white shadow price-tag">$${ad.price}</span>
                <a  href="oneAd.html?id=${ad.id}"><img className="card-img" src="${ad.imageurl[0]}" alt="${ad.type}"></a>
            </div>
            <div className="card-foot flex-y">
                <div className="ad-hero bg-imgs">
                    <span class ="img-size">
                        <span className="sm-font">${ad.imageurl.length}<i className="pro-camera-lite margin-l-1"></i></span>
                    </span>
                    <span className="sm-font"><i className="pro-eye-lite red-txt margin-r-1"></i>${ad.views} views</span>
                    <span id="city" className="sm-font margin-r-2"><i className="pro-map-placeholder-dark-symbol-lite margin-r-1"></i>${ad.city}</span>
                </div>
                <div className="card-footer justify-btn flex-y-center">
                    <p id="type">${ad.type}</p>
                    <span>
                        <a id="${ad.id}" className="fav-btn btn orange-txt"><i className="pro-like-lite"></i></a>
                        <a href="oneAd.html?id=${ad.id}" className="btn orange-txt"><i className="pro-earth-lite"></i></a>
                    </span>     
                </div>
            </div>
        </div>
    `;
}
