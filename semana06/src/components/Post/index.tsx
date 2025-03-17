import './styles.css'
import Avatar from '../Avatar'

type Author =  {
    name: string;
    role: string;
    profile_pic: string
}

type Comment = {
    message: string;
    publishedAt: Date;
    likes: number;
    author: Author;
}

type PostProps = {
    post:{
        author: Author
        publishedAt: Date,
        content: string,
        comments: Comment[]

    }
}

export default function Post() {
    return(
        <div>
            <li className="post">
                            <div className="post-header">
                                <Avatar imgUrl={"https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"} hasBorder={true} />
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
        </div>
    )
}