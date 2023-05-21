import "./write.css";
import write from "./write.jpg";

export default function Write() {
    return (
        <>
            <div className="write">

                <img className="writeImg"
                 src={write} alt="" />

                <form className="writeForm">
                    <div className="writeFormGroup">
                        <label htmlFor="fileInput">
                            <i className="writeIcon plus large icon"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                        <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                    </div>
                    <div className="writeFormGroup">
                        <textarea name="" placeholder="Tell your story ..."
                            id="" className="writeInput writeText"
                            cols="30" rows="10"></textarea>
                    </div>
                    <button className="writeSubmit ui inverted primary button">Publish</button>
                </form>
            </div>
        </>
    );
};