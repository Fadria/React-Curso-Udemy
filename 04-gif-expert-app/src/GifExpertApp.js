import React, { useState } from 'react'

export const GifExpertApp = () => {

  //const categorias = ['Gatos', 'Perros', 'Pájaros'];
  const [categorias, setcategorias] = useState(['Gatos', 'Perros', 'Pájaros'])

  const handleAdd = () => {
    setcategorias(["Nutrias", ...categorias]);
    //setcategorias(cts => [...categorias, "Nutrias"]);
  }

  return (
    <>
        <h2>GifExpertApp</h2>
        <hr />

        <button onClick={handleAdd}>Añadir</button>

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
