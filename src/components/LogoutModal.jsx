'use client';

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLogout } from '@/hooks';

export default function LogoutModal() {
    const [open, setOpen] = useState(false);
    const { logout } = useLogout();


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <LogoutIcon onClick={handleClickOpen} sx={{
                cursor: 'pointer',
                color: 'white',
                transition: 'all 0.3s',
                '&:hover': {
                    color: 'black'
                }
            }} titleAccess='Cerrar Sesión' />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                }}>{"Cerrar Sesión"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={{ color: 'black', fontSize: '1.125rem', fontWeight: '400' }}>   
                        ¿Está seguro que desea cerrar su sesión?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color='error' onClick={logout}>Sí</Button>
                    <Button onClick={handleClose}>No</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}