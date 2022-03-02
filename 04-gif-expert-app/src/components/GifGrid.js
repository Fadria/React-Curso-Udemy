import React, { useState, useEffect } from 'react'

export const GifGrid = ({categoria}) => {

    const [count, setcount] = useState(0);
    
    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {
        const url = "https://api.giphy.com/v1/gifs/search?q=Gatos&limit=10&api_key=zqgveaEuOJcuBtT7wokIAJZ15Jd1I61o";
        const respuesta = await fetch(url);
        const {data} = await respuesta.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        // setImgs
    }

    //getGifs();

    return (
        <div>
            <h3>{categoria}</h3>
            <h3>{count}</h3>
            <button onClick={() => setcount(count +1)}></button>
        </div>
    )
}
