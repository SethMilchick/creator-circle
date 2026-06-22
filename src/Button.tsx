import type { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  className: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  children,
  className,
  type,
  onClick,
}: ButtonProps) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
