import "./sidebar.css";
import sb1 from "./sidebar1.jpg";

export default function sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="sidebarItem">
                    <span className="sidebarTitle">ABOUT ME</span>
                    <img
                        src={sb1}
                        alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nulla odio ab delectus soluta ipsum beatae molestiae similique adipisci officiis dicta iste,
                        blanditiis debitis quis, laudantium officia maiores dolore. Molestias, adipisci.
                    </p>

                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">Life</li>
                        <li className="sidebarListItem">Mudic</li>
                        <li className="sidebarListItem">Style</li>
                        <li className="sidebarListItem">Sport</li>
                        <li className="sidebarListItem">Tech</li>
                        <li className="sidebarListItem">Cinema</li>
                    </ul>
                </div>

                <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US</span>
                    <div className="sidebarSocial">
                        <i className="sidebarIcon facebook f icon large"></i>
                        <i className="sidebarIcon instagram icon large" ></i>
                        <i className="sidebarIcon telegram plane icon large"></i>
                        <i className="sidebarIcon twitter icon large"></i>
                    </div>
                </div>
            </div>
        </>
    );
};