import { AxiosResponse } from "axios"
import service from "./../http.service"

const graphqlService = Object.assign({}, service)

function parseResponse(response: AxiosResponse){
    const { data } = response;
    return data
}
function parseError(error: unknown){
    return error
}


graphqlService.interceptors.response.use(parseResponse, parseError)

export default graphqlService