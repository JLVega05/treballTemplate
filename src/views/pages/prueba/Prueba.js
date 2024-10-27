import React from 'react';
import BaileVictoria from '../../../assets/images/gif/BaileVictoria.gif'; 

const Prueba = () => {
  return (
    <div>
      <h1>Página de prueba</h1>
      <p>Si estás leyendo esto es porque me ha salido bien el ejercicio, así que procederé con el baile de la victoria.</p>
      <img 
        src={BaileVictoria} 
        style={{ width: '100%', maxWidth: '500px' }} 
      />
    </div>
  );
};

export default Prueba;
