import React from 'react'
import Navbar from '../Navbar/Navbar.js'

export default function Layout({children}) {
    return (
        <>
        <div>
            <Navbar/>
            </div>
            <main>{children}</main>
        </>
    )
}
