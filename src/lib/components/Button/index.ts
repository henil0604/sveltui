import { cva } from 'class-variance-authority';
import Button from './Button.svelte';

export const buttonConfig = cva(
    "w-fit h-fit inline-flex items-center justify-center gap-1 rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none ring-offset-background active:scale-[1.05]",
    {
        variants: {
            variant: {
                default:
                    "bg-surface text-surface-foreground hover:bg-surface/90",
                primary:
                    "bg-primary text-primary-foreground hover:bg-primary/90",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/90",
                tertiary:
                    "bg-tertiary text-tertiary-foreground hover:bg-tertiary/90",
                success:
                    "bg-success text-success-foreground hover:bg-success/90",
                warn:
                    "bg-warn text-warn-foreground hover:bg-warn/90",
                error:
                    "bg-error text-error-foreground hover:bg-error/90",
                dark: 'bg-black text-white hover:bg-black/90',
                'primary-outlined': 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-primary-foreground',
                'secondary-outlined': 'bg-transparent text-secondary border border-secondary hover:bg-secondary hover:text-secondary-foreground',
                'tertiary-outlined': 'bg-transparent text-tertiary border border-tertiary hover:bg-tertiary hover:text-tertiary-foreground',
                'success-outlined': 'bg-transparent text-success border border-success hover:bg-success hover:text-success-foreground',
                'warn-outlined': 'bg-transparent text-warn border border-warn hover:bg-warn hover:text-warn-foreground',
                'error-outlined': 'bg-transparent text-error border border-error hover:bg-error hover:text-error-foreground',
                'dark-outlined': 'bg-transparent text-black border border-black hover:bg-black hover:text-white',
                glassy: 'backdrop-blur-md bg-black/10 bg-black hover:bg-black/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20',
            },
            size: {
                xs: "px-1 py-0.5 text-xs",
                sm: "px-2 py-1 text-xs",
                default: "py-1.5 px-2 text-sm",
                lg: "px-4 py-2 text-lg",
                xl: "px-5 py-3 text-2xl"
            },
            rounded: {
                none: "rounded-none",
                sm: "rounded-sm",
                default: "rounded",
                md: 'rounded-md',
                lg: 'rounded-lg',
                xl: 'rounded-xl',
                full: 'rounded-full'
            }
        }
    }
);


export default Button;