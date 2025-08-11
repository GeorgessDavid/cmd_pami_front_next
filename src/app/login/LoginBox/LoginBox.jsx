'use client';
import { TextField, InputAdornment, IconButton, Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLogin } from '@/hooks/usersHooks';
import { redirect } from 'next/navigation';
import { useForm } from 'react-hook-form';
export default function LoginBox() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const { isLogged, loading, error, login, resetErrors } = useLogin();

    if (isLogged) redirect('/');

    const { register, handleSubmit, formState: { errors } } = useForm();


    return (
        <div className="w-[31.25rem] bg-[rgba(255,255,255,0.15)] backdrop-blur-[1rem] flex flex-col m-[5rem]">
            <h2 className="text-2xl font-semibold mb-4 text-center m-[1.5rem] color-[var(--titles-foreground)]">Iniciar Sesión</h2>
            <form className="flex flex-col items-center gap-[1.5rem] p-4" onSubmit={handleSubmit(async (values) => {
                try {
                    await login(values);
                } catch (err) {
                    console.error(err);
                }
            })}>
                <TextField
                    label="Correo Electrónico"
                    variant="standard"
                    fullWidth
                    type="email"
                    color="primary"
                    onChange={errors ? resetErrors : null}
                    {...register('email', { required: 'Debe introducir su correo electrónico.' })}
                    error={!!errors.email || !!error?.email}
                    helperText={errors.email?.message || error?.email?.msg}
                    autoComplete="email"
                />
                <TextField
                    label="Contraseña"
                    type={showPassword ? "text" : "password"}
                    variant="standard"
                    fullWidth
                    color="primary"
                    onChange={errors ? resetErrors : null}
                    {...register('password', { required: 'Debe introducir su contraseña.' })}
                    error={!!errors.password || !!error?.password}
                    helperText={errors.password?.message || error?.password?.msg}
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
                <Button variant="contained" color="primary" type='submit' className="w-36 text-center" loading={loading} >
                    Iniciar Sesión
                </Button>
            </form>
            <div className="flex justify-center items-center gap-2 mb-4">
                <Link
                    href="/forgot-password"
                    className="color-[var(--titles-foreground)] hover:text-white transition-all"
                >
                    ¿OLVIDASTE TU CONTRASEÑA?
                </Link>
            </div>
        </div>
    )
}