import React from 'react'
import { Container, Card, Button, SectionTitle } from '../components'
import { locationInfo, contactInfo } from '../data/mockData'

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-20">
      <Container>
        <SectionTitle
          badge="Visit Us"
          title="มาเยี่ยมชมฟาร์ม"
          subtitle="Location & Contact"
        />

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Map Placeholder */}
          <Card padding="sm" className="overflow-hidden">
            <div className="h-64 lg:h-full min-h-[300px] bg-gradient-to-br from-primary-50 via-surface-2 to-accent/10 rounded-xl flex flex-col items-center justify-center relative">
              {/* Map Grid Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-border" />
                  ))}
                </div>
              </div>
              
              {/* Pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-soft-lg mb-4">
                  <span className="material-symbols-outlined text-white text-[32px]">location_on</span>
                </div>
                <span className="font-semibold text-text font-thai">Wittaya Farm</span>
                <span className="text-sm text-muted">แผนที่จะแสดงที่นี่</span>
              </div>
            </div>
          </Card>

          {/* Info Card */}
          <div className="space-y-6">
            {/* Address */}
            <Card>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex-shrink-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">home_pin</span>
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-1 font-thai">ที่อยู่</h4>
                  <p className="text-muted font-thai">{locationInfo.address}</p>
                </div>
              </div>
            </Card>

            {/* Hours */}
            <Card>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex-shrink-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-1 font-thai">เวลาเปิดให้เยี่ยมชม</h4>
                  <p className="text-muted font-thai">{locationInfo.hours}</p>
                </div>
              </div>
            </Card>

            {/* Note */}
            <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-xl flex-shrink-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-amber-600 dark:text-amber-400">info</span>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-1 font-thai">หมายเหตุ</h4>
                  <p className="text-amber-700 dark:text-amber-400 font-thai">{locationInfo.note}</p>
                </div>
              </div>
            </Card>

            {/* Contact Info */}
            <Card id="contact">
              <h4 className="font-semibold text-text mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">contact_mail</span>
                <span className="font-thai">ติดต่อเรา</span>
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="material-symbols-outlined text-muted text-[18px]">location_city</span>
                  <span className="text-muted font-thai">{contactInfo.province}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="material-symbols-outlined text-muted text-[18px]">mail</span>
                  <a href={`mailto:${contactInfo.email}`} className="text-primary hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="material-symbols-outlined text-muted text-[18px]">phone</span>
                  <a href={`tel:${contactInfo.phone}`} className="text-primary hover:underline">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </Card>

            {/* CTA Button */}
            <Button 
              href={locationInfo.mapLink}
              variant="primary" 
              className="w-full"
              icon="directions"
            >
              <span className="font-thai">ดูเส้นทาง</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
