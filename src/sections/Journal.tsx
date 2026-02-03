import React from 'react'
import { Container, Card, Button, SectionTitle, Badge } from '../components'
import { journalPosts } from '../data/mockData'

export const Journal: React.FC = () => {
  return (
    <section id="journal" className="py-20 bg-bg-soft">
      <Container>
        <SectionTitle
          badge="Blog"
          title="บันทึกจากฟาร์ม"
          subtitle="Farm Journal"
          description="เรื่องราว บทเรียน และการทดลองต่าง ๆ ที่เราอยากแบ่งปัน"
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {journalPosts.map((post) => (
            <Card key={post.id} hover className="group cursor-pointer">
              {/* Thumbnail Placeholder */}
              <div className="h-40 bg-gradient-to-br from-primary-50 to-surface-2 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                <span className="material-symbols-outlined text-[48px] text-primary/30">article</span>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-white text-[32px]">arrow_forward</span>
                </div>
              </div>

              {/* Date & Read Time */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-muted">{post.date}</span>
                <Badge variant="default" size="sm" icon="schedule">
                  {post.readTime}
                </Badge>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-text mb-2 group-hover:text-primary transition-colors font-thai line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-muted leading-relaxed font-thai line-clamp-3">
                {post.excerpt}
              </p>

              {/* Read More */}
              <div className="mt-4 flex items-center gap-2 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-thai">อ่านต่อ</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="secondary" icon="library_books">
            <span className="font-thai">อ่านบันทึกทั้งหมด</span>
          </Button>
        </div>
      </Container>
    </section>
  )
}
