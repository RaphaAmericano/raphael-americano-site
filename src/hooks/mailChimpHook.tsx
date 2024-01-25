import { useCallback, useState } from "react"
// https://jfelix.info/blog/kick-start-your-newsletter-mailchimp-custom-form-with-react
interface Status {
    idle:string;
    loading:string;
    success:string;
    error:string;
}

const Status:Status = {
    idle: "IDLE",
    loading: "LOADING",
    success: "SUCCESS",
    error: "ERROR"
}

type StatusState = typeof Status[keyof typeof Status]

function useMailChimp(url:string){
    const [status, setStatus] = useState<StatusState>(Status.idle);
    const [error, setError] = useState(null);
    const [value, setValue] = useState(null);

    const subscribe = useCallback((data:any) => {
        const params = toQueryString(data)
        const endpointURL = url.replace('/post?', "")

        setError(null);
        setStatus(Status.loading);

        // jsonp(newUrl, { param: "c" }, (err, data) => {
        //     if (err) {
        //       setStatus(Status.error);
        //       setError(err);
        //     } else if (data.result !== "success") {
        //       setStatus(Status.error);
        //       setError(data.msg);
        //     } else {
        //       setStatus(Status.success);
        //       setValue(data.msg);
        //     }
        //   });

    },[])

    return { subscribe, status, error, value } 

}
export default useMailChimp