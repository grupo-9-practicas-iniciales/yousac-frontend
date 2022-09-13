import { AxiosError } from "axios"
import { useState } from "react"
import { ApiErrorInterface, ApiListError, ApiUserCreateRequest, APIUserCreateResponse, yousacApi } from "../api"

export const useRegister = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState<ApiListError[]>([])
    const [isError, setisError] = useState(false)
    const [msg, setMsg] = useState<String | null>(null)

    const startRegister = async (formValues: ApiUserCreateRequest) => {

        try {
            setIsLoading(true)
            setisError(false)
            setErrors([])
            setMsg(null)

            const { data } = await yousacApi.post<APIUserCreateResponse>('/user/create', formValues)
            setIsLoading(false)

            if (!data.ok) {
                setisError(true)
                setErrors(data.errors)
            }

            setMsg(data.msg)
        } catch (e) {

            const error = e as AxiosError<ApiErrorInterface>;

            const { response } = error;
            const { data } = response!;
            const { errors, msg } = data;

            setIsLoading(false)
            setisError(true)
            setErrors(errors);
            setMsg(msg)
        }
    }

    return {
        isLoading,
        errors,
        isError,
        msg,

        // * Methods
        startRegister
    }
}