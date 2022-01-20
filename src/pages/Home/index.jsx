import React from "react";
import "./styles.css";
import TypeAnimation from 'react-type-animation';

const Home = () => {
    return (
        <div className="home-content">
            <div className="main-content">
                <h1 className="home-text">Web Full Stack Development</h1> <br /><br /><br />
                <TypeAnimation
                    className="animation-part"
                    cursor={false}
                    repeat={Infinity}
                    sequence={[
                        "Hyper Text Markup Language", 
                        2000,
                        "Cascading Style Sheets",
                        2000,
                        "Bootstrap",
                        2000,
                        "JavaScript",
                        2000,
                        "ReactJS",
                        2000,
                        "PHP",
                        2000,
                        "Laravel",
                        2000,
                    ]}
                    wrapper="h2"
                />
            </div>
        </div>
    )
}

export default Home; 