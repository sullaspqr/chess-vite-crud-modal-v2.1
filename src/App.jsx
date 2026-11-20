import { Routes, Route, NavLink } from 'react-router-dom';
import { SakkLista } from './pages/SakkLista';
import { EgySakk } from './pages/EgySakk';
import { UjSakk } from './pages/UjSakk';
import { ModSakk } from './pages/ModSakk';
import { DelSakk } from './pages/DelSakk';
import './App.css'

export const App = () => {
  return (
    <>
    <nav className="d-flex gap-4 p-3 fs-3">
    <NavLink to="/" className="nav-link">
    <i className="bi bi-house-door-fill me-2"></i> Sakkozók
    </NavLink>
    <NavLink to="/new-chess" className="nav-link">
    <i className="bi bi-info-circle-fill me-2"></i> Új sakkozó
    </NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<SakkLista />} />
      <Route path="/chess/:chessId" element={<EgySakk />} />
      <Route path="/new-chess" element={<UjSakk />} />
      <Route path="/mod-chess/:chessId" element={<ModSakk />} />
      <Route path="/del-chess/:chessId" element={<DelSakk />} />
    </Routes>
    </>
  )
};
