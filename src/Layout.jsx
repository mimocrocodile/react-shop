import { Outlet, Link } from 'react-router-dom'
import App from './App'
import { Header } from './components/elements/Header'
import { Main } from './components/elements/MainPage'
function Layout() {
    return (
        <>
        <Header />
        {/* <Main/> */}
        <Outlet />


        </>
    )
}

export {Layout}


