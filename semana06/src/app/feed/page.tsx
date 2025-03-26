'use client'
import Header from '@/components/Header'
import './styles.css'
import Avatar from '@/components/Avatar'
import { MdEdit } from "react-icons/md";
import Post from '@/components/Post';
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import TextAreaCustom from '@/components/TextAreaCustom';
import ButtonCustom from '@/components/ButtonCustom';
type Author = {
    name: string;
    role: string;
    profile_pic: string
}

type Comment = {
    id: string;
    author: Author;
    comment: string;
    likes: number;
    publishedAt: Date;
}

type Post = {
    id: string;
    author: Author
    publishedAt: Date,
    content: string,
    comments: Comment[]
}



export default function Feed() {

    const [posts, setPosts] = useState<Post[]>([]);
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        loadPosts()
    }, [])

    async function loadPosts() {
        const response = await axios.get("http://localhost:3001/posts");
        const postSort = response.data.sort((a: any, b: any) => {
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        })

        setPosts(postSort)
    }


    async function handleCreatePosts(event: FormEvent) {
        event.preventDefault();

        const post = {
            id: String(posts.length + 1),
            content: content,
            publishedAt: new Date().toISOString(),
            author: {
                name: "Luiz Carlos Pedro",
                role: "Estudante de sistemas",
                profile_pic: "https://avatars.githubusercontent.com/u/144607216?v=4"
            }
        }

        await axios.post("http://localhost:3001/posts", post);
        await loadPosts();
        setContent('')
    }

    return (
        <section className="feed-container">

            <Header />
            <section className="main-container">
                <aside className="profile">
                    <div className='profile-infos'>
                        <Avatar imgUrl={"https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"} hasBorder={true} />
                        <h1>Luiz Carlos</h1>
                    </div>
                    <footer className="profile-options">
                        <h4 className="about">Estudante de desenvolvimento de sistemas</h4>
                        <button className="edit-profile"><MdEdit />Editar perfil</button>
                    </footer>
                </aside>

                <div></div>

                <main className="feed">
                    <form onSubmit={handleCreatePosts} className='form-post'>
                        <TextAreaCustom message= {content} setMessage={setContent} placeholder='Publique algo....'/>
                        <ButtonCustom disabled={false} title='Enviar post'/>
                    </form>

                    {posts.map(item => (
                        <Post post={item} key={item.id} setPosts={setPosts}/>
                    ))}
                </main>
            </section>
        </section>
    )
}