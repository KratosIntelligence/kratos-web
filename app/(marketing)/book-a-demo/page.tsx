import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react'

export default function BookDemoPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
          <Badge variant="outline" className="mb-4">
            Book a Demo
          </Badge>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            See Kratos Intelligence{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              in Action
            </span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Schedule a personalized demo to see how our AI solutions can transform your business operations and drive growth.
          </p>
        </div>
      </section>

      {/* Demo Benefits */}
      <section className="container space-y-6 py-8 md:py-12">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card>
            <CardHeader className="text-center">
              <Calendar className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>30-Minute Session</CardTitle>
              <CardDescription>
                Comprehensive walkthrough of our AI solutions tailored to your business needs.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Users className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Personalized Experience</CardTitle>
              <CardDescription>
                One-on-one session with our AI specialists to address your specific requirements.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Clock className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Immediate Insights</CardTitle>
              <CardDescription>
                Get instant feedback on how AI can improve your current processes and workflows.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Booking Form */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Schedule Your Demo</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours to schedule your personalized demo.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Calendly Placeholder */}
              <div className="bg-muted/50 border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Calendly Integration</h3>
                <p className="text-muted-foreground mb-4">
                  This is where your Calendly booking widget would be embedded.
                </p>
                <p className="text-sm text-muted-foreground">
                  Replace this placeholder with your actual Calendly embed code.
                </p>
              </div>

              {/* Alternative Contact Form */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-center">Or fill out this form</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                  </label>
                  <Input id="company" placeholder="Your Company" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Tell us about your needs
                  </label>
                  <Textarea
                    id="message"
                    placeholder="What AI solutions are you most interested in? What challenges are you looking to solve?"
                    rows={4}
                  />
                </div>
                <Button className="w-full" size="lg">
                  Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What to Expect */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            What to Expect
          </h2>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            Here's what we'll cover during your personalized demo session.
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  1
                </span>
                Discovery & Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We'll discuss your current processes, pain points, and goals to understand how AI can best serve your business.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  2
                </span>
                Live Demonstration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                See our AI solutions in action with real examples and use cases relevant to your industry.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  3
                </span>
                Custom Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Get personalized recommendations on which solutions would provide the most value for your specific needs.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  4
                </span>
                Next Steps & Pricing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Discuss implementation timeline, pricing options, and answer any questions you may have.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}