import "./styles.css";

type ButtonCustomProps = {
    disabled: boolean;
    title?: string;
    handle: () => void
}


export default function ButtonCustom({ disabled, title, handle}: ButtonCustomProps) {
    return (
        <button disabled={disabled} onClick={handle}>
            {title ? title : (
                "Foi"
            )}
        </button>
    )
}