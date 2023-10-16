import Link from 'next/link'
import './about.scss'
import Image from 'next/image'

import Header from  '../moduls/header'
import My from '../res/my.png'

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
                            <h1>{'< '}Tech I use{' >'}</h1>
                            <div />
                        </div>

                        <div className='tech'>
                            <p className='name'>Frontend & UX/UI Design</p>
                            <div className='use'>
                                <div className='icon'>
                                    <Image src=''/>
                                    <p>React</p>
                                </div>
                            </div>
                            <p className='name'>Backend</p>
                            <p className='name'>Other</p>
                        </div>
                    </main>
                </div>
            </div>
        </main>
    )
}