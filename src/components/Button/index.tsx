import classNames from 'classnames';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: ReactNode;
  onClick?: () => void;
}

function Button({ label, icon, onClick, ...props }: ButtonType) {
  return (
    <button
      onClick={onClick && onClick}
      {...props}
      className={classNames(
        'bg-blue-600 text-white h-10 flex items-center px-5 rounded gap-1',
        {
          [props.className as string]: props.className,
        }
      )}
    >
      <span className="text-xl">{icon}</span>
      {label}
    </button>
  );
}
export { Button };
