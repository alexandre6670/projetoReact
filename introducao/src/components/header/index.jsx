import style from './header.module.css'
import img from "../header/img/logo-header.svg"
import cart from '../header/img/mini-cart.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className={style.header}>
          <div className={style.headerTop}>
          <img src={img} alt="logo"/>
            <nav>
                <input type="text" className='search' placeholder='pesquisar produto'/>
                {/* <a href="">barra de pesquisa</a> */}
                <a href="">Cadastre-se</a>
                <a href="">Entrar</a>
                <a href="" a><img src={cart} alt="" /></a>
                {/* <img src={cart} alt="" /> */}
            </nav>
          </div>

          <div className={style.headerbottom}>

            <Link to='/Home'>Home</Link>
            <Link to='/Home'>Produtos</Link>
            <Link to='/Home'>Categorias</Link>
            <Link to='/Home'>Meus pedidos</Link>
            <Link to='/Login'>Login</Link>
            
          </div>

        </header>
    )
}

export default Header