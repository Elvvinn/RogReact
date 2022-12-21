import React from 'react'
import './style.scss'
export default function Footer() {
    return (
        <footer>

            <div className='generalupfooterdiv'>

                <div className='leftsideupfooter'>
                    <a href='#'>ABOUT ROG  &nbsp; </a>
                    <a href='#' >HOME &nbsp; </a>
                    <a href='#'>NEWSROOM &nbsp; </a>
                    <a href='#'>ACCESSIBILITY &nbsp; </a>
                </div>

                <div className='rightsideupfooter'>
                    <i class="fa-brands fa-facebook-f">&nbsp;</i>
                    <i class="fa-brands fa-twitter">&nbsp;</i>
                    <i class="fa-brands fa-discord">&nbsp;</i>
                    <i class="fa-brands fa-youtube">&nbsp;</i>
                    <i class="fa-brands fa-twitch">&nbsp;</i>
                    <i class="fa-brands fa-instagram">&nbsp;</i>
                </div>

            </div>
            <hr className='eyc'></hr>
            <div className='generaldownfooterdiv'>

                <div className='lefttsidedownfooter'>
                    <i class="fa-solid fa-globe"></i>
                    <h5>Global/English</h5>
                </div>

                <div className='rightsidedownfooter'>
                    <a> TERMS OF USE NOTICE</a>
                    <a> PRIVACY POLICY
                    </a>
                    <a> ©ASUSTEK COMPUTER INC. ALL RIGHTS RESERVED. </a>
                </div>

            </div>

        </footer>
    )
}
