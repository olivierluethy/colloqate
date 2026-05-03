import { Nav } from '@/components/nav'
import { HeroSection } from '@/components/hero-section'
import { ExclusivitySection } from '@/components/exclusivity-section'
import { ImpactSection } from '@/components/impact-section'
import { CourseSection } from '@/components/course-section'
import { EventsSection } from '@/components/events-section'
import { TestimonialSection } from '@/components/testimonial-section'
import { MindsetSection } from '@/components/mindset-section'
import { InsightsSection } from '@/components/insights-section'
import { CareersSection } from '@/components/careers-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { ScrollTracker } from '@/components/scroll-tracker'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollTracker />
      <Nav />
      <HeroSection />
      <ExclusivitySection />
      <ImpactSection />
      <CourseSection />
      <EventsSection />
      <TestimonialSection />
      <InsightsSection />
      <MindsetSection />
      <CareersSection />
      <CTASection />
      <Footer />
    </main>
  )
}
