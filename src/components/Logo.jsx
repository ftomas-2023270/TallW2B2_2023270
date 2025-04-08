import kinalLogo from '../assets/img/kinalLogo.jpeg';

export const Logo = ({text}) => {
    return (
        <div className='auth-form-logo-container'>
            <img src={kinalLogo} alt="Escudo Kinal" />
            <span>{text}</span>
        </div>
    )
}