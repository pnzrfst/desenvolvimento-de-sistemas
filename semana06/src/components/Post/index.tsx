import './styles.css'
import Avatar from '../Avatar'
import { FormEvent, useState } from 'react';
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import TextAreaCustom from '../TextAreaCustom';
import ButtonCustom from '../ButtonCustom';
import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import Comment from '../Comments';
import { v4 as uuid } from 'uuid';

type Author = {
    name: string;
    role: string;
    profile_pic: string
}

type Comment = {
    id: string;
    author: Author;
    comment: string;
    publishedAt: Date;
    likes: number;
}

type Post = {
    id: string;
    author: Author
    publishedAt: Date,
    content: string,
    comments: Comment[]
}


type PostProps = {
    post: Post,
    setPosts: Dispatch<SetStateAction<Post[]>>;
}


export default function Post({ post, setPosts }: PostProps) {
    const [newComment, setNewComment] = useState<string>('');
    const [like, setNewlike] = useState<number>(0);


    async function loadComments() {
        const response = await axios.get(`http://localhost:3001/posts/${post.id}`);
        setPosts((prev: Post[]) =>
            prev.map(item => (
                item.id === post.id ? response.data : item.id
            ))
        )
    }




    async function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();


        const comment = {
            id: uuid(),
            comment: newComment,
            publishedAt: new Date().toISOString(),
            likes: 0,
            author: {
                name: "Misinstrudgerst",
                role: "Desempregado profissional",
                profile_pic: "https://media.gazetadopovo.com.br/2022/03/25111240/mendigo_planaltina1-20735422-720x720.jpg"
            }
        }

        const comments = post.comments?.length ? [...post.comments, comment] : [comment]

        await axios.patch(`http://localhost:3001/posts/${post.id}`, {
            "comments": comments
        })

        setNewComment("");
        loadComments();
    }


    async function increaseLike(event: MouseEvent, id: string) {
        event.preventDefault();

        const likedComment = post.comments.map(comment => {
            if(comment.id === id){
                return {...comment, like: comment.likes + 1};
            }

            return comment
        })

        await axios.patch(`http://localhost:3001/posts/${post.id}`, {
            "comments": likedComment
        })

        loadComments()
    }

    async function handleDeleteComment(event: MouseEvent, id: string) {
        event.preventDefault();

        const filteredComments = post.comments.filter(comment => comment.id !== id);

        await axios.patch(`http://localhost:3001/posts/${post.id}`, {
            "comments": filteredComments
        })

        loadComments()
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
                <TextAreaCustom message={newComment} setMessage={setNewComment} placeholder='Deixe um comentário...' />
                <footer>
                    <ButtonCustom disabled={false} title='Enviar' />
                </footer>
            </form>

            {post.comments?.length && post.comments.map(comment => (
                <Comment
                    comment={comment}
                    key={comment.id}
                    handleDeleteComment={handleDeleteComment}
                    increaseLike={increaseLike}
                />
            ))}
        </article>
    )
}