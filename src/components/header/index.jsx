import "./styles.css";
import { FaRegHeart } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header">
            <div className="container" style = {{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "black",
                padding: "20px",
            }}>
                <div className="part-one" style = {{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <div className="logo_wrapper">
                       <a href="https://us.puma.com/"><img src="data:image/png;base64,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" alt="puma-logo" 
                       style={{
                            marginLeft: "40px",
                            width: "50px",
                            height: "50px",
                            padding: "10px",
                       }}/>
                    </a>
                    </div> 
                    <div className="nav">
                        <ul className="nav_list" style={{
                            display: "flex",
                            fontSize: "20px",
                            padding: "0 15px",
                            listStyle: "none",
                        }}>
                            <li className="nav_item"><a href="https://us.puma.com/us/en/new-arrivals">New Arrivals</a></li>
                            <li className="nav_item"><a href="https://us.puma.com/us/en/women">Women</a></li>
                            <li className="nav_item"><a href="https://us.puma.com/us/en/men">Men</a></li>
                            <li className="nav_item"><a href="https://us.puma.com/us/en/kids">Kids</a></li>
                            <li className="nav_item"><a href="https://us.puma.com/us/en/collaborations">Collaborations</a></li>
                            <li className="nav_item"><a href="https://us.puma.com/us/en/sport">Sport</a></li>
                            <li className="nav_item"><a href="https://us.puma.com/us/en/outlet">Outlet</a></li>
                            <li className="nav_item"><a href="https://us.puma.com/us/en/gift-guide/shop-all">Gift Guide</a></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="part-two" style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginRight: "30px",
                }}> 
                    <div className="search-part">
                        <input type="search" placeholder="SEARCH PUMA.COM" style={{
                             backgroundColor: "transparent",
                             border: "1px solid rgba(255,255,255,.2)",
                             padding: "0.6875rem 3rem 0.875rem",
                             fontWeight: "400",
                             color: "#fff",
                             marginTop: "15px",
                        }} />
                    </div>
                    <div className="icon-part" style={{
                        display: "flex",
                        justifyContent: "space-around",
                        padding: "20px",
                        margin: "0 20px",
                    }}>
                        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLv45hSICwHI_Y4RPBzzL6hcUC4gqt4mLGLg&usqp=CAU" alt="chat-icon" /> */}
                        {/* <img src="https://png.pngtree.com/png-vector/20190417/ourmid/pngtree-vector-favorite-icon-png-image_947086.jpg" alt="fav" /> */}
                        {/* <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG4.png" alt="chat-icon" /> */}
                        {/* <img src="https://peopleshub.org/wp-content/uploads/2018/04/person-icon-white.png" alt="fav" /> */}
                        <FaComments style={{
                            color:"white",
                            height: "2rem",
                            width: "2rem",
                            marginLeft: "30px",
                        }}/>
                        <FaRegHeart style={{
                            color:"white",
                            height: "2rem",
                            width: "2rem",
                            marginLeft: "30px",
                        }}/>
                        <FaShoppingCart style={{
                            color:"white",
                            height: "2rem",
                            width: "2rem",
                            marginLeft: "30px",
                        }}/>
                        <FaUserCircle style={{
                            color:"white",
                            height: "2rem",
                            width: "2rem",
                            marginLeft: "30px",
                        }}/>
                        
                    </div>  
                </div>
            </div>
        </header>
    );
}

export default Header; 