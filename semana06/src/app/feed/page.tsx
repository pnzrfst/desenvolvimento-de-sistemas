'use client'
import Header from '@/components/Header'
import './styles.css'
import Avatar from '@/components/Avatar'

export default function Feed() {
    return (
        <section className="feed-container">

            <Header />
            <section className="main-container">
                <aside className="profile">
                    <div className='profile-infos'>
                        <Avatar imgUrl="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?semt=ais_hybrid" hasBorder = {true}/>
                        <h1>Luiz Carlos</h1>
                    </div>
                    <div className="profile-options">
                        <h4 className="about">Estudante de desenvolvimento de sistemas</h4>
                        <button className="edit-profile">Editar perfil</button>
                    </div>
                </aside>

                <main className="feed">
                    <ol className="posts">
                        <li className="post">
                            <div className="post-header">
                                <Avatar imgUrl = {"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?semt=ais_hybrid"} />
                                <p>Postado há 3min</p>
                            </div>
                            <div className="about-post">
                               <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </li>
                        <li className="post">
                            <div className="post-header">
                                <Avatar imgUrl = {"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?semt=ais_hybrid"}/>
                                <p>Postado há 3min</p>
                            </div>
                            <div className="about-post">
                               <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </li>
                        <li className="post">
                            <div className="post-header">
                                <Avatar imgUrl = {"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?semt=ais_hybrid"} />
                                <p>Postado há 3min</p>
                            </div>
                            <div className="about-post">
                               <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </li>
                    </ol>
                </main>
            </section>
        </section>
    )
}