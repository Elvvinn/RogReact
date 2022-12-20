import React from 'react'
import './style.scss'
export default function Navbar() {
    return (

        <nav className='navoz'>

            <div className='divmain'>

                <h3 className='rep'> REPUBLIC OF GAMERS</h3>
                <div className='for_a'>
                    <ul>
                        <li> <a href='#'>PRODUCTS</a> </li>
                        <li> <a href='#'>INNOVATION</a> </li>
                        <li> <a href='#'>DOWNLOADS</a> </li>
                        <li> <a href='#'>COMMUNITY</a> </li>
                    </ul>
                </div>
                <div className='asusright'>
                    <p className='yoxolan'> ASUS </p>
                    <i class="fa-brands fa-searchengin"></i>
                    <i class="fa-solid fa-user"></i>
                </div>
            </div>
        </nav>

    )
}
