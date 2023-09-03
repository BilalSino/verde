import classNames from 'classnames';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonLinkType extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  icon: ReactNode;
  link: string;
}

function ButtonLink({ label, icon, link, ...props }: ButtonLinkType) {
  return (
    <Link
      to={link}
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
    </Link>
  );
}
export { ButtonLink };
