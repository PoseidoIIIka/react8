import { NavLink } from 'react-router-dom'
import { Btn } from '../Btn/Btn'
import { Btn2 } from '../Btn/Btn2'
import s from './Header.module.css'
import logo from '../../assets/avtotorgLogo 1 (1).svg'

export function Header() {
    return(
        <header className={s.header}>
            <div className="container">
                <div className={s.header__inner}>
                    <nav className={s.nav}>
                        <NavLink to="/">О нас</NavLink>
                        <NavLink to="/catalog">Каталог</NavLink>
                        <NavLink to="/users">Пользователи</NavLink>
                    </nav>
                    <img src={logo} alt="" />   
                    <div className={s.btns}>
                        <Btn2/>
                        <Btn/>
                    </div>
                </div>
            </div>
        </header>
    )
}