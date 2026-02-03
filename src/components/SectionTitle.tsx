import React from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
  description?: string
  align?: 'left' | 'center'
  badge?: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  description,
  align = 'center',
  badge,
}) => {
  const alignClasses = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`mb-12 ${alignClasses}`}>
      {badge && (
        <span className="inline-block mb-4 px-3 py-1.5 text-xs font-medium tracking-wide uppercase bg-primary-50 text-primary rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold text-text mb-3 font-thai">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted mb-2">{subtitle}</p>
      )}
      {description && (
        <p className="text-base text-muted max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  )
}
