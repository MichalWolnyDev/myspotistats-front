import { useCallback, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface Params {
    method: string,
    url: string,
    params?: {
        time_range: string
    },
    headers: {
        Authorization: string
    }
    
}

const useAxios = (axiosParams: Params) => {
    const [response, setResponse] = useState<AxiosResponse | null>(null);
    const [error, setError] = useState('')
    const [loading, setIsLoading] = useState(true);
    const [shouldRefetch, refetch] = useState({}); 

    const sendRequest = useCallback(async (params: Params) => {
        try {
            const res = await axios.request(params)
            setResponse(res);
            
        }
        catch (err: any) {
            setError(err)
        } finally {
            setIsLoading(false)
        }

    }, [])

    useEffect(() => {
        sendRequest(axiosParams)
    }, [shouldRefetch])

    return {
        response,
        error,
        loading,
        refetch
    }
}

export default useAxios;