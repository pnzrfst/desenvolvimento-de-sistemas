import { Dialog } from "@mui/material";

type Props = {
    open: boolean;
    handleClose: (value: boolean) => void;
}

export default function ModalNewTransaction({ open, handleClose }: Props) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <h1>MODAL NEW TRANSACTION</h1>
            <h1>MODAL NEW TRANSACTION</h1>
            <h1>MODAL NEW TRANSACTION</h1>
            <h1>MODAL NEW TRANSACTION</h1>
            <h1>MODAL NEW TRANSACTION</h1>
        </Dialog>
    )
}