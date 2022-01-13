import styles from './modules/paginado.module.css'

import React from 'react';

export default function Paginado({countriesPerPage, allCountries, paginado}) {

    const pageNumbers = []


    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        
        pageNumbers.push(i)
        
    }

    return (
        <>
            { 
                pageNumbers && 
                    pageNumbers.map(number => (
                        <button className={styles.button} key={number + Math.random} onClick={() => paginado(number)}>{number}</button>
                ))
            }
        </>
    )

}