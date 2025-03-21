import "./styles.css";

type ButtonCustomProps = {
    disabled: boolean;
    title: string
}


export default function ButtonCustom({ disabled, title }: ButtonCustomProps) {
    return (
        <button disabled={disabled}>
            {title}
        </button>
    )
}