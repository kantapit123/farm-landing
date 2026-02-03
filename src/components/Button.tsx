import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
  className?: string
  icon?: string
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  icon,
  disabled = false,
}) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-medium rounded-xl
    transition-all duration-200
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `

  const variantClasses = {
    primary: `
      bg-primary text-white
      hover:bg-primary-600 hover:shadow-soft-md
      active:scale-[0.98]
    `,
    secondary: `
      bg-surface-2 text-text border border-border
      hover:bg-primary-50 hover:border-primary hover:text-primary
      active:scale-[0.98]
    `,
    ghost: `
      text-muted
      hover:text-primary hover:bg-primary-50
      active:scale-[0.98]
    `,
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        onClick={(e) => {
          if (href.startsWith('#')) {
            e.preventDefault()
            const element = document.querySelector(href)
            element?.scrollIntoView({ behavior: 'smooth' })
          }
          onClick?.()
        }}
      >
        {icon && <span className="material-symbols-outlined text-[20px]">{icon}</span>}
        {children}
      </a>
    )
  }

  return (
    <button 
      className={classes} 
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="material-symbols-outlined text-[20px]">{icon}</span>}
      {children}
    </button>
  )
}
