import { useContentStore } from '../hooks/useContentStore';
import { Navigate } from 'react-router-dom';
export const ProfilePage = () => {

    const { selectedUser } = useContentStore();

    if (!selectedUser) {
        return <Navigate to='/app' />
    }


    return (
        <div>ProfilePage</div>
    )
}
