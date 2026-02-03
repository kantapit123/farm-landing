import React from 'react'
import { Container, Card, Badge, Button, SectionTitle } from '../components'
import { productsPreview } from '../data/mockData'

export const Preview: React.FC = () => {
  return (
    <section id="preview" className="py-20 bg-bg-soft relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <Container className="relative z-10">
        <SectionTitle
          badge="Coming Soon"
          title="ผลิตภัณฑ์และประสบการณ์"
          subtitle="Experience Preview"
          description="สิ่งที่เรากำลังเตรียมให้คุณได้ลองสัมผัส"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsPreview.map((product) => (
            <Card key={product.id} hover className="text-center group relative">
              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Badge variant="gold" size="md" icon="schedule">
                  {product.status}
                </Badge>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-50 to-accent/10 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px] text-primary">
                  {product.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-text mb-2 font-thai">{product.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted font-thai">{product.description}</p>

              {/* Status */}
              <div className="mt-4">
                <Badge variant="default" size="sm">{product.status}</Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="secondary" icon="restaurant_menu">
            <span className="font-thai">ดูเมนูคาเฟ่ (เร็ว ๆ นี้)</span>
          </Button>
        </div>
      </Container>
    </section>
  )
}
