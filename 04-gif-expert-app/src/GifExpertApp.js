import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

  //const categorias = ['Gatos', 'Perros', 'Pájaros'];

  /*const handleAdd = () => {
    setcategorias(["Nutrias", ...categorias]);
    //setcategorias(cts => [...categorias, "Nutrias"]);
  }*/

  const [categorias, setCategorias] = useState(['Husky'])

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias={setCategorias} />
        <hr />        

        <ol>
          {
            categorias.map((categoria) => (
              <GifGrid 
                key={categoria}
                categoria={categoria}
              />
            ))
          }
        </ol>
    </>
  )
}
