import React from "react";
import "./styles.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import TypeAnimation from 'react-type-animation';
import {FaReact}  from 'react-icons/fa';


const About = () => {
    return (
        <div className="about-me">
            <div className="info-part">
            <h1>Heey! This is my web site <br />
                    created with React <FaReact style={{
                        animationName: "react",
                        animationDuration: "5s",
                        animationIterationCount: "infinite",
                        }}/> </h1> <br />
                    <TypeAnimation
                        className="type-animation-part"
                        cursor={false}
                        repeat={Infinity}
                        sequence={[
                            "My name is Ani", 
                            2000,
                            "I'm junior frontend developer",
                            1000,
                        ]}
                        wrapper="h2"
                    /><br />
                <Link to={`/my-cv`}>
                    <Button variant="dark">Read about me</Button>
                </Link>
            </div>
            <div className="image-part">
                 <div className="image-part-background"></div>
            </div>
        </div>
    )
}

export default About;