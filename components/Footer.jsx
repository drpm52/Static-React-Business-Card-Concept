import React from "react"

export default function Footer(){
    return(
        <div className="footer-div">
        <footer className="footer row">
            <a href="#" className= "footer-link" target="_blank"><img className="icon" src="../images/twitterIcon.png"/></a>
            <a href="#" className= "footer-link" target="_blank"><img className="icon" src="../images/facebookIcon.png"/></a>
            <a href="#" className= "footer-link" target="_blank"><img className="icon" src="../images/instagramIcon.png"/>
            </a>
            <a href="https://github.com/drpm52" className= "footer-link" rel="noreferrer" target="_blank" git ><img className="icon" src="../images/githubIcon.png"/></a>
        </footer>
        </div>
    )
}