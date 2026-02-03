import React from 'react'
import { Container, SectionTitle } from '../components'
import { founderStory } from '../data/mockData'

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-20 bg-bg-soft relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <Container className="relative z-10">
        <SectionTitle
          badge="Story"
          title="เรื่องราวของผู้ก่อตั้ง"
          subtitle="Founder's Note"
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
            {/* Avatar Column */}
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
              {/* Premium Avatar Placeholder */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary-600 rounded-2xl opacity-90" />
                
                {/* Silhouette */}
                <div className="absolute inset-4 bg-surface rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-[80px] text-muted/30">person</span>
                </div>
                
                {/* Decorative Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/20" />
                
                {/* Corner Accent */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold rounded-lg" />
              </div>

              {/* Name & Role */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-text font-thai">{founderStory.name}</h3>
                <p className="text-sm text-muted mb-4">{founderStory.role}</p>
                
                {/* Quote */}
                <blockquote className="italic text-primary border-l-2 border-primary pl-4 text-sm font-thai">
                  {founderStory.quote}
                </blockquote>
              </div>
            </div>

            {/* Story Column */}
            <div className="md:col-span-3">
              <div className="space-y-6">
                {founderStory.story.map((paragraph, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center mt-1">
                      <span className="text-sm font-medium text-primary">{index + 1}</span>
                    </div>
                    <p className="text-muted leading-relaxed font-thai">{paragraph}</p>
                  </div>
                ))}
              </div>

              {/* Key Points */}
              <div className="mt-10 p-6 bg-surface border border-border rounded-2xl">
                <h4 className="font-semibold text-text mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">lightbulb</span>
                  <span className="font-thai">หลักการสำคัญ</span>
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: 'psychology', text: 'Product Mindset' },
                    { icon: 'sync', text: 'Continuous Improvement' },
                    { icon: 'data_object', text: 'Data-Informed Decisions' },
                    { icon: 'share', text: 'Scalable Knowledge' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm">
                      <span className="material-symbols-outlined text-accent text-[18px]">{item.icon}</span>
                      <span className="text-text">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
