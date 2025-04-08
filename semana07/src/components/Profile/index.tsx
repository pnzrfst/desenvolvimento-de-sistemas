import { ProfilerProps } from "react"
import "./styles.css"


type ProfileProps = {
    nome: string,
    idade: number,
    seguindo: number,
    seguidores: number
  }
  

export default function Profile({nome, idade, seguindo, seguidores} : ProfileProps) {
    return (
        <section className="profile-component">
            <div className="profile-item">
                <div className="name">
                    <h1>{nome}</h1>

                </div>
                <div className="about">
                    <p>Idade: {idade} </p>
                    <p>Seguindo: {seguindo}</p>
                    <p>Seguidores: {seguidores}</p>
                </div>
            </div>
        </section>
    )
}