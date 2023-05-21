import "./singlepost.css";
import singlePost from "./singlepost.jpg";

export default function SinglePost() {
    return (
        <>
            <div className="singlePost">
                <div className="singlePostWrapper">
                    <img className="singlePostImg"
                        src={singlePost}
                        alt="" />
                    <h1 className="singlePostTitle">
                        Lorem ipsum dolor sit amet
                        <div className="singlePostEdit">
                            <i className="singlePostIcon edit outline small icon"></i>
                            <i className="singlePostIcon trash alternate outline small icon"></i>
                        </div>
                    </h1>
                    <div className="singlePostInfo">
                        <span className="singlePostAuthor">Author: <b>sajad</b></span>
                        <span className="singlePostDate">1 huor age</span>
                    </div>
                    <p className="singlePostDesc"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Numquam, voluptatem. Alias suscipit iusto,
                          sapiente neque nesciunt cum minima aliquid nisi exercitationem necessitatibus?
                         Ex distinctio amet nulla dolore deserunt at quae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Numquam, voluptatem. Alias suscipit iusto,
                          sapiente neque nesciunt cum minima aliquid nisi exercitationem necessitatibus?
                         Ex distinctio amet nulla dolore deserunt at quae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Numquam, voluptatem. Alias suscipit iusto,
                          sapiente neque nesciunt cum minima aliquid nisi exercitationem necessitatibus?
                         Ex distinctio amet nulla dolore deserunt at quae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Numquam, voluptatem. Alias suscipit iusto,
                          sapiente neque nesciunt cum minima aliquid nisi exercitationem necessitatibus?
                         Ex distinctio amet nulla dolore deserunt at quae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Numquam, voluptatem. Alias suscipit iusto,
                          sapiente neque nesciunt cum minima aliquid nisi exercitationem necessitatibus?
                         Ex distinctio amet nulla dolore deserunt at quae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Numquam, voluptatem. Alias suscipit iusto,
                          sapiente neque nesciunt cum minima aliquid nisi exercitationem necessitatibus?
                         Ex distinctio amet nulla dolore deserunt at quae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Numquam, voluptatem. Alias suscipit iusto,
                          sapiente neque nesciunt cum minima aliquid nisi exercitationem necessitatibus?
                         Ex distinctio amet nulla dolore deserunt at quae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Numquam, voluptatem. Alias suscipit iusto,
                          sapiente neque nesciunt cum minima aliquid nisi exercitationem necessitatibus?
                         Ex distinctio amet nulla dolore deserunt at quae.
                    </p>
                </div>
            </div>
        </>
    );
};