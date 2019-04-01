import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks.js'
import SignedOutLinks from './SignedOutLinks.js'
import {connect} from 'react-redux'

const Navbar=  ()=>{
    return(
        <nav className="nav-wapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>

    )


}

const mapStateToProps = (state) =>{
        console.log(state)
    return{

    }
}

export default connect(mapStateToProps)(Navbar)