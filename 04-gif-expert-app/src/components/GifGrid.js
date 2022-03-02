import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {
    
    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs(categoria)
        .then(imgs => {setImages(imgs)});
    }, [categoria])

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
