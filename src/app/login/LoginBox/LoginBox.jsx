'use client';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';


export default function LoginBox() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="w-[31.25rem] max-h-[500px] bg-[rgba(255,255,255,0.15)] backdrop-blur-[1rem] flex flex-col m-[5rem]">
            <h2 className="text-2xl font-semibold mb-4 text-center m-[1.5rem] color-[var(--titles-foreground)]">Iniciar Sesión</h2>
            <form className="flex flex-col items-center gap-4 p-4">
                <TextField
                    label="Correo Electrónico"
                    variant="standard"
                    fullWidth
                    type="email"
                    color="primary"
                    auto-complete="email"
                />
                <TextField
                    label="Contraseña"
                    type={showPassword ? "text" : "password"}
                    variant="standard"
                    fullWidth
                    color="primary"
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        color="primary"
                                        className="mr-5"
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }
                    }}
                    autoComplete="current-password"
                />
                <LoadingButton variant="contained" color="primary" type='submit' className="py-[2rem] w-36 text-center" loading={false} >
                    Iniciar Sesión
                </LoadingButton>
            </form>
        </div>
    )
}