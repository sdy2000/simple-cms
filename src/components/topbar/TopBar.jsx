import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
    return (
        <>
            <div className="top">
                <div className="topLeft">
                    <i className="topIcon facebook f icon large"></i>
                    <i className="topIcon instagram icon large" ></i>
                    <i className="topIcon telegram plane icon large"></i>
                    <i className="topIcon twitter icon large"></i>
                </div>

                <div className="topCenter">
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/">Home</Link>
                        </li>
                        <li className="topListItem">
                            <Link to="/Single" className="link">Single</Link>
                        </li>
                        <li className="topListItem">
                            <Link to="/Write" className="link">Write</Link>
                        </li>
                        <li className="topListItem">
                            <Link to="/Settings" className="link">Settings</Link>
                        </li>
                    </ul>
                </div>

                <div className="topRigth">
                    <img className="topImg"
                        src="https://semantic-ui.com/images/avatar/large/elliot.jpg"
                        alt="" />
                    <i className="searchIcon search icon large"></i>
                </div>
            </div>
        </>
    );
};