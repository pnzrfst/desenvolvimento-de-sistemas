import ButtonCustom from "./"
import '@testing-library/jest-dom';
import { fireEvent,render,screen } from '@testing-library/react'

describe('Verificar texto do botão', () => {
    it('Deve renderizar o botão com o texto publicar', () => {
        render(<ButtonCustom handle={() => {}} title="Publicar" disabled={false}/>);
        
        const buttonEvent = screen.getByText("Publicar");

        expect(buttonEvent).toBeInTheDocument();
    })

    it('Deve renderizar o botão sem o texto', () =>{
        render(<ButtonCustom handle={() => {}} title="" disabled={false}/>);

        const buttonEvent = screen.getByText('Foi');

        expect(buttonEvent).toBeInTheDocument();

    })

    it('Deve renderizar o botao e testar o clique no botao', () =>{
        const handleMock = jest.fn()

        render(<ButtonCustom title="Publicar" disabled={false} handle={handleMock}/>);

        const buttonEvent = screen.getByText("Publicar");
        expect(buttonEvent).toBeInTheDocument();


        fireEvent.click(buttonEvent)

        expect(handleMock).toHaveBeenCalled();
        expect(handleMock).toHaveBeenCalledTimes(1);
        
    })
})