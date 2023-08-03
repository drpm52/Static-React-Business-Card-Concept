import React from 'react';

export default function Header (){
    return (
        <div className= "header row col">
         <img className="profile-img" src="../images/profile.jpeg" alt="smiling profile photo" />
         <h1>Parisa Mosavian</h1>
         <h4>Frontend Developer</h4>
         <a href="#" target='_blank'>parisam.website</a>
         <div className='row header-btns'>
         <button className='white-btn row'><img src='../images/Mail.png'/> Email</button>
         <button className='blue-btn row'><img src='../images/linkedin.png'/> Linkedin</button>
         </div>
        </div>
    )
}