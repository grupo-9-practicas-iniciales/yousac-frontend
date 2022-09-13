import { useEffect } from 'react';

import { Form, Formik } from 'formik';
import { TextField, Button } from '../..';
import { SearchIcon } from '../../../assets';
import { ApiSearchUserResponse } from '../../../api/api.types';
import { useContentStore, useApi } from '../../../hooks';

const formInitialState = {
    idStudent: ''
}

type FormState = typeof formInitialState;


export const UserSearch = () => {

    const { perfomFetch, response, isLoading } = useApi<ApiSearchUserResponse>();
    const { setIsLoading, setUsers, setSelectIdSection } = useContentStore();

    const onSubmit = async ({
        idStudent
    }: FormState) => {

        await perfomFetch({
            url: `/search?param=user`,
            method: 'post',
            body: {
                idStudent
            }
        })

    }

    useEffect(() => {

        if (isLoading) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }

    }, [isLoading])

    useEffect(() => {
        if (response) {
            setSelectIdSection('');
            setUsers([response.user] || []);
        }
    }, [response])


    return (
        <Formik initialValues={formInitialState} onSubmit={onSubmit}>
            <Form className='flex w-full'>
                <div className='flex my-3 gap-x-2  w-full'>
                    <TextField placeholder='202110568' type='search' name='idStudent' />
                    <Button type='submit' className='w-1/6 flex justify-center items-center' >
                        <SearchIcon />
                    </Button>
                </div>
            </Form>
        </Formik>
    )
}
