import "./post.css";
import post from "./post.jpg";

export default function Post() {
    return (
        <>
            <div className="post">
                <img
                    className="postImg"
                    src={post}
                    alt="" />
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">Music</span>
                        <span className="postCat">Life</span>
                    </div>
                    <span className="postTitle">
                        Lorem ipsum iure veritatis?
                    </span>
                    <hr />
                    <span className="postDate">1 hour ago</span>
                </div>
                <p className="postDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Expedita possimus, deserunt laudantium neque illo eveniet aspernatur facere,
                      perferendis tenetur excepturi veritatis numquam ipsam. Totam aspernatur,
                     facere sapiente quia hic ex?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Expedita possimus, deserunt laudantium neque illo eveniet aspernatur facere,
                      perferendis tenetur excepturi veritatis numquam ipsam. Totam aspernatur,
                     facere sapiente quia hic ex?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Expedita possimus, deserunt laudantium neque illo eveniet aspernatur facere,
                      perferendis tenetur excepturi veritatis numquam ipsam. Totam aspernatur,
                     facere sapiente quia hic ex?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Expedita possimus, deserunt laudantium neque illo eveniet aspernatur facere,
                      perferendis tenetur excepturi veritatis numquam ipsam. Totam aspernatur,
                     facere sapiente quia hic ex?
                </p>
            </div>
        </>
    );
};