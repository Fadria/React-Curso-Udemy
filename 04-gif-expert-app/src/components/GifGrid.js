import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {
    
    const [images, setImages] = useState([])

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
        setImages(gifs);
    }

    return (
        <>
            <h3>{categoria}</h3>

            <div className='card-grid'>
                {images.map(img => (
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                ))}
            </div>
        </>
    )
}
