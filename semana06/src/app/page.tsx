import Link from "next/link";
import "./home.css"
import Profile from "@/components/Profile";

export default function Home() {

  const profiles = [{
    id: Math.random(),
    nome: "Luiz",
    idade: 21,
    seguindo: 21,
    seguidores: 21
  }]

  return (
    <section className="home-component">
      <section className="hello-container">
        <h1>Ola, bem vindo!</h1>
        <h3>Entre na sua conta para continuar</h3>
        <Link href="/login">
          <button className="go-login">Ir para login</button>
        </Link>

      </section>
    </section>

  );
}
