import Header from "@/components/Header";
import "./styles.css"
import Image from "next/image";

import cover from '@/assets/cover.avif';
import Avatar from "@/components/Avatar";

export default function Feed() {
    return (
        <div>
            <Header />
            <div className="container">
                <aside className="sidebar">
                    <Image src={cover} alt="cover" className="cover" />

                    <div className="profile">
                        <Avatar src="https://github.com/gusttavosouza.png" hasBorder />
                        <strong>Gustavo Souza</strong>
                        <span>Full-Stack Developer</span>
                    </div>

                </aside>

                <main className="main">

                </main>
            </div>
        </div>
    )
}
