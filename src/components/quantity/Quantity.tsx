export interface QuantityProps {
  value: number;
  add: () => void;
  subtract: () => void;
  size?: 'default' | 'small';
  state?: 'default' | 'add-disabled' | 'subtract-disabled';
}

export const Quantity: React.FC<QuantityProps> = ({ value, add, subtract, size = 'default', state = 'default' }) => {
  const sizeStyles = {
    small: 'h-[44px]',
    default: 'h-[60px]',
  };

  const baseStyle = 'flex items-center justify-between gap-2 bg-neutral-50 rounded-md p-1 w-[127px] border border-text-500';
  const buttonDisabledStyle = 'text-text-400';
  const buttonEnabledStyle = 'text-text-500';

  return (
    <div className={`${baseStyle} ${sizeStyles[size]}`}>
      <button
        onClick={subtract}
        disabled={state === 'subtract-disabled'}
        className={`flex items-center justify-center w-8 h-8 rounded-md text-h5 font-bold ${state === 'subtract-disabled' ? buttonDisabledStyle : buttonEnabledStyle}`}
      >
        -
      </button>
      <span className="text-text-500 text-h5 font-bold">{value}</span>
      <button
        onClick={add}
        disabled={state === 'add-disabled'}
        className={`flex items-center justify-center w-8 h-8 rounded-md text-h5 font-bold ${state === 'add-disabled' ? buttonDisabledStyle : buttonEnabledStyle}`}
      >
        +
      </button>
    </div>
  );
};
