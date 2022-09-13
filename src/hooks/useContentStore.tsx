import { useContext } from 'react';
import { ContentContext } from '../context/content';

export const useContentStore = () => {

    const context = useContext(ContentContext)

    return {
        ...context
    }
}
