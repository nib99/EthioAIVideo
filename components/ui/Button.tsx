import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ className, variant = 'default', size = 'md', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "font-semibold rounded-2xl transition-all active:scale-95",
        variant === 'gradient' && "ethio-gradient text-white",
        size === 'lg' && "py-4 px-10 text-lg",
        className
      )}
      {...props}
    />
  );
}
