import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Check } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI automation',
      features: [
        'AI Phone Receptionist (500 calls/month)',
        'Website Chat CRM (1,000 conversations/month)',
        'Email Automation (Basic)',
        'Analytics Dashboard',
        'Email Support',
        '1 Integration'
      ],
      cta: 'Start Free Trial',
      href: '/book-a-demo?plan=starter'
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses that need comprehensive AI solutions',
      features: [
        'AI Phone Receptionist (2,000 calls/month)',
        'Website Chat CRM (5,000 conversations/month)',
        'Email Positive Replies (Advanced)',
        'Maps Lead Engine',
        'Voiceflow Make (Basic)',
        'Priority Support',
        '5 Integrations',
        'Custom Branding'
      ],
      cta: 'Get Started',
      href: '/book-a-demo?plan=professional',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with specific requirements',
      features: [
        'Unlimited AI Phone Receptionist',
        'Unlimited Website Chat CRM',
        'Full Email Automation Suite',
        'Complete Maps Lead Engine',
        'Advanced Voiceflow Make',
        'Telegram Agent',
        'Dedicated Account Manager',
        'Custom Integrations',
        'White-label Solutions',
        'SLA Guarantee'
      ],
      cta: 'Contact Sales',
      href: '/contact?plan=enterprise'
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
          <Badge variant="outline" className="mb-4">
            Pricing Plans
          </Badge>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Choose the Perfect{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Solution
            </span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Flexible pricing plans designed to scale with your business. Start with a free trial and upgrade as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative hover:shadow-lg transition-all duration-300 ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-base mt-4">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  <Link href={plan.href}>
                    {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can I change plans anytime?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Is there a free trial?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We offer a 14-day free trial for all plans. No credit card required to get started.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What kind of support do you provide?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                All plans include email support. Professional and Enterprise plans get priority support with faster response times.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            Join hundreds of businesses already using Kratos Intelligence to automate and optimize their operations.
          </p>
          <div className="flex gap-4 mt-8">
            <Button asChild size="lg">
              <Link href="/book-a-demo">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
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