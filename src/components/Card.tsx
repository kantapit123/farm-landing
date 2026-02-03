import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
  id?: string
}

const paddingClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
  id,
}) => {
  return (
    <div
      id={id}
      className={`
        bg-surface
        border border-border
        rounded-2xl
        shadow-soft
        ${paddingClasses[padding]}
        ${hover ? 'card-hover' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
