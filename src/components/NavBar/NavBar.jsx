import React from 'react';

import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
  const barra = [
    { id: 1, name: 'Home' },
    { id: 1, name: 'Nosotros' },
    { id: 1, name: 'Productos' },
  ];

  return (
    <div>
      <nav className='Nav'>
        {barra.map((cat, index) => {
          return (<a href='#' key={index}>
            {cat.name}
          </a>
          );
        })}

      </nav>


      <CartWidget />


    </div>
  );
};

export default NavBar;