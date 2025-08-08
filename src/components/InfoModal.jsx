'use client'

import { Dialog, DialogTitle, DialogContent, Tooltip, Divider, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

export default function InfoModal({ open, handleClose, title, children }) {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth='sm'
            fullWidth
        >
            <DialogTitle id="alert-dialog-title" sx={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                {title}
                <Tooltip title="Cerrar" arrow>
                    <IconButton onClick={handleClose}>
                        <CloseIcon  sx={{
                            cursor: 'pointer'
                        }} />
                    </IconButton>
                </Tooltip>
            </DialogTitle>
            <Divider />
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}