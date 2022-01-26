import {useEffect, useState} from "react";
import axios from "axios";

const ApiGetData = (url) => {

    const [data, setData] = useState('');
    const [error, setError] = useState();
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        // console.log('use effect ran')
        setTimeout(() =>{
            fetch(url)
                .then(res => {
                    //console.log(res)
                    if(!res.ok){
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err =>{
                    setIsPending(false)
                    setError(err.message)
                })
        }, 500)
    }, [url]);

    return {data, error, isPending}
}

export default ApiGetData