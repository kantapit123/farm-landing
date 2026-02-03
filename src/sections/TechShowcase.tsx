import React from 'react'
import { Container, Card, Badge, Button, SectionTitle } from '../components'
import { techShowcase } from '../data/mockData'

export const TechShowcase: React.FC = () => {
  return (
    <section id="tech" className="py-20">
      <Container>
        <SectionTitle
          badge="Open Tech"
          title="เทคโนโลยีที่เราใช้"
          subtitle="Tech that stays close to nature."
          description="เราเชื่อในการแบ่งปันความรู้ ทั้งวิธีการปลูกและเทคโนโลยีที่ใช้"
        />

        {/* CTA Button */}
        <div className="text-center mb-12">
          <Button variant="secondary" icon="code">
            <span className="font-thai">ดู Tech Stack / Open Notes</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {techShowcase.map((tech) => (
            <Card key={tech.id} hover padding="lg" className="relative group">
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <Badge variant={tech.statusType}>{tech.status}</Badge>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 mb-6 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-[28px] text-primary group-hover:text-white transition-colors">
                  {tech.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-text mb-2 font-thai">{tech.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed font-thai">{tech.description}</p>

              {/* Tech Stack Hint */}
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span className="material-symbols-outlined text-[14px]">info</span>
                  <span>Open source approach</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-surface border border-border rounded-xl">
            <span className="material-symbols-outlined text-gold">auto_awesome</span>
            <p className="text-sm text-muted font-thai">
              เรากำลังเตรียมเอกสารและ Open Notes สำหรับแต่ละเทคโนโลยี เร็ว ๆ นี้
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
