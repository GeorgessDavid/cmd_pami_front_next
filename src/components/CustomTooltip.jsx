'use client';

import Tooltip from '@mui/material/Tooltip';

export default function CustomTooltip({ title, styles, children, placement }) {
    return (
        <Tooltip title={title} placement={placement || "bottom"} arrow slotProps={styles && {

            tooltip: {
                sx: {

                    backgroundColor: styles.backgroundColor,
                    color: styles.color,
                    fontSize: styles.fontSize
                }
            },
            arrow: {
                sx: {

                    color: styles.backgroundColor
                }
            }
        }}>
            {children}
        </Tooltip >
    )
}