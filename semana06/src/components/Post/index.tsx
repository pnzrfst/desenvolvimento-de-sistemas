import './styles.css'
import Avatar from '../Avatar'
import { FormEvent, useState } from 'react';
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import TextAreaCustom from '../TextAreaCustom';
import ButtonCustom from '../ButtonCustom';

type Author = {
    name: string;
    role: string;
    profile_pic: string
}

// type Comment = {
//     message: string;
//     publishedAt: Date;
//     likes: number;
//     author: Author;
// }

type PostProps = {
    post: {
        author: Author
        publishedAt: Date,
        content: string,
        // comments: Comment[]

    }
}

export default function Post({post}: PostProps) {

    const [newComment, setNewComment] = useState<string>('');

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        alert(newComment)
    }

    const dateFormat = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })


    return (
        <article className="post">
            <header>
                <div className="author">
                    <Avatar imgUrl={post.author.profile_pic} hasBorder />
                    <div className="author-info">
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time>
                    {dateFormat}
                </time>
            </header>

            <div className="content">
                <p>{post.content}</p>
            </div>

            <form className="form" onSubmit={handleCreateNewComment}>
                <strong>Deixe um comentário</strong>
                <TextAreaCustom message= {newComment} setMessage={setNewComment} placeholder='Deixe um comentário...'/>
                <footer>
                    <ButtonCustom disabled={false} title='Enviar'/>
                </footer>
            </form>

        </article>
    )
}