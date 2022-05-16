import React from 'react'
import './App.scss'
import Homepage from './containers/Homepage'
import Projects from './containers/Projects'
import About from './containers/About'
import Contact from './containers/Contact'

function App() {
    return (
        <div className='App'>
            <Homepage />
            <Projects />
            <About />
            <Contact />
        </div>
    )
}

export default App
