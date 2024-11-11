'use client'
import React, { useState } from 'react';
import { NavItem } from './NavItem';

interface NavBarProps {
  navItems: { iconActive: string; iconInactive: string }[];
}

export const NavBar: React.FC<NavBarProps> = ({ navItems }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-around bg-background-50 p-4 pb-8 shadow-[0_-4px_8px_rgba(0,0,0,0.1)]">
      {navItems.map((item, index) => (
        <div key={index} onClick={() => setSelectedIndex(index)}>
          <NavItem
            iconActive={item.iconActive}
            iconInactive={item.iconInactive}
            state={index === selectedIndex ? 'active' : 'inactive'}
          />
        </div>
      ))}
    </div>
  );
};
