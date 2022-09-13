import React from 'react'
import { PostSearch } from './PostSearch';
import { UserSearch } from './UserSearch';

interface FirstFilterProps {
    id: string;
}

export const FirstFilter = ({ id }: FirstFilterProps) => {

    if (id == '1') {
        return <UserSearch />
    }

    if (id == '2') {

        return <PostSearch />
    }


    return <UserSearch />

}
