const getVariant = (variant?: VariantType) => {
    switch (variant) {
        case 'primary':
            return 'bg-kb-primary hover:bg-kb-secondary text-white';
        case 'success':
            return 'bg-kb-success-light hover:bg-kb-success-dark text-white';
        case 'danger':
            return 'bg-kb-error-light hover:bg-kb-error-dark text-white';
        case 'outline-primary':
            return 'bg-transparent border border-kb-primary hover:bg-kb-primary text-kb-primary hover:text-white';
        case 'outline-success':
            return 'bg-transparent border border-kb-success-light hover:bg-kb-success-light text-kb-success-light hover:text-white';
        case 'outline-danger':
            return 'bg-transparent border border-kb-error-light hover:bg-kb-error-light text-kb-error-light hover:text-white';
        default:
            return 'bg-violet-500 hover:bg-violet-700 text-white shadow shadow-violet-600/25 hover:shadow-violet-600/75';
    }
};

type VariantType = 'primary' | 'success' | 'danger' | 'outline-primary' | 'outline-success' | 'outline-danger';

type ButtonType = 'button' | 'submit' | 'reset';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode;
    variant?: VariantType;
    type?: ButtonType;
    ariaLabel: string;
}

export default function Button({ className, children, variant, type = 'button', ariaLabel, ...props }: IButtonProps) {
    return (
        <button
            {...props}
            type={type}
            aria-label={ariaLabel}
            className={`
          ${getVariant(variant)} transition py-2 px-4 rounded-md active:scale-95 ${className}`}>
            {children}
        </button>
    );
}
