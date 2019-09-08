import React from 'react';

function Footer() {
    return (
        <footer class="footer white">
        <a class="margin-r-4">Property-lite 2019</a>
        <div id="signup" class="modal-container">
        <div class="modal">
            <button onclick="closeUp()" class="close-modal">X</button>
            <form id="createUser">
                <h2 class="align-center margin-l-n3">sign-up</h2>
                <input class="form-input" type="text" id="firstName" placeholder="Firstname" required />
                <input class="form-input" type="text" id="lastName" placeholder="Lastname" required />
                <input class="form-input" type="number" id="phoneNumber" placeholder="phoneNumber" required />
                <input class="form-input email" type="email" placeholder="Email" required />
                <input class="form-input" type="address" id="address" placeholder="address" required />
                <select class="form-input full-width" id="isAgent" required>
                    <option value="">Are you an agent ?</option>
                    <option value="true">yes</option>
                    <option value="false">No</option>
                </select>
                <input class="form-input password" type="password" placeholder="Password" minlength="5" required />
                <button type="submit" class="btn blue  margin-y-4 float-right ">Signup now</button>
            </form>
        </div>
    </div>
    <div id="signin" class="modal-container">
        <div class="modal">
            <button onclick="closeIn()" class="close-modal">X</button>
            <form id="userSignin">
                <h2 class="align-center margin-t-2">User signIn</h2>
                <input class="form-input" id="email" type="email" placeholder="Email adress" required/>
                <input class="form-input" id="password" type="password" placeholder="Password" minlength="5" required/>
                <button class="btn blue margin-y-4 float-right" type="submit">signin</button>
                <p class="margin-t-4">Have no account <a class="signup" onclick="signup()">signup</a></p>
            </form>
        </div>
    </div> 
    </footer>  
          );
  }
  
export default Footer;