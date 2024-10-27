import React from 'react';
import logoImage from 'src/assets/brand/100-ANYS-PRAT.jpg'; 

const Logo = () => {
  return (
    <img 
      src={logoImage} 
      alt="Logo" 
      height={32} // Ajusta la altura según lo necesites
      className="sidebar-brand-full" 
    />
  );
};

export default Logo;
