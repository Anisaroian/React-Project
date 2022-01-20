import React from "react";
import Loader from "../../Reusable/Spinner";
import "./styles.css";
import TypeAnimation from 'react-type-animation';


const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Error 404</h1>
            <h1>Page Not Found</h1> <br /><br /><br />
            <TypeAnimation
                        className="error-text"
                        cursor={false}
                        repeat={Infinity}
                        sequence={[
                            "Sorry, this page does not exist",
                            1000,
                            "Maybe something went wrong ... ",
                            1000,
                        ]}
                        wrapper="h3"
                    />
            <Loader />
        </div>
    )
}

export default NotFound; 