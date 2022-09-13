import { Form, Formik } from 'formik'
import { Button, Navbar, ScrollToTop, TextField } from '../components'
import { SelectSection } from '../components/ui/selectSection/SelectSection';
import { useContentStore } from '../hooks/useContentStore';
import { useEffect } from 'react';
import { useCreatePost } from '../hooks';


const formInitialState = {
    title: '',
    description: ''
}

type FormState = typeof formInitialState;

export const CreatePostPage = () => {


    const { createPost } = useCreatePost();

    return (
        <div className="bg-white dark:bg-dark transition-colors">
            <ScrollToTop />
            <Navbar />

            {/* Title and description Form */}
            <div className='mt-6 w-5/6 mx-auto'>
                <h1>Crear Post</h1>
                <hr />
                <div className='my-3'>
                    <label className='text-xs md:text-sm my-3 text-primary-light-2 dark:text-white'> Etiquetar curso/s o catedrático/s </label>
                    <SelectSection />
                </div>
                <hr />
                <Formik initialValues={formInitialState} onSubmit={createPost}>
                    <Form >
                        <div className='flex flex-col gap-y-4'>
                            <TextField placeholder='¿Recomendaciones para compiladores 1?' name='title' label='Titulo' />
                            <TextField placeholder='He intenado sacar compiladores en vacaciones pero el catedrático...' label='Descripción' name='description' />
                            <Button type='submit'>
                                Publicar post
                            </Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
