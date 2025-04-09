'use client'
import "./styles.css";
import Avatar from "../Avatar";

import { BiLike } from "react-icons/bi";
import { PiTrash } from "react-icons/pi";


type Author = {
    name: string;
    role: string;
    profile_pic: string
}

type CommentProps = {
    increaseLike: (event: any, id: string) => void,
    handleDeleteComment: (event: any, id: string) => void,
    comment: {
        id: string;
        author: Author;
        comment: string;
        publishedAt: Date;
        likes: number;
    }
}

export default function Comment({ comment, handleDeleteComment, increaseLike }: CommentProps) {

    return (
        <section className='comments-area' key={comment.id}>
            <Avatar imgUrl={comment.author.profile_pic}></Avatar>
            <div className="comment-box">
                <div className="comment-content">
                    <header>
                        <div className="author-and-time">
                            <strong>
                                {comment.author.name}
                            </strong>
                            <time>1 hora atrás</time>
                        </div>
                        <button onClick={(event) => handleDeleteComment(event, comment.id)}>
                            <PiTrash size={16} />
                            </button>
                    </header>
                    <p>
                        {comment.comment}

                    </p>
                </div>
                <footer>
                    <div>
                        <BiLike size={20} className="btn-like" onClick={(event) => increaseLike(event, comment.id)} />
                        <span>Aplaudir</span>
                        <span>{comment.likes}</span>
                    </div>
                </footer>
            </div>
        </section>
    )
}