import { render, screen } from "@testing-library/react"
import Header from "."

describe("Componente Header", () =>{
    it("Deve verificar se o Header foi renderizado", () => {
        render(<Header/>);

        const headerComponent = screen.getByText("MSN");

        expect(headerComponent).toBeInTheDocument();

    })
})