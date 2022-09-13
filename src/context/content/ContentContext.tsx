import { createContext } from 'react';
import { PostInterface, UserInterface } from '../../api';
import { ContentState } from './content.types';

interface ContextProps extends ContentState {
    setIsLoading: (loading: boolean) => void;
    setUsers: (users: UserInterface[]) => void;
    setPosts: (posts: PostInterface[]) => void;
    setSelectedPost: (post: PostInterface) => void;
    setSelectedUser: (user: UserInterface) => void;
    setSelectIdSection: (id: string) => void;
}

export const ContentContext = createContext({} as ContextProps);