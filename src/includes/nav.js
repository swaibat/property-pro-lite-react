import React from 'react';

function Nav() {
  return (
    <nav className="flex-x flex-y-center fixed-top shadow padding-y-1 full-width">
            <div className="logo margin-l-3"><a href="index.html">P<span className="tracking-in-contract">roperty Pro</span></a></div>
            <div id="logged-out" className="margin-l-auto margin-r-3 d-flex">
                <div className="d-flex">
                    <button  className="btn teal white-txt  margin-l-4">signin</button>
                    <button className="btn white blue-txt  margin-l-4">signup</button>
                </div>
            </div> 
            <div id="logged-in"  className="d-none margin-l-auto margin-r-3 flex-x">
                    <button className="collapsible btn fav">
                        <span className="fav-dis flex-y-center">
                            <i id="love" className="pro-like-lite"></i>
                            <img className="fav-img invisible" src=""/>
                            <span id="fav-counter" className="badge">0</span>
                        </span>
                    </button>
                    <ul id="favorite-list"  className="drop-content favorite-list swing-in-top-fwd white d-none padding-2 shadow">
                    </ul>
                <button id="avatar" className="collapsible padding-t-1 d-flex btn">
                    <span className="padding-r-2 margin-t-1">My account</span>
                    <img id="nav-avatar" className="circle" src="./assets/img/user.svg" height="35" width="35" alt="user"/>
                </button>
                <ul className="drop-content swing-in-top-fwd white d-none padding-2 shadow">
                    <li className="padding-y-2"><i className="pro-enter-lite margin-x-2"></i>my account</li>
                    <li className="padding-y-2"><a><i className="pro-info-lite margin-x-2"></i>profile</a></li>
                    <li className="padding-y-2"><a><i className="pro-cog-lite margin-x-2"></i>Setting</a></li>
                    <li className="padding-y-2"><a href="index.html"><i className="pro-switch-lite margin-x-2"></i>Logout</a></li>
                </ul>
                <button type="button" onclick="toggle()" className="btn mobile-view"><span className="humberger">&#8942;</span></button>
            </div>
        </nav>
        );
}

export default Nav;