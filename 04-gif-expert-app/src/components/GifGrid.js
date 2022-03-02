import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
///import { getGifs } from '../helpers/getGifs';
//import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {
    
    const {loading} = useFetchGifs();



    /*const [images, setImages] = useState([])
    
    useEffect(() => {
        getGifs(categoria)
        .then(imgs => {setImages(imgs)});
    }, [categoria])*/

    return (
        <>
            <h3>{categoria}</h3>

            {loading ? 'Cargando...' : 'Data cargada'}
            {/*<div className='card-grid'>
                {images.map(img => (
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                ))}
                </div>*/}
        </>
    )
}
