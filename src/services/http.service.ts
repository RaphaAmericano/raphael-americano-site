import axios, { AxiosResponse } from "axios"

const service = axios.create({
    baseURL: process.env.API_ENDPOINT as string,
    headers: {
        'Content-Type': 'application/json',
    }
})

function parseResponse(response: AxiosResponse){ 
    return response.data
}

function handleResponseError(error: any){
    console.error("graphql response error",error)
    return error
}

service.interceptors.response.use(parseResponse, handleResponseError)

export default service