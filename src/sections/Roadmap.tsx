import React from 'react'
import { Container, Card, Badge, ProgressBar, SectionTitle } from '../components'
import { roadmapPhases } from '../data/mockData'

const statusConfig = {
  completed: { variant: 'success' as const, label: 'เสร็จแล้ว', iconColor: 'text-primary' },
  in_progress: { variant: 'warning' as const, label: 'กำลังทำ', iconColor: 'text-amber-500' },
  pending: { variant: 'default' as const, label: 'รอคิว', iconColor: 'text-muted' },
  future: { variant: 'info' as const, label: 'ในอนาคต', iconColor: 'text-blue-400' },
}

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20">
      <Container>
        <SectionTitle
          badge="Transparency"
          title="ความคืบหน้าของฟาร์ม"
          subtitle="Roadmap & Progress"
          description="เราเชื่อในความโปร่งใส นี่คือสิ่งที่เรากำลังทำและวางแผนไว้"
        />

        <div className="max-w-3xl mx-auto">
          <Card padding="lg">
            {/* Phase Indicator */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[28px]">flag</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text font-thai">
                    Phase {roadmapPhases.current} of {roadmapPhases.total}
                  </h3>
                  <p className="text-sm text-muted">เตรียมพื้นฐานและระบบหลัก</p>
                </div>
              </div>
              <Badge variant="success" size="md">
                {roadmapPhases.progress}% Complete
              </Badge>
            </div>

            {/* Progress Bar */}
            <ProgressBar progress={roadmapPhases.progress} className="mb-10" />

            {/* Task List */}
            <div className="space-y-4">
              {roadmapPhases.tasks.map((task, index) => {
                const config = statusConfig[task.status]
                return (
                  <div
                    key={task.id}
                    className={`
                      flex items-center gap-4 p-4 rounded-xl border transition-all
                      ${task.status === 'in_progress' 
                        ? 'bg-primary-50 border-primary/30' 
                        : 'bg-surface-2 border-border hover:border-primary/20'
                      }
                    `}
                  >
                    {/* Number */}
                    <div className={`
                      w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium
                      ${task.status === 'completed' 
                        ? 'bg-primary text-white' 
                        : task.status === 'in_progress'
                          ? 'bg-primary text-white'
                          : 'bg-surface border border-border text-muted'
                      }
                    `}>
                      {task.status === 'completed' ? (
                        <span className="material-symbols-outlined text-[18px]">check</span>
                      ) : (
                        index + 1
                      )}
                    </div>

                    {/* Icon */}
                    <span className={`material-symbols-outlined ${config.iconColor} text-[24px]`}>
                      {task.icon}
                    </span>

                    {/* Title */}
                    <span className={`
                      flex-1 font-medium font-thai
                      ${task.status === 'completed' ? 'text-muted line-through' : 'text-text'}
                    `}>
                      {task.title}
                    </span>

                    {/* Status Badge */}
                    <Badge variant={config.variant}>
                      {config.label}
                    </Badge>
                  </div>
                )
              })}
            </div>

            {/* Footer Note */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-start gap-3 text-sm text-muted">
                <span className="material-symbols-outlined text-[18px] mt-0.5">info</span>
                <p className="font-thai">
                  แผนงานอาจมีการปรับเปลี่ยนตามสถานการณ์จริง เราจะอัปเดตความคืบหน้าอย่างสม่ำเสมอ
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
