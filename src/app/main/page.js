import './main.scss'
import Header from  '../moduls/header'
import Logo from '../res/logo.svg'

export default function Main(){
    return(
        <div className="main">
            <main className='content'>
                <header>
                    <Header/>
                </header>
                <div className='name'>
                    <Logo className='logo'/>
                    <h1>Alexey Romanovich</h1>
                    <h2>Web Developer</h2>
                    <p>The only criterion of truth is Experience<br/>and Education creates differences between people</p>
                    <div className='buttons'>
                        <button>About me</button>
                        <button>Contact</button>
                    </div>
                </div>
            </main>
        </div>
    )
}