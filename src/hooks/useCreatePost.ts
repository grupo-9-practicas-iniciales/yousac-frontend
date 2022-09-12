import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { ApiCreatePostResponse } from '../api';
import { useContentStore } from './';
import { useApi } from './useApi';
import { useNavigate } from 'react-router-dom';

interface FormState {
    title: string;
    description: string,
}

export const useCreatePost = () => {

    const { selectedIdSection, setSelectIdSection, setSelectedPost } = useContentStore();
    const { response: createPostResponse, perfomFetch: perfomCreatePost } = useApi<ApiCreatePostResponse>();
    const navigate = useNavigate();

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

        perfomCreatePost({
            url: '/post',
            method: 'post',
            body: {
                title,
                description,
                idSection: selectedIdSection
            }
        })

    }

    useEffect(() => {

        if (createPostResponse) {
            setSelectedPost(createPostResponse.post);
            navigate('/post');
        }

    }, [createPostResponse])



    return {
        createPost,

    }

}
