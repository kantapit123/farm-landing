import React, { useState, useEffect } from 'react'
import { Container, Card, Badge } from '../components'
import { farmData } from '../data/mockData'

export const DataWidget: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(farmData)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  const handleRefresh = () => {
    setIsLoading(true)
    setTimeout(() => {
      // Simulate slightly different data
      setData({
        ...farmData,
        humidity: Math.floor(Math.random() * 10) + 65,
        temperature: Math.floor(Math.random() * 3) + 28,
      })
      setIsLoading(false)
    }, 1200)
  }

  const dataItems = [
    {
      icon: 'humidity_percentage',
      label: 'ความชื้นแปลง',
      value: `${data.humidity}%`,
      color: 'text-blue-500',
    },
    {
      icon: 'thermostat',
      label: 'อุณหภูมิ',
      value: `${data.temperature}°C`,
      color: 'text-orange-500',
    },
    {
      icon: 'light_mode',
      label: 'สภาพแสง',
      value: data.lightStatus,
      color: 'text-amber-500',
    },
    {
      icon: 'info',
      label: 'สถานะฟาร์ม',
      value: data.farmStatus,
      color: 'text-primary',
    },
  ]

  return (
    <section id="live-data" className="py-20 bg-bg-soft">
      <Container size="md">
        <Card className="relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">sensors</span>
                </div>
                <div>
                  <h3 className="font-semibold text-text font-thai">Real-time Data</h3>
                  <p className="text-sm text-muted">ข้อมูลสดจากฟาร์ม</p>
                </div>
              </div>
              
              <button
                onClick={handleRefresh}
                disabled={isLoading}
                className="p-2 rounded-lg text-muted hover:text-primary hover:bg-primary-50 transition-colors disabled:opacity-50"
                aria-label="Refresh data"
              >
                <span className={`material-symbols-outlined ${isLoading ? 'animate-spin' : ''}`}>
                  refresh
                </span>
              </button>
            </div>

            {/* Data Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {dataItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-bg-soft border border-border rounded-xl p-4 transition-all hover:border-primary/30"
                >
                  {isLoading ? (
                    <>
                      <div className="skeleton h-5 w-5 rounded mb-3" />
                      <div className="skeleton h-8 w-16 rounded mb-2" />
                      <div className="skeleton h-4 w-20 rounded" />
                    </>
                  ) : (
                    <>
                      <span className={`material-symbols-outlined ${item.color} text-[20px]`}>
                        {item.icon}
                      </span>
                      <div className="text-2xl font-bold text-text mt-2 font-thai">{item.value}</div>
                      <div className="text-sm text-muted font-thai">{item.label}</div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                {isLoading ? (
                  <div className="skeleton h-4 w-24 rounded" />
                ) : (
                  <>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-muted">อัปเดตล่าสุด: {data.lastUpdate}</span>
                  </>
                )}
              </div>
              <Badge variant="gold" icon="auto_awesome">
                Mock Data
              </Badge>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  )
}
