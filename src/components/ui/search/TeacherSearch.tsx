import { Form, Formik } from "formik"
import { SearchIcon } from "../../../assets"
import { TextField } from "../textField/TextField"
import { Button } from '../button/Button';
import { SelectOptionsInterface } from "../select/Select.types";
import { useState } from 'react';
import { Select } from "../select/Select";

const teachersFound: SelectOptionsInterface[] = [
    { displayName: 'catedratico1', id: '1' },
    { displayName: 'catedratico2', id: '2' },
]

export const TeacherSearch = () => {

    const [selectedTeacherFound, setSelectedTeacherFound] = useState(teachersFound[0]);


    const handleSubmit = () => {

    }

    return (
        <>
            <Formik initialValues={{
                idStudent: ''
            }} onSubmit={() => handleSubmit()}>
                <Form className='flex w-full'>
                    <div className='flex my-3 gap-x-2  w-full'>
                        <TextField placeholder='Nombre del catedrático' type='search' name='idStudent' />
                        <Button type='submit' className='w-1/6 flex justify-center items-center' >
                            <SearchIcon />
                        </Button>
                    </div>
                </Form>
            </Formik>
            {/* evalute options1[] lenght */}
            <div className="grid grid-cols-2 w-full gap-x-2">
                <Select selected={selectedTeacherFound} setSelected={setSelectedTeacherFound} options={teachersFound} />
                <Select selected={selectedTeacherFound} setSelected={setSelectedTeacherFound} options={teachersFound} />
            </div>
        </>
    )
}
