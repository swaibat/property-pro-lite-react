fetch(`${document.api.users_url}/myAccount`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then(response => response.json())
    .then((e) => {
      let oneFav;
      if (e.data.details.favourite < 1) {
        oneFav = '<p class ="align-center">No items found</p>';
      } else {
        e.data.details.favourite.forEach((favOne) => {
          oneFav += `
          <li id="${favOne.id}" className="fav-item">
              <img  src="${favOne.imageurl[0]}">
              <div className="flex-y  align-center">
                  <p className="margin-1">${favOne.type}</p>
                  <small>$${favOne.price}</small>
                  <span  className="badge del-item">x</span>
              </div>
          </li>
          `;
        });
      }
      // get favourite list
      document.querySelector('#favorite-list').innerHTML = oneFav;
});
  