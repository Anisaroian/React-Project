import React from "react";
import myPic from "../../images/myPic.JPG";
import "./styles.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaFacebook, FaGithub, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


const Resume = () => {
    return (
        <>
        <Link to={`/about-me`}>
                <FaChevronLeft  style={{
                    textAlign: "start",
                    fontSize: "3rem",
                    color:"black"
                }}/>
            </Link>
        <div className="resume-content">
            <div className="header-content">
                <div className="image-content">
                    <img src={myPic} alt="myPic" />
                </div>
                <div className="name-content">
                    <h1>Ani Saroian</h1> <br />
                    <h3>Junior Full Stack Developer</h3><br />
                    <h4>I'm fast learner and quickly integrate into a team.</h4>
                </div>
            </div>
            <div className="contact-content">
                <div className="part-one">
                <FaEnvelope /> ani.saroian@gmail.com<br />
                    <FaPhoneAlt /> +374 (77) 88-58-64 <br />
                    <FaMapMarkerAlt /> Yerevan, Armenia <br />
                </div>
                <div className="part-two">
                    <FaLinkedin /> https://www.linkedin.com/in/ani-saroian-968949228/ <br />
                    <FaFacebook /> https://www.facebook.com/ani.saroian22/<br />
                    <FaGithub /> https://github.com/Anisaroian<br />
                </div>
            </div>
            <div className="info-content">
                <div className="education-content">
                   <h2>EDUCATION</h2> <br />
                   <h5>TCO Team</h5>
                   <h6>Full Stack Development</h6>
                   <h6>07/2021-01/2022</h6>
                   <p>Yerevan, Armenia</p> <br />
                   <h5>Yerevan State University</h5>
                   <h6>09/2017-06/2021</h6>
                   <p>Yerevan, Armenia</p>
                </div>
                <div className="skills-content">
                    <h2>SKILLS</h2><br />
                    <p><span>HTML</span> <span>CSS</span> <span>Bootstrap</span></p>
                    <p><span>JavaScript</span> <span>ReactJS</span>  </p>
                    <p><span>PHP</span> <span>Laravel</span>  </p>
                    
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Resume; 