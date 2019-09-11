import React from 'react';
import { Link } from "react-router-dom";
import navData from './data';
import avatar from '../assets/img/user.svg'

class Nav extends React.Component {
    handleClick(e) {
        const all = e.target.parentNode.parentNode.children
        for (let i = 0; i < all.length; i++) {
            all[i].firstChild.classList.remove('active')
        }
        e.target.classList.toggle('active')
    }
    render() {
      return (
        <nav className="flex-x shadow padding-y-1 full-width">
        <div className="logo margin-l-3 margin-t-2"><a href="index.html">P<span className="tracking-in-contract">roperty Pro</span></a></div>
        
        {window.location.href.toString().match(/dashboard|Create-ad|edit-ad|my-ads/g)? (
        <ul className="navbar fixed-left" id="collapse-menu">
            <div id="avatar-space" className="flex-center">
                <img id="avatar" className="circle avatar-holder" src={avatar} alt="user"/>
                <input className="d-none" type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                <label className="d-none" for="imageUpload">
                    <i className="pro-camera-lite"></i>
                </label>
                <span className="status"></span>
            </div>
            <ul className="margin-x-3">
                {
                    navData.map((el, i) => {
                        return(
                            <Link key={i}  to={`/${el.name}`}>
                                <li onClick={this.handleClick} className={`nav-item ${el.class}`} ><i className={`${el.icon} margin-r-2`}></i>{el.name}</li>
                            </Link>
                        )
                    })
                }
            </ul> 
        </ul>) : null}

        
        <div className="margin-l-auto margin-r-3 flex-x">
            <button id="avatar" className="collapsible padding-t-1 d-flex btn">
                <span className="padding-r-2 margin-t-1">My account</span>
                <img id="nav-avatar" className="circle" src={avatar} height="35" width="35" alt="user"/>
            </button>
            <ul className="drop-content swing-in-top-fwd white d-none padding-2 shadow">
                <li className="padding-y-2"><i className="pro-enter-lite margin-x-2"></i>my account</li>
                <li className="padding-y-2"><i className="pro-info-lite margin-x-2"></i>profile</li>
                <li className="padding-y-2"><i className="pro-cog-lite margin-x-2"></i>Setting</li>
                <li className="padding-y-2"><i className="pro-switch-lite margin-x-2"></i>Logout</li>
            </ul>
            <button type="button" onclick="toggle()" className="btn mobile-view"><span className="humberger">&#8942;</span></button>
        </div>
    </nav>
    )
}
}

export default Nav;