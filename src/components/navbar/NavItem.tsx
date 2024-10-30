import { Icon } from "../icon/Icon";

export interface NavItemProps {
  iconActive: string;
  iconInactive: string;
  state: 'active' | 'inactive';
}

export const NavItem: React.FC<NavItemProps> = ({ iconActive, iconInactive, state }) => {
  return (
    <div className={`flex items-center justify-center rounded-2xl w-11 h-11 ${state === 'active' ? 'bg-primary-600' : ''}`}>
      <Icon url={state === 'active' ? iconActive : iconInactive} altText="icon" size="medium" />
    </div>
  );
};