'use client';

import { Chip, Tooltip, Divider } from '@mui/material';

export default function TextContainer({ title, date, newUpdate, path }) {
    const handleClick = () => {
        window.open(path, '_blank');
    }

    return (
        <Tooltip title="Click para ver detalles" arrow>
            <div className="p-4 flex justify-between items-center h-[7rem] bg-[#fcfcfc] cursor-pointer transition-all duration-300 hover:bg-[#bbbbbb]" onClick={handleClick}>
                <div className="flex gap-4 items-center">
                    <h4 className="text-[1.2rem] font-medium">{title}</h4>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    {newUpdate && <Chip label="Nueva" variant="filled" color="primary" />}
                </div>
                <span className="text-base font-medium text-[#6c757d]">{date}</span>
            </div>
            <Divider />
        </Tooltip>
    )
}