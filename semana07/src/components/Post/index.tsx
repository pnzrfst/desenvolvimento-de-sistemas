import Avatar from "../Avatar";
import "./styles.css";

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}

type PostProps = {
    post: {
        author: Author;
        publishedAt: Date;
        content: string;
    }
}

export default function Post({ post }: PostProps) {
    return (
        <article className="post">
            <header>
                <div className="author">
                    <Avatar src={"https://github.com/gustavoroberto1.png"} hasBorder />
                    <div className="author-info">
                        <strong>Gutavo Souza</strong>
                        <span>Desenvolvedor</span>
                    </div>
                </div>

                <time>
                    Públicado há 2 horas
                </time>
            </header>

            <div className="content">
                <p>O Lorem Ipsum é um texto modelo
                    da indústria tipográfica e
                    de impressão. O Lorem Ipsum
                    tem vindo a ser o texto padrão
                    usado por estas indústrias desde o
                    ano de 1500, quando uma misturou os
                    caracteres de um texto para criar um
                    espécime de livro. Este texto não só
                    sobreviveu 5 séculos, mas também o
                    salto para a tipografia electrónica,
                    mantendo-se essencialmente inalterada.
                </p>
            </div>

            <form className="form">
                <strong>Deixe um comentário</strong>
                <textarea placeholder="Deixe um comentário" />

                <footer>
                    <button>
                        Publicar
                    </button>
                </footer>
            </form>

        </article>
    )
}