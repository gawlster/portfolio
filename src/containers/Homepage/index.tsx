import React from 'react'
import Avatar from './components/Avatar'
import Content from './components/Content'
import './index.scss'

const Homepage = () => {
    return (
        <div className="homepage">
            <Avatar />
            <Content />
        </div>
    )
}

export default Homepage