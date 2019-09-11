import React from 'react';

function EditAd() {
  return (
    <main role="main">
        <div className="padding-1 page-container ">
            <h3 className="page-title"><i className="pro-plus-lite margin-r-2"></i> Post Ad</h3>
            <div className="sub-container">
                <form className="form" id="createProperty" enctype="multipart/form-data">
                    <input className="form-input" id="price" type="number" placeholder="price" required/>
                    <input className="form-input" id="autocomplete" placeholder="Enter your address" onFocus="geolocate()" type="text" />
                    <input className="form-input" id="locality" placeholder="city"/>
                    <input className="form-input" id="administrative_area_level_1" placeholder="state"/>
                    <select className="form-input full-width" id="type" required>
                        <option value="singlerooms">singlerooms</option>
                        <option value="3bedrooms">3bedrooms</option>
                        <option value="5bedrooms">5bedrooms</option>
                        <option value="miniflat">miniFlat</option>
                        <option value="others">others</option>
                    </select>
                    <div className="margin-t-4 d-block">
                        <label for="photo-upload" className="btn teal"><i className="pro-images-lite margin-r-2"></i>Upload images</label>
                        <input type="file" id="photo-upload" className="d-none" accept="image/*" multiple required/>
                    </div>
                    <div className="img-upload-preview"></div>
                    <button className="btn blue margin-y-2 float-right ">post ad</button>
                </form>
            </div>
        </div>
    </main>
    );
}

export default EditAd;