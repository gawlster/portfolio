import React from 'react'
import './index.scss'
import Card from './components/Card'

const About = () => {
    const hockeyDesc = `In my free time while I'm not coding, my favorite thing to do is play hockey. I have played since I was 4 years old, and still love it to this day. I played Tier 1 hockey in Calgary growing up, and now I play Juvenile hockey in Victoria to keep me busy. I also play summer hockey twice a week in Calgary with some friends.
                        In addition, I was a referee for 5 years from 2015 to 2020. I really enjoyed the extra opportunity to get on the ice and I loved seeing the younger players grow and improve like I did at their age.`

    const vgDesc = `When I'm not playing hockey, I love to play video games. I think it is a great way to catch up with friends, and just have a great time. Recently I have been playing a lot of Apex Legends and Brawlhalla.`

    return (
        <div className='about'>
            <h1 className='header'>About Me</h1>
            <div className='container'>
                <Card
                    category={0}
                    interests={[
                        {
                            title: 'HOCKEY',
                            desc: hockeyDesc,
                        },
                        {
                            title: 'VIDEO GAMES',
                            desc: vgDesc,
                        },
                    ]}
                />
                <Card
                    category={1}
                    work={[
                        {
                            title: 'CASHIER',
                            subtitle: 'LIQUOR EXPRESS | 2021-2022',
                            desc: [
                                'Worked as part of a small team at Liquor Express in Saanichton to maintain customer relations, proffesionalism and cleanliness of the store.',
                                'Complete monthly inventory counts to keep track of our product and detect and prevent theft.',
                                'Operate the POS System and count and report floats at the start and end of the day.',
                            ],
                        },
                        {
                            title: 'LINE COOK',
                            subtitle: 'ORIGINAL JOES | 2021-2021',
                            desc: [
                                'Worked efficiently with a team of chefs to complete orders quickly and correctly.',
                                'Maitained cleanliness of the kitchen throughout the night and when closing.',
                                'Washed dishes in the dish pit when needed.',
                            ],
                        },
                        {
                            title: 'TEAM MEMBER',
                            subtitle: 'CINEPLEX | 2019-2020',
                            desc: [
                                'Served food to customers in the concession.',
                                'Ensured theatres and lobbies remained clean and sanitary.',
                                'Facilitated the sale of XSCAPE Play Cards',
                                'Worked efficiently with a POS System to ensure customers were helped in a timely manner.',
                            ],
                        },
                    ]}
                />
                <Card
                    category={2}
                    techSkills={[
                        'HTML5',
                        'CSS3 / SASS',
                        'JavaScriptES6 / jQuery',
                        'TypeScript',
                        'ReactJS / ReactTS',
                        'NodeJS / Express',
                        'REST API',
                        'Python',
                        'Java',
                        'C',
                        'OOP',
                    ]}
                />
                <Card
                    category={3}
                    softSkills={[
                        'Time Management',
                        'Attention To Detail',
                        'Positive Attitude',
                        'Team Player',
                        'Problem Solving Skills',
                        'Excellent Communication',
                        'Creative Thinking',
                        'Great Organizational Skills',
                    ]}
                />
            </div>
        </div>
    )
}

export default About
