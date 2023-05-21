import "./header.css";
import headerImg from "./wild.jpg";

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="headerTitles">
                    <span className="headerTitlesSm">React & Node</span>
                    <span className="headerTitlesLg">Blog</span>
                </div>
                <img className="headerImg"
                    src={headerImg}
                    alt="" />
            </div>
        </>
    );
};