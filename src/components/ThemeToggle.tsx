import React, { useEffect, useState } from 'react'

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Default: light theme. Only use dark if user explicitly chose it (stored in localStorage).
    const stored = localStorage.getItem('theme')
    const shouldBeDark = stored === 'dark'
    setIsDark(shouldBeDark)

    if (shouldBeDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    
    if (newIsDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="
        p-2.5 rounded-xl
        bg-surface-2 border border-border
        text-muted hover:text-primary
        hover:border-primary hover:bg-primary-50
        transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
      "
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="material-symbols-outlined text-[20px]">
        {isDark ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  )
}
