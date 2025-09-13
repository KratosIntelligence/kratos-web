import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, Clock, Calendar, Users, ArrowRight, Check } from 'lucide-react'

export default function AIPhoneReceptionistPage() {
  return (
    <div className="flex flex-col">
      <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
          <Badge variant="outline" className="mb-4">
            AI Phone Receptionist
          </Badge>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Never Miss a Call with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Receptionist
            </span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Intelligent call handling, appointment scheduling, and customer support available 24/7 to grow your business.
          </p>
          <div className="flex gap-4 mt-8">
            <Button asChild size="lg">
              <Link href="/book-a-demo">
                Book Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4">
          <Card>
            <CardHeader className="text-center">
              <Phone className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Smart Call Routing</CardTitle>
              <CardDescription>
                Intelligently route calls to the right department or person
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Calendar className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Appointment Booking</CardTitle>
              <CardDescription>
                Automatically schedule appointments and send confirmations
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Clock className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>24/7 Availability</CardTitle>
              <CardDescription>
                Never miss a call, even outside business hours
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Users className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Lead Qualification</CardTitle>
              <CardDescription>
                Qualify leads and gather important customer information
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            Key Features
          </h2>
        </div>
        <div className="mx-auto max-w-4xl space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Check className="h-6 w-6 text-primary" />
                Natural Language Processing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Advanced AI understands natural speech patterns and responds appropriately to customer inquiries.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Check className="h-6 w-6 text-primary" />
                Custom Voice & Personality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Customize the AI voice and personality to match your brand and company culture.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Check className="h-6 w-6 text-primary" />
                CRM Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Seamlessly integrates with popular CRM systems to log calls and update customer records.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            Transform your phone system with AI-powered intelligence.
          </p>
          <div className="flex gap-4 mt-8">
            <Button asChild size="lg">
              <Link href="/book-a-demo">
                Book Demo <ArrowRight className="ml-2 h-4 w-4" />
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