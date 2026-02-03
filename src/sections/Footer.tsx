import React from 'react'
import { Container, Divider } from '../components'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Tech', href: '#tech' },
    { label: 'Journal', href: '#journal' },
    { label: 'Cafe', href: '#preview' },
    { label: 'Founder', href: '#founder' },
  ]

  const socialLinks = [
    { icon: 'facebook', href: '#', label: 'Facebook' },
    { icon: 'instagram', href: '#', label: 'Instagram' },
    { icon: 'youtube', href: '#', label: 'YouTube' },
    { icon: 'mail', href: '#', label: 'Email' },
  ]

  return (
    <footer className="bg-bg-soft border-t border-border">
      <Container>
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <a href="#" className="inline-flex items-center gap-2 text-xl font-semibold text-text mb-4">
                <span className="material-symbols-outlined text-primary text-[28px]">eco</span>
                <span className="font-thai">Wittaya Farm</span>
              </a>
              <p className="text-muted leading-relaxed mb-6 max-w-md">
                Nature-led learning, thoughtfully powered by tech.
                <br />
                <span className="font-thai">ฟาร์มเรียนรู้ที่เติบโตไปกับธรรมชาติ</span>
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-surface border border-border rounded-xl flex items-center justify-center text-muted hover:text-primary hover:border-primary hover:bg-primary-50 transition-all"
                    aria-label={social.label}
                  >
                    <span className="material-symbols-outlined text-[20px]">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-text mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted hover:text-primary transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-text mb-4 font-thai">ติดต่อ</h4>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">location_city</span>
                  <span className="font-thai">จังหวัด xxxxxx</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                  <a href="mailto:hello@wittayafarm.com" className="hover:text-primary">
                    hello@wittayafarm.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">phone</span>
                  <a href="tel:0xx-xxx-xxxx" className="hover:text-primary">
                    0xx-xxx-xxxx
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Divider className="!py-0" />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {currentYear} Wittaya Farm. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
