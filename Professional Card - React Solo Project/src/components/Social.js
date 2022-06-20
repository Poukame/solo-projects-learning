import React from "react";
import facebook from '../images/facebook.png'
import insta from '../images/insta.png'
import twitter from '../images/twitter.png'
import github from '../images/github.png'


export default function Social() {
    return (
        <div className="social-area">
          <img className="social-icon" src={twitter} alt="twitter icon" />
          <img className="social-icon" src={facebook} alt="facebook icon" />
          <img className="social-icon" src={insta} alt="insta icon" />
          <img className="social-icon" src={github} alt="github icon" />
        </div>
    )
};