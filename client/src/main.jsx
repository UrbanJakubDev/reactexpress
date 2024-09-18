import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx'; // Navigation component
import './index.css';
import Home from './pages/Home.jsx';
import Users from './pages/Users.jsx';

const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
  },
  {
    path: '/users',
    name: 'Users',
    element: <Users />,
  },
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* Add the navigation from components/Navigation */}
      <Navigation />

      {/* Add the routes dynamically from the src/routes.js */}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
