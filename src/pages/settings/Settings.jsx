import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Person from "./Person.jpg";

export default function Settings() {
    return (
        <>
            <div className="settings">
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsUpdateTitle">Update Your Account</span>
                        <span className="settingsDeleteTitle">Delete Account</span>
                    </div>
                    <form className="settingsForm">
                        <label>Profile Picture</label>
                        <div className="settingsPP">
                            <img
                                src={Person}
                                alt="" />
                            <label htmlFor="fileInput">
                                <i className="settingsPPIcon user circle outline big icon"></i>
                            </label>
                            <input type="file" id="fileInput" style={{ display: "none" }} />
                        </div>
                        <label>User Name:</label>
                        <input type="text" placeholder="Name" />
                        
                        <label>Email:</label>
                        <input type="email" placeholder="email@gmail.com" />
                        
                        <label>Password:</label>
                        <input type="password" />
                        
                        <button className="settingsSubmit ui inverted blue button">Update</button>
                    </form>
                </div>
                <Sidebar />
            </div>
        </>
    );
};