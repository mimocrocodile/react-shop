import { Outlet, Link } from 'react-router-dom'
import App from './App'

function Layout() {
    return (
        <>
        <header>
            <div className="header-top">
                <div className="header-main">
                    <div className="header-links">
                        <Link to="/about">О компании</Link>
                        <Link to="/news">Новости</Link>
                        <Link to="/address">Адреса магазинов</Link>
                        <Link to="/contacts">Контакты</Link>
                    </div>
                    <button className="header-enter">Вход</button>
                    <Link to="/register" className="header-register">Регистрация</Link>
                </div>
            </div>
            <div className="header-main">
                <Link to="/">Home</Link>
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


