import { render, screen } from '@testing-library/react'
import Avatar from '.'

describe('Testar a funcionalidade do avatar', () =>{
    it('Deve renderizar o avatar corretamente, sem a borda', () => {
        render(<Avatar imgUrl='1' hasBorder={false}/>);

        const avatarElement = screen.getByTestId('avatar');

        expect(avatarElement).toBeInTheDocument();
    })
})