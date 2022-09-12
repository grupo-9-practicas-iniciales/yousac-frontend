import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useContentStore } from './';
import { useApi } from './useApi';

interface FormState {
    title: string;
    description: string,
}

export const useCreatePost = () => {

    const { selectedIdSection, setSelectIdSection } = useContentStore();
    const { response: createPostResponse, perfomFetch: perfomCreatePost } = useApi();

    useEffect(() => {
        // * Clears id section when the component is mounted
        setSelectIdSection('');
    }, [])

    console.log(selectedIdSection);

    const createPost = ({ title, description }: FormState) => {

        if (selectedIdSection === '') {
            toast.error('Selecciona una sección de un curso/catedrático');
            return;
        }

    }

    return {
        createPost,

    }

}
