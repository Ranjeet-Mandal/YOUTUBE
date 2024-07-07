import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/ranjeet.jpeg";


const Navbar = ({setSidebar})=>{
    return(
        <div>
            <nav className="flex-div">
                <div className="nav-left flex-div" >
                    <img className="menu-icon" onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
                    <img className="logo" src={logo} alt="" />
                </div>
                <div className="nav-middle flex-div">
                    <div className="search-box">
                    <input type="text" placeholder="Search" />
                    <img src={search_icon} alt="" />
                    </div>
                </div>
                <div className="nav-right flex-div">
                    <img src={upload_icon} alt="" />
                    <img src={more} alt="" />
                    <img src={notification_icon} alt="" />
                    <img className="user-icon" src={profile_icon} alt="" />
                </div>

            </nav>
        </div>
    )
}
export default Navbar;