//----------icons------------------------
import Npm from '../res/about/npm.svg'
import Git from '../res/about/git.svg'
import GitHub from '../res/about/github.svg'


//---------------------------------------



export default function IconsOther(){
    return(
        <div className='icon'>
            <div>
                <Npm/>
                <p>npm</p>
            </div>
            <div>
                <Git/>
                <p>git</p>
            </div>
            <div>
                <GitHub/>
                <p>gitHub</p>
            </div>
        </div>
    )
}
