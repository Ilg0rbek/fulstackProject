import { ExploreOutlined, FavoriteBorder, Home, Search, WhatshotOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="headerWidth">
            <div className="header">
                <div className="instaImg">
                    <img
                        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""
                    />
                </div>
                <div className="searchInput">
                    <Search />
                    <input
                        type="text"
                        placeholder='Search'
                    />
                </div>
                <div className="headerIcons">
                    <Home />
                    <WhatshotOutlined />
                    <ExploreOutlined />
                    <FavoriteBorder />
                    <Avatar src='' />
                </div>
            </div>
        </div>
    )
}

export default Header
