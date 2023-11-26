// components/MenuGrid.tsx
import MenuItem, { MenuItemProps } from './MenuItem';

interface MenuGridProps {
  menuItems: MenuItemProps[];
}

const MenuGrid: React.FC<MenuGridProps> = ({ menuItems }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {menuItems.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
};

export default MenuGrid;
