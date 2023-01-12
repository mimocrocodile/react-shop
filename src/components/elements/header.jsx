import { CustomForm } from '../UI/form/CustomForm'
import { Link } from 'react-router-dom'
function Header() {
    return (
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
                <CustomForm />
                <div className="call">
                    <p>(1234) 56-78-90</p>
                    <a href="tel:+1234567890">Заказать звонок</a>
                </div>
                <div className='link-icons'>
                    <Link to="/favourite" className='favourite-link' />
                    <Link to="/cart" className='cart-link' />
                </div>
            </div>
            <div className="header-bottom">
                <button className='catalog-btn'>Каталог</button>
                <div>
                    <Link to="/hot-offer">Горячие предложения</Link>
                    <Link to="/new">Новинки</Link>
                    <Link to="/sell-out">Распродажа</Link>
                    <Link to="/promotion">Акции</Link>
                    <Link to="/discount">Скидки</Link>
                    <Link to="/bonus-card">Бонусная карта</Link>
                </div>

            </div>
        </header>
    )
}


export { Header }