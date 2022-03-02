import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

  //const categorias = ['Gatos', 'Perros', 'Pájaros'];

  /*const handleAdd = () => {
    setcategorias(["Nutrias", ...categorias]);
    //setcategorias(cts => [...categorias, "Nutrias"]);
  }*/

  const [categorias, setCategorias] = useState(['Gatos', 'Perros', 'Pájaros'])

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias={setCategorias} />
        <hr />        

        <ol>
          {
            categorias.map((categoria) => {
              return <li key={categoria}>{categoria}</li>
            })
          }
        </ol>
    </>
  )
}
