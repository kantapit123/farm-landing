import React from 'react'
import { Container, Button } from '../components'

export const Hero: React.FC = () => {
  return (
    <section id="vision" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Decorative SVG Leaves */}
      <svg className="absolute top-32 right-10 w-24 h-24 text-primary/10" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 5C50 5 80 20 85 50C90 80 50 95 50 95C50 95 10 80 15 50C20 20 50 5 50 5Z" />
      </svg>
      <svg className="absolute bottom-40 left-10 w-16 h-16 text-accent/10" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 5C50 5 80 20 85 50C90 80 50 95 50 95C50 95 10 80 15 50C20 20 50 5 50 5Z" />
      </svg>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
              <span className="text-sm font-medium text-primary">กำลังพัฒนา Phase 1</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6 font-thai">
              Wittaya Farm
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium text-muted mt-2">
                ฟาร์มเรียนรู้ที่เติบโตไปกับธรรมชาติ
              </span>
              <span className="block text-xl sm:text-2xl lg:text-3xl font-normal text-muted mt-1">
                และขับเคลื่อนด้วยเทคโนโลยีอย่างพอดี
              </span>
            </h1>

            {/* Supporting Line */}
            <p className="text-lg text-muted mb-8">
              Nature-first farming with thoughtful automation & community learning.
            </p>

            {/* 3 Core Concepts */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              {[
                { icon: 'nature', text: 'ปลูกอย่างเข้าใจธรรมชาติ' },
                { icon: 'monitoring', text: 'ดูแลด้วยข้อมูลที่พอดี' },
                { icon: 'groups', text: 'แบ่งปันความรู้เพื่อชุมชน' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-xl"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium text-text font-thai">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button href="#values" variant="primary" size="lg" icon="school">
                <span className="font-thai">ดูแนวทางการเรียนรู้</span>
              </Button>
              <Button href="#location" variant="secondary" size="lg" icon="location_on">
                <span className="font-thai">นัดหมายเยี่ยมชม</span>
              </Button>
            </div>
          </div>

          {/* Right Content - Farm Dashboard Mock */}
          <div className="relative">
            <div className="relative bg-surface border border-border rounded-2xl p-6 shadow-soft-lg">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">dashboard</span>
                  <span className="font-medium text-text">Farm Dashboard</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Active</span>
                </div>
              </div>

              {/* Dashboard Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Humidity Card */}
                <div className="bg-bg-soft border border-border rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-blue-500 text-[20px]">humidity_percentage</span>
                    <span className="text-xs text-muted">ความชื้น</span>
                  </div>
                  <div className="text-2xl font-bold text-text">68%</div>
                  <div className="w-full h-1.5 bg-surface-2 rounded-full mt-2">
                    <div className="h-full w-[68%] bg-blue-500 rounded-full" />
                  </div>
                </div>

                {/* Nutrient Card */}
                <div className="bg-bg-soft border border-border rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-green-500 text-[20px]">eco</span>
                    <span className="text-xs text-muted">สารอาหาร</span>
                  </div>
                  <div className="text-2xl font-bold text-text">ดี</div>
                  <div className="flex gap-1 mt-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex-1 h-1.5 bg-green-500 rounded-full" />
                    ))}
                    <div className="flex-1 h-1.5 bg-surface-2 rounded-full" />
                  </div>
                </div>

                {/* Light Cycle Card */}
                <div className="bg-bg-soft border border-border rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-amber-500 text-[20px]">light_mode</span>
                    <span className="text-xs text-muted">แสง</span>
                  </div>
                  <div className="text-2xl font-bold text-text">ปกติ</div>
                  <div className="text-xs text-muted mt-2">☀️ 06:00 - 18:00</div>
                </div>

                {/* Harvest Note Card */}
                <div className="bg-bg-soft border border-border rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">event_note</span>
                    <span className="text-xs text-muted">บันทึก</span>
                  </div>
                  <div className="text-sm font-medium text-text">เตรียมดิน</div>
                  <div className="text-xs text-muted mt-2">Phase 1 กำลังดำเนินการ</div>
                </div>
              </div>

              {/* Dashboard Footer */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                <span className="text-xs text-muted">อัปเดตล่าสุด: เมื่อสักครู่</span>
                <span className="text-xs text-primary font-medium">ดูข้อมูลทั้งหมด →</span>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-soft-md">
              Live Preview
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
