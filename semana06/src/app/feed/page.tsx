'use client'
import Header from '@/components/Header'
import './styles.css'
import Avatar from '@/components/Avatar'
import { MdEdit } from "react-icons/md";

export default function Feed() {
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

                <main className="feed">
                    <ul className="posts">
                    </ul>
                </main>
            </section>
        </section>
    )
}