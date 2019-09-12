
// get agents own property
fetch(`${document.api.users_url}/myAccount`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then(response => response.json())
    .then((e) => {
      let ownAds = '';
      e.data.myAds.forEach((ad) => {
        ownAds += `
            <tr className="margin-t-3 white">
                <td data-title="image :">
                <a href="product.html?id=${ad.id}">
                    <img className="ad-img shadow" src="${ad.imageurl[0]}" alt="${ad.type}">
                </a></td>
                <td className="subheading">${ad.type}</td>
                <td data-title="price :">$${ad.price}</td>
                <td data-title="status :">
                <a id="status" className="btn small-btn ${ad.status}">${ad.status}</a>
                </td>
                <td data-title="operation :"><a href="product.html?id=${ad.id}" className="btn pin-btn blue"><i className="pro-pencil-lite"></i></a><a href="product.html?id=${ad.id}" className="btn pin-btn red"><i className="pro-bin2-lite"></i></a></td>
            </tr>
          `;
      });
      document.getElementById('ads').innerHTML = ownAds;
    });
  