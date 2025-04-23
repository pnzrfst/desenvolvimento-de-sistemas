import { Dialog } from "@mui/material";


type modalProps ={
    open: boolean;
    handleClose : (value: boolean) => void;
}

export default function ModalNewEntry({open, handleClose} : modalProps){
    return(
        <section>
            <Dialog open={open} onClose={handleClose}>
                <h1>Modal</h1>
            </Dialog>
        </section>
    )
}