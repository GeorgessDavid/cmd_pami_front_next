'use client';
import Link from 'next/link';
import SecondHeader from './SecondHeader';
import { Divider, Stack, Tooltip, Chip } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutModal from './LogoutModal';
import { useState } from 'react';
import ProfileModal from './ProfileModal';

export default function Header({ logged }) {
  logged = true;

  return (
    <>
      <header className="flex h-[6vh] items-center justify-between p-4 bg-[#0b2344] border-bottom">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Link href="https://app.consultoriosmedicosdavid.com.ar/" title="Volver a CMD App">
              <img src="/cmd_isologo_white.png" alt="CMD Logo" className="h-10 w-10" />
            </Link>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem className="bg-white h-8" />
          <div className="flex items-center gap-4">
            <Link href="https://prestadores.pami.org.ar/" title="Ir a Prestadores PAMI">
              <img src="/logo_pami_blanco.png" alt="PAMI Logo" className="w-20" />
            </Link>
          </div>
        </div>
        <div>
          <UserLogged logged rol="administrador" nombre="Georges Ammiel" apellido="David" id="1" />
        </div>
      </header>
      {logged && <SecondHeader rol="admin" />}
    </>
  );
}

const UserLogged = ({ logged, rol, nombre, apellido, id }) => {
  const [modalControl, setModalControl] = useState(false);
  return (
    <div className="flex justify-between items-center gap-8">
      <Tooltip title="Click izquierdo para más detalles." placement="bottom" arrow>
        <Stack direction="row" spacing={1} sx={{ color: 'white' }}>
          <Chip clickable size='medium' onClick={() => setModalControl(true)} icon={<AccountCircleIcon color='white' sx={{ color: 'white !important' }} />} label={`${nombre} ${apellido}`} variant='outlined' sx={{ color: 'white' }} />
        </Stack>
      </Tooltip>
      <div className="flex">  
        <LogoutModal />
      </div>
      <ProfileModal open={modalControl} handleClose={() => setModalControl(false)} title="Perfil de Usuario" user={
        {
          id: 1,
          email: "georges.ammiel@example.com",
          nombre: "Georges",
          apellido: "David",
          telefono: "123456789",
          sexo: "Masculino",
          matricula: "MN120392",
          rol: {
            id: 2,
            rol: "administrador"
          }
        }
      }/>
    </div>
  )
}