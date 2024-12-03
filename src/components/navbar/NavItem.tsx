import { Icon } from "../icon/Icon";

export interface NavItemProps {
  iconActive: string;
  iconInactive: string;
  state: 'active' | 'inactive';
  label?: string; 
}

export const NavItem: React.FC<NavItemProps> = ({ iconActive, iconInactive, state, label }) => {
  const isActive = state === 'active';
  const iconColor = isActive ? 'text-primary-50' : 'text-neutral-600';

  return (
    <div
      className={`flex flex-col items-center justify-center space-y-1 rounded-2xl w-[50px] h-[50px] ${
        isActive ? 'bg-primary-600' : 'bg-transparent'
      }`}
    >
      <Icon
        icon={isActive ? iconActive : iconInactive}
        altText="icon"
        size="small"
      />

      {label && (
        <span
          className={`font-medium text-subtitle ${iconColor}`}
        >
          {label}
        </span>
      )}
    </div>
  );
};
