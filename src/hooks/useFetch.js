import {useReducer,useEffect} from 'react'
import axios from 'axios'
import { useFetchReducer } from "./useFetchReducer";


export default function useFetch(name) {
    const [state, dispatch] = useReducer(useFetchReducer, {loading:false,data:{}})
    useEffect(() => {
        async function get() {
            dispatch({
                type:'MAKE_REQUEST'
            })
           try {
            const res = await axios.get('https://api.agify.io/?name=' +name)
            dispatch({
                type:'GET_DATA',
                payload:res.data
            })
           } catch (err) {
               console.log(err);
           }
        }
        
    if(name !== '')get()

    }, [name])
    return state;
}
