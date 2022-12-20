import React from 'react'
import Footer from '../../Components/Footer'
import Mainslider from '../../Components/HomeComponents/Mainslider'
import Recent from '../../Components/HomeComponents/Recent'
import Republic from '../../Components/HomeComponents/Republic'
import Rogin from '../../Components/HomeComponents/Rogin'
import Slickslider from '../../Components/HomeComponents/Slickslider'
import Navbar from '../../Components/Navbar'

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <Mainslider></Mainslider>
            <Slickslider></Slickslider>
            <Recent></Recent>
            <Rogin></Rogin>
            <Republic></Republic>
            <Footer></Footer>
        </>
    )
}

