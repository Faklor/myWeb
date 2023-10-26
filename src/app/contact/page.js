import './contact.scss'
import Header from '../moduls/header'


export default function Contact(){
    return(
        <main className='contact'>
            <div className='content'>
                <header>
                    <Header/>
                </header>
                <h1>Your contact information</h1>
                <input/>
                <input/>
                <input/>
                <input/>
                <h2>Tell me about your project?</h2>
                <textarea></textarea>
                <button>SUMBIT</button>

            </div>
        </main>
    )
}