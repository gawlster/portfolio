import React from 'react'
import './index.scss'
import Project from './components/Project'
import port from '../../images/website-thumbnail.jpg'
import rw from '../../images/route-weather-thumbnail.jpg'
import cf from '../../images/cocktail-website-thumbnail.jpg'

const Projects = () => {
    return (
        <div className='projects'>
            <h1>These are some projects I have been working on:</h1>
            <Project
                img={port}
                title='Portfolio'
                desc='A web app to showcase my works'
                tech={['HTML5', 'SCSS', 'JS']}
                liveLink='https://gawlster.github.io/portfolio'
                sourceLink='https://github.com/gawlster/portfolio'
            />

            <Project
                img={rw}
                title='Route Weather'
                desc='A web app to find weather along a route'
                tech={['ReactJS', 'SCSS', 'REST API']}
                liveLink='/'
                sourceLink='https://github.com/gawlster/route-weather'
            />

            <Project
                img={cf}
                title='Cocktail Finder'
                desc='A web app to find a perfect cocktail'
                tech={['HTML5', 'SCSS', 'JS']}
                liveLink='https://webhome.csc.uvic.ca/~connorgawley/project2'
                sourceLink='https://github.com/gawlster/cocktail-website'
            />
            <a href='https://github.com/gawlster' className='button'>
                More of my projects
            </a>
        </div>
    )
}

export default Projects
