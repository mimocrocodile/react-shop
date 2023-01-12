import { Outlet, Link } from 'react-router-dom'
import App from './App'
import { Header } from './components/elements/header'

function Layout() {
    return (
        <>
        <Header/>
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


