import { fireEvent, render, screen } from "@testing-library/react"
import Comment from "."

const mockComment = {
    id: "223123",
    author: {
        name: "Liraliralira",
        role: "Vadio",
        profile_pic: "ssssssssssss"
    },
    comment: "Teste com Jest",
    publishedAt: new Date(),
    likes: 12
}


describe("Comment Component", () => {
    it("Deve renderizar um comentário", () => {
        render(
            <Comment
                increaseLike={jest.fn()}
                handleDeleteComment={jest.fn()}
                comment={mockComment}
            />
        )

        expect(screen.getByText("Liraliralira")).toBeInTheDocument();
        expect(screen.getByText("Teste com Jest")).toBeInTheDocument();
        expect(screen.getByText(12)).toBeInTheDocument();
        expect(screen.getByText("Aplaudir")).toBeInTheDocument();
    })

    it("Deve verificar se a função IncreaseLike foi chamada com o id correto.", () => {
        const increaseLike = jest.fn()

        render(<Comment comment={mockComment} handleDeleteComment={jest.fn()} increaseLike={increaseLike}/>);

        const buttonAplaudir = screen.getByTestId("buttonAplaudir");
        fireEvent.click(buttonAplaudir);

        expect(increaseLike).toHaveBeenCalled();
        expect(increaseLike).toHaveBeenCalledTimes(1);
        expect(increaseLike).toHaveBeenLastCalledWith(expect.any(Object), "223123") 
    })
    
    it("Deve verificar se a função DeleteComment foi chamada com o id correto", () => {
        const deleteComment = jest.fn();

        render(<Comment comment={mockComment} handleDeleteComment={deleteComment} increaseLike={jest.fn()}/>);

        const buttonDelete = screen.getByTestId("buttonDelete");
        fireEvent.click(buttonDelete);

        expect(deleteComment).toHaveBeenCalled();
        expect(deleteComment).toHaveBeenCalledTimes(1);
        expect(deleteComment).toHaveBeenLastCalledWith(expect.any(Object), "223123")
    })
})