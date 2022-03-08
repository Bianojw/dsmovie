import {ReactComponent as GithubIcon} from './assets/img/github.svg'

function Navbar() {

        return (
          <>
          <header>
            <nav>
              <div>
                <h1>DSMovie</h1>
                <a href="https://github.com/Bianojw">
                  <div>
                      <GithubIcon />
                    <p>/devsuperior</p>
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