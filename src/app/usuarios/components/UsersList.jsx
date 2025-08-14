'use client';

import { useEffect, useState } from 'react';
import { SearchInput, WrappedButton, UserBox } from '@/components';
import { Pagination } from '@mui/material';
import { UsersFilter } from './UsersFilter';
import { AddUser } from './AddUser';
import { useUsers, useCreateUser } from '@/hooks';
import AddIcon from '@mui/icons-material/Add';

export const UsersList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [init, setInit] = useState(0);
    const [pages, setPages] = useState(1);
    const [filterValue, setFilterValue] = useState(0);
    const { loading, error, users, getAllUsers } = useUsers(20, init, filterValue);
    const { success, createUser, loading: createUserLoading, progress } = useCreateUser();

    const [addOpen, setAddOpen] = useState(false);

    useEffect(() => {
        if (success) {
            getAllUsers();
            setTimeout(() => {
                setAddOpen(false);
            }, 5000);
        }
        console.log(success);
    }, [success])

    const handleChange = (e, value) => {
        if (value === 1) {
            setInit(0);
        } else {
            setInit((value - 1) * 20);
        }
        setCurrentPage(value);
    };

    return (
        <div className="w-[90%] bg-[#f5f5f5] flex flex-col items-center p-8">
            <SearchInput option={true} placeholder={"Ingrese el "} options={['nombre', 'apellido', 'email']} submitFunction={() => { }} loading={false} />
            <UsersFilter valueSelected={filterValue} setFilterValue={setFilterValue} />
            <div className="w-full flex justify-start gap-6 flex-wrap items-center p-8">
                {
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
                } 
                {/* <UserBox user={{ user: pseudoUser }} loading={false} key={1} /> */}
            </div>
            {
                !loading &&
                <Pagination count={pages} page={currentPage} color="primary" variant='text' onChange={handleChange} />
            }
            <AddUser open={addOpen} handleClose={() => setAddOpen(false)} submitFunction={createUser} loading={createUserLoading} progress={progress} />
            <WrappedButton icon={<AddIcon />} text="Agregar usuario" action={() => setAddOpen(true)} />
        </div>
    )

}