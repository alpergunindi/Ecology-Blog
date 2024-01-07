import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user = false;
  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-square-x-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-square-facebook"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                <li className="topListItem"><Link className="link" to="/">WRITE</Link></li>
                <li className="topListItem">
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                  <img 
            className="topImg"
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />  
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                    <Link className="link" to="/login">
                        LOGIN
                    </Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/register">
                        REGISTER
                    </Link>
                    </li>
                    </ul>
                )}
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        </div>
  );
}