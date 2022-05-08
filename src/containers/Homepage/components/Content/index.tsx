import React from 'react'
import './index.scss'

const Content = () => {
    return (
        <div className="content">
            <p className="top">
                Hello, world! I'm
            </p>
            <div className="name">
                <h1 className="first">CONNOR</h1>
                <h1 className="last">GAWLEY</h1>
            </div>
            <p className="bottom">A 3rd year Computer Science student at the</p>
            <p className="school"> University of Victoria </p>
            <p className="bottom2">with a passion for creating entertaining and engaging experiences on the web.</p>
        </div>
    )
}

export default Content