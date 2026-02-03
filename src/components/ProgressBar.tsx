import React from 'react'

interface ProgressBarProps {
  progress: number
  showLabel?: boolean
  size?: 'sm' | 'md'
  className?: string
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  showLabel = true,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
  }

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-muted">Progress</span>
          <span className="text-sm font-semibold text-primary">{progress}%</span>
        </div>
      )}
      <div className={`w-full bg-surface-2 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
