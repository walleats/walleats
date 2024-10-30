import React, { useState } from 'react';
import { NavItem } from './NavItem';

interface NavBarProps {
  navItems: { iconActive: string; iconInactive: string }[];
}

export const NavBar: React.FC<NavBarProps> = ({ navItems }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex w-[full] justify-around bg-background-400 p-4">
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
