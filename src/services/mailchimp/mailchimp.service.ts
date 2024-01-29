import axios, { AxiosResponse } from "axios"
import service from "./../http.service"

type PostListMember = {
    email_address: string;
    status: string;
    merge_fields: {
        FNAME: string;
        LNAME: string;
    }
}

const mailchimpService = axios.create({
    baseURL: process.env.MAILCHIMP_API_ENDPOINT as string,
    headers: {
        "Content-Type": "application/json",
        "anystring": process.env.MAILCHIMP_API_KEY as string
    }
})


// function parseResponse(response: AxiosResponse){
//     const { data } = response;
//     return data
// }
// function parseError(error: unknown){
//     return error
// }

// mailchimpService.interceptors.response.use(parseResponse, parseError)



export function postContact<T>(payload: PostListMember ){
    return mailchimpService.post<any, T>("/lists/<list_id>/members/", payload )
}

export default mailchimpService