import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks.js'
import SignedOutLinks from './SignedOutLinks.js'
const Navbar=  ()=>{
    return(
        <nav className="nav-wapper grey darken-3">
            <div className="container"></div>
            <Link to='/' className="brand-logo">MarioPlan</Link>
            <SignedInLinks/>
            <SignedOutLinks/>
        </nav>

    )


}

export default Navbar