'use client';

import { Tooltip, Skeleton } from '@mui/material';
import { useState } from 'react';
import { UserModal } from '@/components';
const UserBox = ({ user, loading }) => {
    const [open, setOpen] = useState(false);

    // To check if the user object is valid.
    user = user?.user;

    const handleClose = () => {
        setOpen(!open);
    }

    return (
        <div className="w-[22.5%] border-[#ccc] border-2 py-4 px-8 my-4 mx-2 cursor-pointer transition-all duration-300 bg-[#ececec] hover:shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <Tooltip title="Click izquierdo para más opciones" arrow disableFocusListener={open}>
                <div key={user?.id} onClick={handleClose}>
                    {
                        loading ? (
                            <>
                                <Skeleton variant="text" width={100} />
                                <Skeleton variant="text" width={50} />
                            </>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold text-[var(--titles-foreground)] relative group">
                                    {user?.apellido}, {user?.nombre}
                                </h2>
                                <span className="italic text-[#666]">{user?.rol?.rol}</span>
                            </>
                        )
                    }
                </div>
            </Tooltip>
            <UserModal user={user} open={open} handleClose={handleClose} loading={loading} />
        </div>
    )
}

export default UserBox;