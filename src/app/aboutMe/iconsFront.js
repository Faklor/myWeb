
//----------icons------------------------
import React from '../res/about/react.svg'
import Next from '../res/about/nextjs.svg'
import Js from '../res/about/js.svg'
import Vue from '../res/about/vue.svg'
import Css from '../res/about/css.svg'
import Scss from '../res/about/scss.svg'
import Html from '../res/about/html.svg'
import Figma from '../res/about/figma.svg'
//---------------------------------------

export default function IconsFront(){
    return(
        <div className='icon'>
            <div>
                <Js/>
                <p>JavaScript</p>
            </div>
            <div>
                <Css/>
                <p>Css</p>
            </div>
            <div>
                <Html/>
                <p>Html</p>
            </div>
            <div>
                <Scss/>
                <p>Sass</p>
            </div>
            <div>
                <React/>
                <p>React</p>
            </div>
            <div>
                <Next/>
                <p>NextJs</p>
            </div>
            <div>
                <Vue/>
                <p>Vue</p>
            </div>
            <div>
                <Figma/>
                <p>Figma</p>
            </div>
        </div>
    )
}