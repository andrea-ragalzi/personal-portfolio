import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './components/Navbar';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ContactsPage from './pages/ContactsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  )
}


