import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'info' | 'gold'
  size?: 'sm' | 'md'
  icon?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  icon,
}) => {
  const variantClasses = {
    default: 'bg-surface-2 text-muted border-border',
    success: 'bg-primary-50 text-primary border-primary/20',
    warning: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800',
    info: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800',
    gold: 'bg-amber-50 text-gold border-gold/20 dark:bg-amber-900/20',
  }

  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  }

  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        font-medium
        rounded-full
        border
        ${variantClasses[variant]}
        ${sizeClasses[size]}
      `}
    >
      {icon && <span className="material-symbols-outlined text-[14px]">{icon}</span>}
      {children}
    </span>
  )
}
