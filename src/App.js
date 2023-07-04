import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import ErrorPage from './Pages/Error/ErrorPage'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Lodgings from './Pages/Lodgings/Lodgings'

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/*" element={<ErrorPage />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/lodgings/:id" element={<Lodgings />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}
