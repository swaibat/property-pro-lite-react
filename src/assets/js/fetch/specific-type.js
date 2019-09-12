
fetch(`${document.api.ads_url}?type=${location.href.split('=')[1]}`)
.then(response => response.json())
.then((e) => {
  if (e.status === 403) location.replace('index.html');
  if (e.status === 404) document.getElementById('ads').innerHTML = `<h2>${e.error}</h2>`;

  let ads = '';

  e.data.forEach((ad) => {
    ads += `
        <div className="card">
            <div className="card-body">
                <span className="white shadow price-tag">$${ad.price}</span>
                <a className="bg-imgs" href="oneAd.html"><img src="${ad.imageurl[0]}" alt="${ad.type}" style="width:100%"></a>
            </div>
            <div className="card-foot flex-y">
                <div className="ad-hero">
                    <span className="sm-font"><i className="pro-eye-lite margin-l-3 red-txt margin-r-1"></i>${ad.views} views</span>
                    <span className="sm-font"><i className="pro-location-lite margin-l-3 margin-r-1"></i>${ad.city}</span>
                </div>
                <div className="d-flex padding-2">
                    <p>${ad.type}</p>
                    <a href="oneAd.html?id=${ad.id}" className="margin-l-auto orange-txt">Details</a>
                </div>
            </div>
        </div>
    `;
  });
  document.getElementById('ads').innerHTML = ads;
});
