import React, { useState, useEffect } from 'react'
import { Container, Button, ThemeToggle } from '../components'
import { navItems } from '../data/mockData'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled 
          ? 'bg-bg/95 backdrop-blur-md shadow-soft border-b border-border' 
          : 'bg-transparent'
        }
      `}
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2 text-xl font-semibold text-text hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-primary text-[28px]">eco</span>
            <span className="font-thai">Wittaya Farm</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.slice(0, 6).map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-3 py-2 text-sm text-muted hover:text-primary transition-colors rounded-lg hover:bg-primary-50"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="w-px h-4 bg-border mx-2" />
            {navItems.slice(6).map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-3 py-2 text-sm text-muted hover:text-primary transition-colors rounded-lg hover:bg-primary-50"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button 
              href="#location" 
              variant="primary" 
              size="sm"
              className="hidden sm:inline-flex"
            >
              <span className="font-thai">นัดหมายเยี่ยมชม</span>
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-muted hover:text-primary hover:bg-primary-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-4 py-3 text-muted hover:text-primary hover:bg-primary-50 rounded-lg transition-colors font-thai"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                    setIsMobileMenuOpen(false)
                  }}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 px-4">
                <Button href="#location" variant="primary" className="w-full font-thai">
                  นัดหมายเยี่ยมชม
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}
