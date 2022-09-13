import { useAuthStore, useApi } from "./";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface FormState {
    names: string;
    lastnames: string;
    email: string;
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}

interface UpdateBasicInfoBody {
    names: string;
    lastnames: string;
    email: string;
    oldPassword?: string;
    password?: string;
    password2?: string;
}

export const useSettings = () => {

    const { user, status, startUpdateUserInfo } = useAuthStore();
    const navigate = useNavigate();

    if (status === 'not-authenticated' && !user) {
        navigate('/login');
    }

    const { perfomFetch: perfomUpdateBasicData, response: updateBasicDataResponse } = useApi()

    const [changepassword, setChangepassword] = useState(false)

    const formInitialState: FormState = {
        names: user.names,
        lastnames: user.lastnames,
        email: user.email,
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    }

    const editBasicInfo = ({ names, lastnames, email, oldPassword, newPassword, confirmNewPassword }: FormState) => {

        const body: UpdateBasicInfoBody = {
            names,
            lastnames,
            email,
        }

        if (changepassword) {
            body.oldPassword = oldPassword;
            body.password = newPassword;
            body.password2 = confirmNewPassword;
        }


        perfomUpdateBasicData({
            url: '/user/update',
            method: 'put',
            body
        })

    }

    useEffect(() => {
        if (updateBasicDataResponse) {
            startUpdateUserInfo()
        }
    }, [updateBasicDataResponse])


    return {
        changepassword,
        setChangepassword,
        formInitialState,
        editBasicInfo
    }

}