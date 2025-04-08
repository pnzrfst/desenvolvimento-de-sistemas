import "./styles.css"

type TextAreaProps = {
    message: string;
    setMessage: (value: string) => void;
    placeholder: string;
}


export default function TextAreaCustom({message, setMessage, placeholder} : TextAreaProps) {
    return (

        <textarea
            placeholder= {placeholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
    )
}