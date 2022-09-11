import { AxiosError } from "axios"
import { useState } from 'react';
import { ApiErrorInterface, ApiListError, yousacApi } from "../api"

import toast from 'react-hot-toast';


type methods = 'post' | 'get' | 'put'

interface FetchOptions {
    url: string,
    body?: any,
    method?: methods,
}

export const useApi = <T>() => {

    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState<ApiListError[]>([])
    const [isError, setisError] = useState(false)
    const [msg, setMsg] = useState<String | null>(null)
    const [response, setResponse] = useState<T | null>(null)

    const perfomFetch = async ({
        url,
        body = {},
        method = 'post',
    }: FetchOptions) => {



        try {
            setIsLoading(true)
            setisError(false)
            setErrors([])
            setMsg(null)
            setResponse(null)

            const loadingToast = toast.loading('Cargando...')

            let request;

            switch (method) {
                case "post":
                    request = await yousacApi.post<T>(url, body)
                    break;

                case "get":
                    request = await yousacApi.get<T>(url, {
                        params: body
                    })
                    break;

                case "put":
                    request = await yousacApi.put<T>(url, body)
                    break;

                default:
                    request = await yousacApi.post<T>(url, body)
                    break;
            }

            const { data } = request as any

            setIsLoading(false)
            toast.dismiss(loadingToast)

            if (!data.ok) {
                setisError(true)
                setErrors(data.errors)

                // * Toast for individual error
                data.errors.forEach((error: ApiErrorInterface) => {
                    toast.error(error.msg)
                });

                // * Toast for general error
                toast.error(data.msg)

            } else {
                // * Toast for success
                toast.success(data.msg)
            }

            setMsg(data.msg)
            setResponse(data)

        } catch (e) {

            const error = e as AxiosError<ApiErrorInterface>;

            const { response } = error;
            const { data } = response!;
            const { errors, msg } = data;

            // * Dismiss loading toast
            toast.dismiss()


            // * Toast for individual error
            errors.forEach((er: ApiListError) => {
                toast.error(er.msg)
            });

            // * Toast for general error
            toast.error(msg)

            setResponse(null)
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
        response,

        // * Methods
        perfomFetch
    }
}