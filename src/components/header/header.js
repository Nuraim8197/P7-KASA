import '../header/header.css'
import LOGO from '../../assets/.LOGO.svg'
export default function Header(){
    return <div className='kasa-header'>
                <img className='logo' src={LOGO} alt="logo"></img>
            </div>
}

