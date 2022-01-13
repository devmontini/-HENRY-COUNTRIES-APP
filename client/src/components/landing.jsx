import React from 'react'
import { Link } from 'react-router-dom'

import styles from './modules/landing.module.css'

export default function LandingPage() {
    return(
        <div name="landing" className={styles.container}>

            {/*/////////////// LANDING /////////////// */}
            <div className={styles.image}></div>
            <h1 className={styles.title}>PI COUNTRIES</h1>
            <Link to='/home'>
                <button className={styles.button}>entrar</button>
            </Link>
            <h6 className={styles.name}>by FM</h6>        
        </div>
    )
}
