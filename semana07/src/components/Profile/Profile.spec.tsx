import { render,screen } from "@testing-library/react"
import Profile from "."

describe("Componente Profile", () => {
    it("Deve renderizar o componente profile com os dados informados", () => {
      render(<Profile nome="BlaBlaBla" idade={12} seguidores={124} seguindo={12341}/>);
      
      const profileComponenteName = screen.queryByText('BlaBlaBla', {exact: false});
    //   const profileComponenteIdade = screen.queryByText('12', {exact: false});
      
      expect(profileComponenteName).toBeInTheDocument()
    //   expect(profileComponenteIdade).toBeInTheDocument()
      
    })
})