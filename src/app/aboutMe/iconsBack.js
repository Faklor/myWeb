//----------icons------------------------
import Node from '../res/about/nodejs.svg'
import Express from '../res/about/express.svg'
import Mongo from '../res/about/mongodb.svg'
import Jwt from '../res/about/jwt.svg'

//---------------------------------------


export default function IconsBack(){
    return(
        <div className='icon'>
            <div>
                <Node/>
                <p>NodeJs</p>
            </div>
            <div>
                <Express/>
                <p>ExpressJs</p>
            </div>
            <div>
                <Mongo/>
                <p>MongoBD</p>
            </div>
            <div>
                <Jwt/>
                <p>JsonWebToken</p>
            </div>
        </div>
    )
}