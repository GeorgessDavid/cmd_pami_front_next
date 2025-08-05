'use client';

import { useState, useEffect } from 'react';
import { Tabs, Tab, useMediaQuery, TextField, MenuItem } from '@mui/material';
import { styled } from '@mui/system';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const StyledTabs = styled(Tabs)({
    '& .MuiTabs-indicator': {
        backgroundColor: 'var(--titles-foreground)', // Indicador del color verde
    },
});

const StyledTab = styled(Tab)({
    '&.Mui-selected': {
        color: 'var(--titles-foreground)', // Color del texto cuando está seleccionado
        opacity: 1,
    },
    '&:not(.Mui-selected)': {
        color: '#000000',
        opacity: 0.6, // Opacidad cuando no está seleccionado
    },
    '&:hover': {
        opacity: 0.8, // Opacidad en hover
    },
});

export const UsersFilter = ({ valueSelected, setFilterValue }) => {

    const [tabValue, setTabValue] = useState(valueSelected);
    const isMobile = useMediaQuery('(max-width: 700px)');
    const handleTabValue = (event, value) => {
        setTabValue(value);
    }

    const responsiveHandleTabValue = (e) => {
        if (e.target.value) setTabValue(e.target.value);
    }
    useEffect(() => {
        setFilterValue(tabValue);
    }, [tabValue, setFilterValue]);
    return (
        <>
            {
                !isMobile &&
                <StyledTabs value={tabValue} onChange={handleTabValue}>
                    <StyledTab label="Todos" {...a11yProps(0)} />
                    <StyledTab label="Administradores" {...a11yProps(1)} />
                    <StyledTab label="Profesionales" {...a11yProps(2)} />
                    <StyledTab label="Secretarios" {...a11yProps(3)} />
                    <StyledTab label="Inactivos" {...a11yProps(4)} />
                </StyledTabs>
            }
            {
                isMobile &&
                <TextField
                    select
                    label="Filtrar por"
                    onChange={responsiveHandleTabValue}
                    fullWidth
                    variant="standard"
                    color='primary'
                >
                    <MenuItem value={0}>Todos</MenuItem>
                    <MenuItem value={1}>Administradores</MenuItem>
                    <MenuItem value={2}>Profesionales</MenuItem>
                    <MenuItem value={3}>Secretarios</MenuItem>
                    <MenuItem value={4}>Inactivos</MenuItem>
                </TextField>
            }
        </>
    )
}