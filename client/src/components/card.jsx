import React from 'react'


export default function Card ({name, flags, continents}) {

    return (
        <div>
            
            <img src={flags} alt='poke' width='100px' height="150px"/>
            
            <h3>{name}</h3>

            <h5>{continents}</h5>
            
            
        </div>
    )

}