'use client';

import { useEffect, useState } from 'react';
import { SearchInput } from '@/components';

export const UsersList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [init, setInit] = useState(false);

    return (
        <div className="w-[90%] bg-[#f5f5f5] flex flex-col items-center p-8">
            {/* Obtain components from de main project on the following commented lines. */}
            <SearchInput option={true} placeholder={"Ingrese el "} options={['nombre', 'apellido', 'email']} submitFunction={() => {}} loading={false} />
            {/* 
            <UsersFilter valueSelected={filterValue} setFilterValue={setFilterValue} /> */}
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
            </div>
            {/* {
                !loading &&
                <Pagination count={pages} page={currentPage} color="success" variant='outlined' onChange={handleChange} />
            } */}
            {/*             
            <WrappedButton icon={<AddIcon />} text="Agregar usuario" action={handleAddOpen}/>
            <AddUser open={addOpen} handleClose={() => setAddOpen(false)} /> */}
        </div>
    )

}