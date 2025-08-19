'use client';

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';


const ConfirmModal = ({
    open,
    handleClose,
    handleConfirm,
    title,
    message
}) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" variant="outlined">
                    Cancelar
                </Button>
                <Button onClick={handleConfirm} color="error" variant="outlined" sx={{
                    '&:hover': {
                        backgroundColor: '#ff0000',
                        color: '#fff'
                    }
                }}>
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmModal;