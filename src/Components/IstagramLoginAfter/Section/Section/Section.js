import React from 'react'
import UsersLeft from '../UsersLeft/UsersLeft'
import UsersRight from '../UsersRight'
import './Section.css'

const Section = () => {
    return (
        <div className="section">
            <UsersLeft />
            <UsersRight />
        </div>
    )
}

export default Section
