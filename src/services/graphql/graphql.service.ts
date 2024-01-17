import service from "./../http.service"

const graphqlService = Object.assign({}, service)

function parseResponse(response: { data:object, extensions: object}){
    return response.data
}
function parseError(error: unknown){
    return error
}


graphqlService.interceptors.response.use(parseResponse, parseError)

export default graphqlService