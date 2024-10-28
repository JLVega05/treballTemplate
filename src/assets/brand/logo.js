import React from 'react';
import logoImage from 'src/assets/brand/100-ANYS-PRAT.jpg'; 

const Logo = () => {
  return (
    <img 
      src={logoImage} 
      alt="Logo" 
      height={32} 
      className="sidebar-brand-full" 
    />
  );
};

export default Logo;
