import { useState, useEffect } from 'react';
import { ApiChangePasswordResponse, ApiRecoveryTokenResponse, yousacApi } from "../api"
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';


export const useChangePassword = (token: string) => {

    const [validToken, setValidToken] = useState<string | null>(null);
    const [isCheking, setIsCheking] = useState(true);
    const navigate = useNavigate()

    const validateToken = async () => {

        try {
            setValidToken(null)
            setIsCheking(true)
            const { data } = await yousacApi.post<ApiRecoveryTokenResponse>('auth/recovery/token', { token })
            setValidToken(data.token)
            setIsCheking(false)

        } catch (error) {
            setValidToken(null)
            setIsCheking(false)
        }

    }

    useEffect(() => {
        if (!isCheking) {
            toast.dismiss()
            if (validToken) {
                toast.success('Token valido 😎')
            } else {
                toast.error('Algo salio mal, puede que tu token haya expirado 😥')
                navigate('/recovery', {
                    replace: true
                })

            }
        } else {
            toast.loading('Validando token...')
        }
    }, [isCheking]);

    const changePassword = async (password: string, confirmPassword: string) => {


        if (!validToken) {
            toast.error('Espere un momento...')
            return;
        }
        toast.dismiss()

        const update_url = `${import.meta.env.VITE_API_URL}/user/update`
        console.log(update_url)

        try {
            const { data } = await axios.put<ApiChangePasswordResponse>(update_url,
                { password, password2: confirmPassword }, {
                headers: {
                    'auth-token': validToken
                }
            })

            toast.success(data.msg)
            navigate('/login')
        } catch (error) {
            console.log(error)
            toast.error('Algo salio mal, puede que tu token haya expirado 😥')
            navigate('/recovery', {
                replace: true
            })

        }

    }

    useEffect(() => {
        validateToken()
    }, [])

    return {
        validToken,
        validateToken,
        isCheking,
        changePassword
    }

}