import Link from 'next/link'
import './about.scss'
import Image from 'next/image'

import Header from  '../moduls/header'
import IconsFront from './iconsFront'
import IconsBack from './iconsBack'
import IconsOther from './iconsOther'


import My from '../res/my.png'
import Education from '../res/education.svg'
import Tech from '../res/tech.svg'
import Exp from '../res/exp.svg'


export default function AboutMe(){
    return(
        <main className="aboutMe">
            <div className="content">
                <Header/>
                <div className='profile'>
                    <header>
                        <Image className='my' src={My} alt='Alexey Romanovich'></Image>
                        <div className='text'>
                            <h1>I’m Specialized in<br/>Frontend  Development</h1>
                            <p>Hi there, I'm a Frontend Developer with over 4 years of experience building scalable products. I like to code things from scratch, and enjoy bringing ideas to life in the browser. With my creativity, technical skills, and attention to detail, I'm confident I can help you find the best software solution for your needs.</p>
                        </div>
                    </header>
                    <main>
                        <div className='articl'>
                            <div />
                            <ul>
                                <li><Tech/></li>
                                <li>Tech</li>
                            </ul>
                            <div />
                        </div>

                        <div className='tech'>
                            <p className='name'>Frontend & UX/UI Design</p>
                            <IconsFront/>
                            <p className='name'>Backend</p>
                            <IconsBack/>
                            <p className='name'>Other</p>
                            <IconsOther/>
                        </div>

                        <div className='articl'>
                            <div />
                            <ul>
                                <li><Education/></li>
                                <li>Education</li>
                            </ul>
                            <div />
                        </div>

                        <div className='education'>
                            <p className='name'>College of Light Industry</p>
                            <ul>
                                <li>Speciality: IT / SoftWare</li>
                                <li>09/2017 - 07/2021</li>
                                <li>Effectively apply soft skills, communication skills, teamwork, technical problem presentation, report writing, workplace organization, problem solving skills.</li>
                                <li>Understanding of programming languages ( C # / PHP / JavaScript ), popular database management systems (Sql, NoSql, MySql, MongoDB).</li>
                            </ul>
                            <p className='name'>IT-Academy</p>
                            <ul>
                                <li>Speciality: React for development web-application </li>
                                <li>08/2023 - 12/2023</li>
                            </ul>
                        </div>

                        <div className='articl'>
                            <div />
                            <ul>
                                <li><Exp/></li>
                                <li>Experience</li>
                            </ul>
                            <div />
                        </div>
                        <div className='exp'>

                        </div>
                    </main>
                </div>
            </div>
        </main>
    )
}