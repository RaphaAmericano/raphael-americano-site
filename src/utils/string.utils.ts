function toQueryString(params: {[key:string]:any }): string {
    return Object.keys(params).map((key) => `${key}=${params[key]}`).join("&")
}