import React from 'react';
import './AboutMe.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import MusicNoteIcon from '@material-ui/icons/MusicNote';


export default function AboutMe() {

// const navbar = document.querySelector("#nav");
// const navBtn = document.querySelector("#nav-btn");
// const closeBtn = document.querySelector("#close-btn");
// const sidebar = document.querySelector("#sidebar");
// const date = document.querySelector("#date");

// // add fixed className to navbar
// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 80) {
//     navbar.classNameList.add("navbar-fixed");
//   } else {
//     navbar.classNameList.remove("navbar-fixed");
//   }
// });
// // show sidebar
// navBtn.addEventListener("click", function () {
//   sidebar.classNameList.add("show-sidebar");
// });
// closeBtn.addEventListener("click", function () {
//   sidebar.classNameList.remove("show-sidebar");
// });
// // set year
// date.innerHTML = new Date().getFullYear();

    return (
        
    <div className='body'>
        {/*navbar*/} 
        <nav className="nav" id="nav">
        <div className="nav-center">
            {/* nav header */}
            <div className="nav-header">
            <img src="./images/logo.svg" className="nav-logo" alt="" />
            <button className="nav-btn" id="nav-btn">
                <ViewHeadlineIcon className="i"/>
            </button>
            </div>

            {/*nav links */}
            <ul className="nav-links">
                <li><Link to="/">home</Link></li>
                <li><Link to="/AboutMe">About</Link></li>
                <li><Link to="/Projects">projects</Link></li>
                <li><Link to="/Contact">contact</Link></li>
            </ul>
        </div>
        </nav>


        {/*sidebar*/} 
        <aside className="sidebar" id="sidebar">
        <div>
            <button id="close-btn" className="close-btn">
            <CloseIcon className="i"></CloseIcon>
            </button>
            <ul className="sidebar-links">
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/AboutMe">About</Link></li>
                    <li><Link to="/Projects">projects</Link></li>
                    <li><Link to="/Contact">contact</Link></li>
            </ul>
            <ul className="social-icons">
                <li>
                    <a href="https://www.linkedin.com/in/herman-bide/" className="social-icon" >
                    <LinkedInIcon className='i'/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/bherman2020" className="social-icon">
                        <GitHubIcon className="i"/>
                    </a>
                </li>
            </ul>
        </div>
        </aside>

        <section className="section single-page">

        {/*section title*/}

        <div className="section-title">
            <h1>about me</h1>
            <div className="underline"></div>
        </div>
    
        <div className="section-center page-info">

            {/*about page */}
            <p>
            Hello, I am Herman Bide  and I am a self-taught web developer.
            I spend most of my day, experimenting with HTML, CSS
            JavaScript Php all while using open-sources such as React and Node.js and using Express.js framework. 
            I enjoy coding and the challenge of learning something new everyday. 
            </p>
        </div>

        <div className="resume_item resume_hobby">
                    <div className="section-title">
                        <h2>Hobbies</h2>
                    <div className="underline"></div>
                    </div>
                        <ul>
                            <li><SportsEsportsIcon className="icon"/></li>
                            <li><MusicNoteIcon className="icon"/></li>
                            <li><SportsBasketballIcon className="icon"/></li>
                            <li><FlightTakeoffIcon className="icon"/></li>
                        </ul>
                </div>
        </section>


        {/*footer*/} 
        <footer className="footer">
        <ul className="social-icons">
            <li>
                <a href="https://www.linkedin.com/in/herman-bide/" className="social-icon" >
                <LinkedInIcon className='i'/>
                </a>
            </li>
            <li>
                <a href="https://github.com/bherman2020" className="social-icon">
                    <GitHubIcon className="i"/>
                </a>
            </li>

        </ul>

        <p>&copy; <span id="date"></span> Herman Bide All rights reserved.</p>
        </footer>
    </div> 

    )

}
