import type { ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SearchPage from './pages/SearchPage'
import NotFoundPage from './pages/NotFoundPage'

const App = (): ReactElement => {
    return (
        <div className='container'>
            <main>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/search' element={<SearchPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
