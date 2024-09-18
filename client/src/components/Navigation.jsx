
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
   const routes = [
      {
        path: '/',
        name: 'Home',
      },
      {
        path: '/users',
        name: 'Users',
      },
    ];

   return (
      <nav>
         <ul>
            {routes.map((route, index) => (
               <li key={index}>
                  <Link to={route.path}>{route.name}</Link>
               </li>
            ))}
         </ul>
      </nav>
   );
}

