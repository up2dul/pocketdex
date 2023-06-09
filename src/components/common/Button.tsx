import { forwardRef, type PropsWithChildren } from 'react';
import { type ClassValue } from 'clsx';

import { cn } from '@/lib/utils';

type ButtonProps = Partial<
  PropsWithChildren<{
    type: 'button' | 'submit';
    isWFull: boolean;
    className: ClassValue;
    onClick: () => void;
  }>
>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', isWFull = false, className, onClick, children }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        'py-2 px-3 bg-primary',
        'text-light font-medium rounded-md',
        'hover:bg-primary/80 transition-colors',
        isWFull && 'w-full',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  ),
);

Button.displayName = 'Button';

export default Button;
