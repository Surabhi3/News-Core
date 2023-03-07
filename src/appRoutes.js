import { Routes, Route } from 'react-router-dom';
import Business from './components/headlines/business';
import Entertainment from './components/headlines/entertainment';
import Health from './components/headlines/health';
import Home from './components/headlines/home';
import Science from './components/headlines/science';
import Sports from './components/headlines/sports';
import Technology from './components/headlines/technology';
export default function AppRoutes() {
    return (
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/business' element={<Business />} />
            <Route path='/entertainment' element={<Entertainment />} />
            <Route path='/health' element={<Health />} />
            <Route path='/science' element={<Science />} />
            <Route path='/sports' element={<Sports />} />
            <Route path='/technology' element={<Technology />} />
        </Routes>
    )

}