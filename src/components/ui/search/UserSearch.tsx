import { Form, Formik } from 'formik';
import { TextField } from '../..';
import { SearchIcon } from '../../../assets';
import { Button } from '../button/Button';
import { useApi } from '../../../hooks/useApi';
import { ApiSearchUserResponse } from '../../../api/api.types';
import { useContentStore } from '../../../hooks';
import { useEffect } from 'react';

const formInitialState = {
    idStudent: ''
}

type FormState = typeof formInitialState;


export const UserSearch = () => {

    const { perfomFetch, response, isLoading } = useApi<ApiSearchUserResponse>();
    const { setIsLoading, setUsers } = useContentStore();

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
            console.log(response)
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
