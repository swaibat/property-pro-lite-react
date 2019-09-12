fetch(`${document.api.ads_url}/${JSON.parse(location.href.split('=')[1])}`)
        .then((response) => response.json())
        .then((e) => {
            // if (e.status === 403) location.replace("index.html")
            if (e.status === 404) document.getElementById('holder').innerHTML = data.error;
            const ad = e.data[0];
            document.querySelector('#details').innerHTML =`
                    <h1 className="margin-1 margin-t-n1">${e.data[0].type} in ${e.data[0].city}</h1>
                        <div className="justify-btn">
                            <p><b>Ad id :</b> ${e.data[0].id} </p>
                            <p className="margin-l-3"><i className="pro-alarm-lite margin-r-2"></i>${e.data[0].owner.createdon.split('T')[0]}</p>
                            <p className="margin-l-3"><i className="pro-eye-lite margin-r-2"></i>${e.data[0].views} views</p>
                        </div>
                        <p className="margin-l-3"><i className="pro-map-placeholder-dark-symbol-lite margin-r-2"></i>${e.data[0].address}</p>
                    <h2>$150</h2>
                `
            document.querySelector('#agent').innerHTML =`
            <div className="flex-center">
                <img className="circle" src="${e.data[0].owner.avatar}" height="85" width="85" alt="user">
                <span  className="status green"></span>
            </div>
            <h3 className="align-center teal-txt margin-b-2">${e.data[0].owner.firstname} ${e.data[0].owner.lastname}</h3>
            <table>
                <tbody>
                    <tr>
                        <td className="left"><i className="pro-phone-lite margin-r-2"></i><span>${e.data[0].owner.phonenumber}</span></td>
                    </tr>
                    <tr>
                        <td  className="left"><i className="pro-envelop-lite margin-r-2"></i><span id="ownerEmail">${e.data[0].owner.email}</span></td>
                    </tr>
                    <tr>
                        <td className="left"><i className="pro-map-placeholder-dark-symbol-lite margin-r-2"></i><span>${e.data[0].owner.address}</span></td>
                    </tr>
                    <tr>
                        <td className="left"><span>Reg Date: ${e.data[0].owner.createdon.split('T')[0]}</span></td>
                    </tr>
                    <tr>
                        <td className="left"><span>Reg: 1/2/2019</span></td>
                    </tr>
                </tbody>
            </table>
            <button className="btn blue align-center">start chat</button>
                 `;
            let imgs = '';
            let others = '';

            for (let i = 0; i < ad.imageurl.length; i++) {
                imgs += `
                <div className="mySlides">
                    <div className="numbertext">${1+i} / ${ad.imageurl.length}</div>
                    <img src="${ad.imageurl[i]}">
                </div>
                    `
                others += `
                <img className="demo cursor" src="${ad.imageurl[i]}" onClick="currentSlide(${1+i})">`  
            }

                document.querySelector('#slider').innerHTML = imgs;
                document.querySelector('#related').innerHTML = others;
                var geocoder = new google.maps.Geocoder();
    var address = e.data[0].address;

    geocoder.geocode( { 'address': address}, function(results, status) {

    if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();

    var latLang = new google.maps.LatLng(latitude, longitude);

        function initMap() {
        var mapProp = {
            center: latLang,
            zoom: 13,
        };
        
        var map = new google.maps.Map(document.getElementById('map'), mapProp);
        
        var marker = new google.maps.Marker({
            position: latLang,
            map: map,
            title: ''
        });
        }

        initMap();
        } 
    }); 
        });
    



    // get agent property
        fetch(document.api.ads_url)
        .then((response) => response.json())
        .then((e) => {
            if (e.status === 404) document.getElementById('holder').innerHTML = data.error;  
            const agentAds = e.data.filter(ad => ad.owner.email === document.querySelector('#ownerEmail').innerHTML)
            let adsByAgent = '';
            agentAds.forEach((ad) => {  
                adsByAgent += document.api.ad(ad);
            });
            document.getElementById('agentAds').innerHTML = adsByAgent;
        });

          function delProperty() {
          fetch(`${document.api.ads_url}/${JSON.parse(location.href.split('=')[1])}`, {
            method: 'DELETE',
                  headers: {
                    Accept: 'application/json, text/plain , */*',
                    'content-type': 'application/json',
                  },
                })
                  .then(response => response.json())
                  .then((data) => {
                    if (data.status === 200) {
                    flashMessage();
                      document.querySelector('.color').classList.add('green');
                      document.querySelector('#signup').classList.remove('visible');
                      document.getElementById('flash-txt').innerHTML = data.message;
                    } else {
                      errorMe();
                      document.querySelector('.color').classList.add('red');
                      document.getElementById('flash-txt').innerHTML = data.error || data.message;
                    }
                  });
        }





        function patchProperty() {
          fetch(`${document.api.ads_url}/${JSON.parse(location.href.split('=')[1])}/sold`, {
            method: 'PATCH',
                  headers: {
                    Accept: 'application/json, text/plain , */*',
                    'content-type': 'application/json',
                  },
                })
                  .then(response => response.json())
                  .then((data) => {
                    if (data.status === 200) {
                    flashMessage();
                      document.querySelector('.color').classList.add('green');
                      document.querySelector('#signup').classList.remove('visible');
                      document.getElementById('flash-txt').innerHTML = data.error || data.message;
                    } else {
                      errorMe();
                      document.querySelector('.color').classList.add('red');
                      document.getElementById('flash-txt').innerHTML = data.error || data.message;
                    }
                  });
        }


