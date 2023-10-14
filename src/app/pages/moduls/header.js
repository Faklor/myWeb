'use client'
import './header.scss'
import Image from 'next/image'

//-----------icons-------------------
//------------nav------------
import Main from '../../res/icons/main.svg'
import Profile from '../../res/icons/profile.svg'
import Send from '../../res/icons/send.svg'
//--------------------------
//------------social--------
import Telegram from '../../res/icons/telegram.svg'
import Facebook from '../../res/icons/facebook.svg'
import Github from '../../res/icons/github.svg'
import Linkedin from '../../res/icons/linkedin.svg'
import { useEffect } from 'react'
//--------------------------
//-----------------------------------

export default function Header(){
    useEffect(()=>{
        document.querySelector('.nav').style.opacity = '1'

        
    })

    return(
        <nav className='nav'>
            <div>
                <Main/>
                <Profile/>
                <Send/>
            </div>
            <div>
                <Telegram/>
                <Facebook/>
                <Github/>
                <Linkedin/>
            </div>
        </nav>
    )
}