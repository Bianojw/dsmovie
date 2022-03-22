import { ReactComponent as GithubIcon } from 'assets/img/github.svg'
import './styles.css'

function Navbar() {

    return (
        <>
            <header>
                <nav className="container">
                    <div className="dsmovie-nav-content">
                        <h1>DSMovie</h1>
                        <a href="https://github.com/Bianojw">
                            <div className='dsmovie_contact-container'>
                                <GithubIcon />
                                <p className="dsmovie-contact-link">/devsuperior</p>
                            </div>
                        </a>
                    </div>
                </nav>
            </header>
            <h1>Página principal</h1>
        </>
    );
}
export default Navbar;