'use client';

import { Dialog, DialogContent, DialogTitle, IconButton, DialogActions, CircularProgress } from '@mui/material';
import { CustomTooltip } from '@/components';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const FormModal = ({ open, setOpen, children, title, onsubmit, loading, progress, maxWidth }) => {

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            maxWidth={maxWidth || 'sm'}
            fullWidth
        >
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {title}
                <IconButton onClick={() => setOpen(false)}><CloseIcon /></IconButton>
            </DialogTitle>
            <form onSubmit={onsubmit}>
                <DialogContent >
                    {children}
                </DialogContent>
                <DialogActions>
                    <CustomTooltip title='Cancelar' styles={{ backgroundColor: '#f44336', color: 'white', fontSize: '1rem' }}>
                        <IconButton color='error' onClick={() => setOpen(false)}><CloseIcon /></IconButton>
                    </CustomTooltip>
                    {!loading && <CustomTooltip title='Agregar' styles={{ backgroundColor: '#4caf50', color: 'white', fontSize: '1rem' }}>
                        <IconButton color='success' type='submit' disabled={progress >= 90}><CheckIcon /></IconButton>
                    </CustomTooltip>
                    }
                    {loading &&
                        <CustomTooltip title='Cargando...' styles={{ backgroundColor: '#4caf50', color: 'white', fontSize: '1rem' }}>
                            <IconButton color='success' disabled>
                                <CircularProgress variant='determinate' size={24} color='success' value={progress} />
                            </IconButton>
                        </CustomTooltip>
                    }
                </DialogActions>
            </form>
        </Dialog>
    )
};

export default FormModal;