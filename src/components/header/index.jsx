import { NavLink } from "react-router-dom";
import { FaLessThan, FaReact, FaGreaterThan} from 'react-icons/fa';
import {CgFormatSlash} from "react-icons/cg";
import "./styles.css";

const Header = () => {
    const classnames = ({ isActive }) => isActive ? "nav_item active" : "nav_item";
    return (
        <header className="header">
            <div className="logo_wrapper">
                <h1 className="logo">
                    <NavLink style={{
                        fontSize: "2rem",
                        color: "#fff",
                        textDecoration: "none",
                        fontFamily: "'Merienda', cursive", 
                    }} to="/">
                    <FaLessThan /> React <FaReact style={{marginBottom: "5px"}}/>
                    <CgFormatSlash style={{
                        fontSize: "50px",
                        marginBottom: "5px",
                    }} /><FaGreaterThan /> </NavLink>
                </h1>
            </div>
            <div className="nav">
                <ul className="nav_list">
                    <NavLink className={classnames} to="/">Home</NavLink>
                    <NavLink className={classnames} to="/about-me">About</NavLink>
                    <NavLink className={classnames} to="/project">Project</NavLink>
                    <NavLink className={classnames} to="/form">Form</NavLink>
                </ul>
            </div>
        </header>
    );
}
export default Header;