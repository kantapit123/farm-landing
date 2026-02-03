import React from 'react'
import { Container, Card, SectionTitle } from '../components'
import { valuePillars } from '../data/mockData'

export const Values: React.FC = () => {
  return (
    <section id="values" className="py-20">
      <Container>
        <SectionTitle
          badge="Principles"
          title="สิ่งที่เราให้ความสำคัญ"
          subtitle="Our Values"
          description="หลักการที่ขับเคลื่อน Wittaya Farm"
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {valuePillars.map((pillar) => (
            <Card key={pillar.id} hover padding="lg" className="text-center group">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-primary-50 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-[32px] text-primary group-hover:text-white transition-colors">
                  {pillar.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-text mb-2">{pillar.title}</h3>
              
              {/* Subtitle (Thai) */}
              <p className="text-primary font-medium mb-4 font-thai">{pillar.subtitle}</p>
              
              {/* Description */}
              <p className="text-sm text-muted leading-relaxed font-thai">{pillar.description}</p>

              {/* Decorative Line */}
              <div className="mt-6 w-12 h-1 mx-auto bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
