import './Footer.css'
import fbIcon from '../../assets/images/fb.png'
import igIcon from '../../assets/images/ig.png'
import twIcon from '../../assets/images/tw.png'
import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="socialMenu">
                <li><img src={fbIcon}></img></li>
                <li><img src={igIcon}></img></li>
                <li><img src={twIcon}></img></li>
            </ul>
            
            <img src={logo} className='logo'></img>

            <p>Desenvolvido por Joao Fiorini.</p>
        </footer>
    )
}

export default Footer
