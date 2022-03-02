import { useState, useEffect } from "react"
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (categoria) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(categoria)
        .then(imgs => {

            setTimeout(() => {
                console.log(imgs);
                
                setState({
                    data: imgs,
                    loading: false
                });    
            }, 2000);
        });
    }, [categoria])

    return state; // {data: [], loading: true};
}