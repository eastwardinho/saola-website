import Link from 'next/link'
import { type ReactNode, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
}

interface ButtonAsButton extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  href?: never
}

interface ButtonAsLink extends BaseButtonProps {
  href: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-brand-coral text-white hover:bg-brand-rust focus:ring-brand-coral',
  secondary: 'bg-brand-golden-yellow text-brand-charcoal hover:brightness-95 focus:ring-brand-golden-yellow',
  outline: 'border-2 border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white focus:ring-brand-charcoal',
  ghost: 'text-brand-charcoal hover:bg-brand-peach/30 focus:ring-brand-charcoal',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center font-normal transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={baseStyles}>
        {children}
      </Link>
    )
  }

  const { href, ...buttonProps } = props as ButtonAsButton
  return (
    <button className={baseStyles} {...buttonProps}>
      {children}
    </button>
  )
}
