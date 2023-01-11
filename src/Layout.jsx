import { Outlet, Link } from 'react-router-dom'
import App from './App'

import { CustomForm } from './components/UI/form/CustomForm'
function Layout() {
    return (
        <>
        <header>
            <div className="header-top">

                    <div className="header-links">
                        <Link to="/about">О компании</Link>
                        <Link to="/news">Новости</Link>
                        <Link to="/address">Адреса магазинов</Link>
                        <Link to="/contacts">Контакты</Link>
                    </div>
                    <button className="header-enter">Вход</button>
                    <Link to="/register" className="header-register">Регистрация</Link>
            </div>
            <div className="header-main">
                <Link className='home' to="/">React shop</Link>
                <CustomForm>

                </CustomForm>
                <div className="call">
                    <p>(1234) 56-78-90</p>
                    <a href="tel:+1234567890">Заказать звонок</a>
                </div>
                <div className='link-icons'>
                    <Link to="/favourite" className='favourite-link' />
                    <Link to="/cart" className='cart-link' />
                </div>
            </div>

        </header>
        <div className="header-second">
            <Link to="/new">New</Link>
        </div>
        <main className="block">
            <Outlet/>
        </main>

        </>
    )
}

export {Layout}


