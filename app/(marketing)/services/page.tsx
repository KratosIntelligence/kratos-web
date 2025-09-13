import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Bot, MessageSquare, Mail, MapPin, Workflow, Send, Phone, Globe, Users } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Phone,
      title: 'AI Phone Receptionist',
      description: 'Intelligent call handling, appointment scheduling, and customer support available 24/7.',
      features: ['Call routing', 'Appointment booking', 'FAQ responses', 'Lead qualification'],
      href: '/services/ai-phone-receptionist',
      badge: 'Popular'
    },
    {
      icon: MessageSquare,
      title: 'Website Chat CRM',
      description: 'Convert website visitors into qualified leads with intelligent chat interactions.',
      features: ['Lead capture', 'Real-time chat', 'CRM integration', 'Analytics dashboard'],
      href: '/services/website-chat-crm',
      badge: 'New'
    },
    {
      icon: Mail,
      title: 'Email Positive Replies',
      description: 'Automated email responses that maintain your brand voice and drive engagement.',
      features: ['Smart replies', 'Brand consistency', 'Follow-up sequences', 'Performance tracking'],
      href: '/services/email-positive-replies'
    },
    {
      icon: MapPin,
      title: 'Maps Lead Engine',
      description: 'Generate high-quality local leads through intelligent map-based targeting.',
      features: ['Local targeting', 'Lead scoring', 'Geographic insights', 'Competitor analysis'],
      href: '/services/maps-lead-engine'
    },
    {
      icon: Workflow,
      title: 'Voiceflow Make',
      description: 'Create sophisticated conversational AI workflows without coding.',
      features: ['Visual builder', 'Multi-channel deployment', 'Analytics', 'Integrations'],
      href: '/services/voiceflow-make'
    },
    {
      icon: Send,
      title: 'Telegram Agent',
      description: 'Automated customer support and engagement through Telegram messaging.',
      features: ['Instant responses', 'Order tracking', 'Customer support', 'Broadcast messaging'],
      href: '/services/telegram-agent'
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
          <Badge variant="outline" className="mb-4">
            AI Services
          </Badge>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Comprehensive AI Solutions for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Business
            </span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            From customer service automation to lead generation, our AI services are designed to transform how you engage with customers and grow your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <IconComponent className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                    {service.badge && (
                      <Badge variant={service.badge === 'Popular' ? 'default' : 'secondary'}>
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="mr-2 h-3 w-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href={service.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            Proven Results
          </h2>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            Our AI solutions deliver measurable improvements across key business metrics.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary">95%</CardTitle>
              <CardDescription>Customer Satisfaction</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary">3x</CardTitle>
              <CardDescription>Lead Conversion Rate</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary">24/7</CardTitle>
              <CardDescription>Availability</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary">60%</CardTitle>
              <CardDescription>Cost Reduction</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            Let's discuss which AI solutions are right for your business needs.
          </p>
          <div className="flex gap-4 mt-8">
            <Button asChild size="lg">
              <Link href="/book-a-demo">
                Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}