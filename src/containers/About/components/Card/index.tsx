import React from 'react'
import './index.scss'

interface Props {
    category: 0 | 1 | 2 | 3
    interests?: Interest[]
    work?: Job[]
    techSkills?: string[]
    softSkills?: string[]
}
interface Interest {
    title: string
    desc: string
}
interface Job {
    title: string
    subtitle: string
    desc: string[]
}

const Card = (props: Props) => {
    function toWords(num: number) {
        switch (num) {
            case 0:
                return 'zero'
            case 1:
                return 'one'
            case 2:
                return 'two'
            case 3:
                return 'three'
        }
        return 'error'
    }

    if (props.category == 0) {
        // | INTERESTS |
        if (!props.interests) return <></>
        return (
            <div className='card'>
                <div className='front'>
                    <h2 className='title'>Interests</h2>
                </div>
                <div className='back interest'>
                    {props.interests &&
                        props.interests.length > 0 &&
                        props.interests.map((interest, index) => {
                            let classNameStr = toWords(index) + ' content'
                            return (
                                <div key={interest.title} className={classNameStr}>
                                    <h2 className='title'>{interest.title}</h2>
                                    <p className='desc'>{interest.desc}</p>
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
    if (props.category == 1) {
        // | WORK EXP |
        if (!props.work) return <></>
        return (
            <div className='card'>
                <div className='front'>
                    <h2 className='title'>Work Experience</h2>
                </div>
                <div className='back work'>
                    {props.work &&
                        props.work.length > 0 &&
                        props.work.map((job, index) => {
                            let classNameStr = toWords(index) + ' content'
                            return (
                                <div key={job.title} className={classNameStr}>
                                    <h2 className='title'>{job.title}</h2>
                                    <h3 className='subtitle'>{job.subtitle}</h3>
                                    {job.desc &&
                                        job.desc.length > 0 &&
                                        job.desc.map((point) => {
                                            return (
                                                <p key={point}>
                                                    {'🡒 '}
                                                    {point}
                                                </p>
                                            )
                                        })}
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
    if (props.category == 2) {
        // | TECH SKILLS |
        if (!props.techSkills) return <></>
        return (
            <div className='card'>
                <div className='front'>
                    <h2 className='title'>Technical Skills</h2>
                </div>
                <div className='back tech-skills'>
                    <ul>
                        {props.techSkills &&
                            props.techSkills.length > 0 &&
                            props.techSkills.map((skill) => {
                                return (
                                    <li key={skill}>
                                        {'✓ '}
                                        {skill}
                                    </li>
                                )
                            })}
                    </ul>
                </div>
            </div>
        )
    }
    if (props.category == 3) {
        // | SOFT SKILLS |
        if (!props.softSkills) return <></>
        return (
            <div className='card'>
                <div className='front'>
                    <h2 className='title'>Soft Skills</h2>
                </div>
                <div className='back soft-skills'>
                    <ul>
                        {props.softSkills &&
                            props.softSkills.length > 0 &&
                            props.softSkills.map((skill) => {
                                return (
                                    <li key={skill}>
                                        {'✓ '}
                                        {skill}
                                    </li>
                                )
                            })}
                    </ul>
                </div>
            </div>
        )
    }
    return <></>
}

export default Card
