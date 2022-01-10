import React from 'react';

export default function Paginado({countriesPerPage, allCountries, paginado}) {
    
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        
        pageNumbers.push(i)
        
    }

    return (
        <nav>
            <ul>
                { 
                 pageNumbers && 
                     pageNumbers.map(number => (
                     <li className='number' key={number + Math.random}>
                         <p key={number + Math.random} onClick={() => paginado(number)}>{number}</p>
                     </li>
                 ))
                }
            </ul>
        </nav>
    )

}