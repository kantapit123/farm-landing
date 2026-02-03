import React from 'react'

interface IconProps {
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  filled?: boolean
  className?: string
}

const sizeClasses = {
  sm: 'text-[16px]',
  md: 'text-[20px]',
  lg: 'text-[24px]',
  xl: 'text-[32px]',
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  filled = false,
  className = '',
}) => {
  return (
    <span
      className={`
        material-symbols-outlined
        ${sizeClasses[size]}
        ${filled ? 'filled' : ''}
        ${className}
      `}
    >
      {name}
    </span>
  )
}
