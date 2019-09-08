import React from 'react';

function EditAd() {
  return (
    <main role="main">
        <div class="padding-1 page-container ">
            <h3 class="page-title"><i class="pro-plus-lite margin-r-2"></i> Post Ad</h3>
            <div class="sub-container">
                <form class="form" id="createProperty" enctype="multipart/form-data">
                    <input class="form-input" id="price" type="number" placeholder="price" required/>
                    <input class="form-input" id="autocomplete" placeholder="Enter your address" onFocus="geolocate()" type="text" />
                    <input class="form-input" id="locality" placeholder="city"/>
                    <input class="form-input" id="administrative_area_level_1" placeholder="state"/>
                    <select class="form-input full-width" id="type" required>
                        <option value="singlerooms">singlerooms</option>
                        <option value="3bedrooms">3bedrooms</option>
                        <option value="5bedrooms">5bedrooms</option>
                        <option value="miniflat">miniFlat</option>
                        <option value="others">others</option>
                    </select>
                    <div class="margin-t-4 d-block">
                        <label for="photo-upload" class="btn teal"><i class="pro-images-lite margin-r-2"></i>Upload images</label>
                        <input type="file" id="photo-upload" class="d-none" accept="image/*" multiple required/>
                    </div>
                    <div class="img-upload-preview"></div>
                    <button class="btn blue margin-y-2 float-right ">post ad</button>
                </form>
            </div>
        </div>
    </main>
    );
}

export default EditAd;