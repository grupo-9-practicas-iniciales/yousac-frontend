import { Form, Formik } from 'formik';
import { TextField } from '../..';
import { SearchIcon } from '../../../assets';
import { Button } from '../button/Button';

export const UserSearch = () => {

    const handleSubmit = () => {
    }

    return (
        <Formik initialValues={{
            idStudent: ''
        }} onSubmit={() => handleSubmit()}>
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
