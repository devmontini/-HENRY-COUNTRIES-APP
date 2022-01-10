import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return(
        <div>

            {/*/////////////// LANDING /////////////// */}

            <img src="https://thumbs.dreamstime.com/z/banderas-de-diferentes-pa%C3%ADses-del-mundo-con-los-nombres-en-desarrollo-171911236.jpg" alt="" width="350px" height="350"/>
            <h1>PI COUNTRIES</h1>
            <Link to='/home'>
                <button>Enterar</button>
            </Link>

        </div>
    )
}
