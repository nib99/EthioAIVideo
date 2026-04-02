import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-orange-500 resize-y min-h-[120px]",
        className
      )}
      {...props}
    />
  );
}
