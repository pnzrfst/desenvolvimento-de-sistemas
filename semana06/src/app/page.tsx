import Link from "next/link";
import "./home.css"
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <section className="home-component">
      <section className="hello-container">
        <h1>Ola</h1>
        <Link href="/login">
          <button className="go-login">Login</button>
        </Link>

      </section>

      <div>
        <Profile nome = {"Luiz"} idade = {29} seguindo = {2} seguidores = {3} />
        <Profile nome = {"Germano"} idade = {29} seguindo = {2} seguidores = {3} />
        <Profile nome = {"José Pica"} idade = {29} seguindo = {2} seguidores = {3} />
        <Profile nome = {"José Bolas"} idade = {29} seguindo = {2} seguidores = {3} />
        <Profile nome = {"Gugu"} idade = {29} seguindo = {2} seguidores = {3} />

      </div>
    </section>

  );
}
