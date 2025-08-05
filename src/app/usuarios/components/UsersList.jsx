'use client';

import { useEffect, useState } from 'react';
import { SearchInput, WrappedButton, UserBox } from '@/components';
import { Pagination } from '@mui/material';
import { UsersFilter } from './UsersFilter';
import { AddUser } from './AddUser';
import AddIcon from '@mui/icons-material/Add';

export const UsersList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [init, setInit] = useState(false);
    const [addOpen, setAddOpen] = useState(false);

    const pseudoUser = {
        id: 1,
        apellido: 'Doe',
        nombre: 'John',
        email: 'john.doe@example.com',
        telefono: '123456789',
        sexo: 'Femenino',
        Rol_id: 3,
        rol: {
            id: 3,
            rol: 'Secretaria'
        }
    }

    const loading = false;
    const pages = 10

    const handleChange = () => { };

    return (
        <div className="w-[90%] bg-[#f5f5f5] flex flex-col items-center p-8">
            <SearchInput option={true} placeholder={"Ingrese el "} options={['nombre', 'apellido', 'email']} submitFunction={() => { }} loading={false} />
            <UsersFilter valueSelected={0} setFilterValue={() => {}} />
            <div className="w-full flex justify-start gap-6 flex-wrap items-center p-8">
                {/* {
                    loading ?
                        usersPlaceHolder.map((user, index) => {
                            return <UserBox key={index} loading={loading} />
                        })
                        :
                        users?.length > 0 ? users.map(user => {
                            return <UserBox key={user.id} user={{ user }} />
                        })

                            :
                            !loading && users?.length === 0 && <span>No se encontraron resultados.</span>
                }  */}
                <UserBox user={{ user: pseudoUser }} loading={false} key={1} />
            </div>
            {
                !loading &&
                <Pagination count={pages} page={currentPage} color="primary" variant='text' onChange={handleChange} />
            }
            <AddUser open={addOpen} handleClose={() => setAddOpen(false)} />
            <WrappedButton icon={<AddIcon />} text="Agregar usuario" action={() => setAddOpen(true)} />
        </div>
    )

}