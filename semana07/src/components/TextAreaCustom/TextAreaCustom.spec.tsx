import { fireEvent, render, screen } from "@testing-library/react";
import TextAreaCustom from "."

describe("TextAreaCustom Component", () => {
    it("Deve verificar se o componente está sendo renderizado com o placeholder correto", () => {
        render(<TextAreaCustom message="Tralalero Tralala" setMessage={jest.fn()} placeholder="Esse é o placeholder" />);

        const textAreaCustom = screen.getByPlaceholderText("Esse é o placeholder");

        expect(textAreaCustom).toBeInTheDocument();
        expect(textAreaCustom).toHaveValue("Tralalero Tralala");
    })

    it("Deve verificar se o componente está sendo renderizado e chamar a function setMessage quando o valor for alterado", () => {
        const setMessage = jest.fn()
        render(<TextAreaCustom message="Tralalero Tralala" setMessage={setMessage} placeholder="Esse é o placeholder" />);

        const textAreaCustom = screen.getByPlaceholderText("Esse é o placeholder");

        fireEvent.change(textAreaCustom, ({target: {value: "Breno gosta de homens"}}));

        expect(setMessage).toHaveBeenCalled();
        expect(setMessage).toHaveBeenCalledTimes(1);
        expect(setMessage).toHaveBeenCalledWith("Breno gosta de homens");
    })
})