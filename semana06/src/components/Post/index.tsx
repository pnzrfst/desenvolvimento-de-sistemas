import './styles.css'
import Avatar from '../Avatar'

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

export default function Post() {
    return (
        <article className='post'>
            <header className='post-header'>
                <div className='author_infos'>
                    <Avatar imgUrl='https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg' hasBorder={true} />
                    <div className='about_profile'>
                        <strong>Luiz Carlos Pedro</strong>
                        <p>Estudante de Análise e desenvolvimento de sistemas</p>
                    </div>
                </div>
                <time>
                    Publicado há 4min
                </time>
            </header>

            <div className='content'>
                <p>Where can I get some?
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                    by injected humour, or randomised words which don't look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
                    combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    Where does it come from?
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old. Richard McClintock,
                    a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                    and going through the cites of the word in classical literature, discovered the undoubtable source.
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                    written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>

            <form className='commentArea'>
                <strong>Deixe seu comentário</strong>
                <textarea  className = 'textarea' placeholder='Deixe um comentário' />
                <button type="button" className='saveComment'>Publicar</button>
            </form>
        </article>
    )
}