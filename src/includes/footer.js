import React from 'react';

function Footer() {
    return (
        <footer className="footer white">
        <span className="margin-r-4">Property-lite 2019</span>
        <div id="signup" className="modal-container">
        <div className="modal">
            <button onClick="closeUp()" className="close-modal">X</button>
            <form id="createUser">
                <h2 className="align-center margin-l-n3">sign-up</h2>
                <input className="form-input" type="text" id="firstName" placeholder="Firstname" required />
                <input className="form-input" type="text" id="lastName" placeholder="Lastname" required />
                <input className="form-input" type="number" id="phoneNumber" placeholder="phoneNumber" required />
                <input className="form-input email" type="email" placeholder="Email" required />
                <input className="form-input" type="address" id="address" placeholder="address" required />
                <select className="form-input full-width" id="isAgent" required>
                    <option value="">Are you an agent ?</option>
                    <option value="true">yes</option>
                    <option value="false">No</option>
                </select>
                <input className="form-input password" type="password" placeholder="Password" minlength="5" required />
                <button type="submit" className="btn blue  margin-y-4 float-right ">Signup now</button>
            </form>
        </div>
    </div>
    <div id="signin" className="modal-container">
        <div className="modal">
            <button onClick="closeIn()" className="close-modal">X</button>
            <form id="userSignin">
                <h2 className="align-center margin-t-2">User signIn</h2>
                <input className="form-input" id="email" type="email" placeholder="Email adress" required/>
                <input className="form-input" id="password" type="password" placeholder="Password" minlength="5" required/>
                <button className="btn blue margin-y-4 float-right" type="submit">signin</button>
                <p className="margin-t-4">Have no account <span className="signup" onClick="signup()">signup</span></p>
            </form>
        </div>
    </div> 
    </footer>  
          );
  }
  
export default Footer;