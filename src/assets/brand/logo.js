import React from 'react';
import logoImage from 'src/assets/brand/100-ANYS-PRAT.jpg'; // Cambia la ruta a tu archivo PNG

const Logo = () => {
  return (
    <img 
      src={logoImage} 
      alt="Logo" 
      height={32} // Ajusta la altura según lo necesites
      className="sidebar-brand-full" // Aplica tus clases CSS aquí si es necesario
    />
  );
};

export default Logo;
