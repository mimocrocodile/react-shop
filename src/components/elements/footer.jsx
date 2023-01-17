import { Link } from "react-router-dom"
function Footer(){
    return(
       <footer className="footer">
            <div className="footer-top">
                <div className="footer-links">
                    <p className="footer-title">Компания</p>
                    <Link>Наши марки</Link>
                    <Link>Партнеры</Link>
                    <Link>Как стать поставщиком</Link>
                    <Link>Развитие сети</Link>
                    <Link>Наши вакансии</Link>
                    <Link>Контакты</Link>
                </div>
                <div className="footer-links">
                    <p className="footer-title">МАГАЗИН</p>
                    <Link>Как заказать</Link>
                    <Link>Доставка и самовывоз</Link>
                    <Link>Клиентская поддержка</Link>
                    <Link>Правила продажи</Link>
                    <Link>Акции и скидки</Link>
                    <Link>Вопросы и ответы</Link>
                </div>
                <div className="footer-links">
                    <p className="footer-title">УСЛУГИ</p>
                    <Link>Доставка</Link>
                    <Link>Самовывоз товара</Link>
                    <Link>Возврат товара</Link>
                    <Link>Кредит</Link>
                    <Link>Установка и ремонт</Link>
                    <Link>Сервисный центр</Link>
                </div>
            </div>
       </footer>
    )
}


export {Footer}