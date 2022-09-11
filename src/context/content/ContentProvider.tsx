import { FC, ReactNode, useReducer } from 'react';
import { PostInterface, UserInterface } from '../../api';
import { ContentContext, contentReducer, ContentState } from './';

interface ContentProviderProps {
    children: ReactNode
}
const CONTENT_INITIAL_STATE: ContentState = {
    users: [],
    posts: [],
    selectedPost: null,
    selectedUser: null,
    loading: false,
    selectedIdSection: ''
}



export const ContentProvider: FC<ContentProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(contentReducer, CONTENT_INITIAL_STATE)

    const setIsLoading = (loading: boolean) => {
        dispatch({ type: 'CONTENT-SET-LOADING', payload: loading })
    }

    const setUsers = (users: UserInterface[]) => {
        dispatch({ type: 'CONTENT-SET-USERS', payload: users })
    }

    const setPosts = (posts: PostInterface[]) => {
        dispatch({ type: 'CONTENT-SET-POSTS', payload: posts })
    }

    const setSelectedPost = (post: PostInterface) => {
        dispatch({ type: 'CONTENT-SET-SELECTED-POST', payload: post })
    }

    const setSelectedUser = (user: UserInterface) => {
        dispatch({ type: 'CONTENT-SET-SELECTED-USER', payload: user })
        dispatch({ type: 'CONTENT-SET-SELECTED-ID-SECTION', payload: '' })

    }

    const setSelectIdSection = (id: string) => {
        dispatch({ type: 'CONTENT-SET-SELECTED-ID-SECTION', payload: id })
    }


    return (
        < ContentContext.Provider value={{
            ...state,

            // * functions
            setIsLoading,
            setUsers,
            setPosts,
            setSelectedPost,
            setSelectedUser,
            setSelectIdSection
        }}>
            {children}
        </ ContentContext.Provider>
    )
}