import {ReactComponent as GitHubIcon} from 'assets/img/github.svg';
import './style.css';


function Navbar () {
    return (

    <header>
      <nav className="container">
        <div className="dsmovie-nav-container">
          <h1>DSMovie</h1>
          <a href="https://github.com/Caio-Amaro"></a>
          <div className="dsmovie-contact-container">
            <GitHubIcon />
            <p className="dsmovie-link">/Caio-Amaro</p>
          </div>
        </div>
      </nav>
    </header>

    );

}

export default Navbar;