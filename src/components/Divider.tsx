import React from 'react'

interface DividerProps {
  className?: string
}

export const Divider: React.FC<DividerProps> = ({ className = '' }) => {
  return (
    <div className={`w-full py-12 ${className}`}>
      <div className="separator w-full max-w-md mx-auto" />
    </div>
  )
}
