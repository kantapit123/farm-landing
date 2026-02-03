import React from 'react'
import {
  Navbar,
  Hero,
  DataWidget,
  Roadmap,
  Founder,
  Values,
  Journal,
  TechShowcase,
  Preview,
  Location,
  Footer,
} from './sections'
import { Divider } from './components'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section with Vision */}
        <Hero />

        {/* Real-time Data Widget */}
        <DataWidget />

        <Divider />

        {/* Progress / Roadmap */}
        <Roadmap />

        <Divider />

        {/* Founder Story */}
        <Founder />

        {/* Value Pillars */}
        <Values />

        <Divider />

        {/* Journal / Blog */}
        <Journal />

        {/* Tech Showcase */}
        <TechShowcase />

        <Divider />

        {/* Product Preview */}
        <Preview />

        {/* Location */}
        <Location />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
