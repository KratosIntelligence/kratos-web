import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Bot, MessageSquare, Mail, MapPin, Workflow, Send } from 'lucide-react'
import SeoJsonLd from '@/components/SeoJsonLd'
import Hero from '@/components/Hero'

export default function HomePage() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.kratosintelligence.com";
  return (
    <>
      <SeoJsonLd siteUrl={siteUrl} />
      <Hero />
      <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
          <Badge variant="outline" className="mb-4">
            AI-Powered Business Solutions
          </Badge>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Intelligent AI
            </span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Automate customer interactions, generate leads, and streamline operations with our comprehensive AI solutions.
          </p>
          <div className="flex gap-4 mt-8">
            <Button asChild size="lg">
              <Link href="/book-a-demo">
                Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            Why Choose Kratos Intelligence?
          </h2>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            Our AI solutions are designed to integrate seamlessly with your existing workflow and deliver measurable results.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card>
            <CardHeader>
              <Bot className="h-10 w-10 text-primary" />
              <CardTitle>24/7 Automation</CardTitle>
              <CardDescription>
                Never miss a customer interaction with AI that works around the clock.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <MessageSquare className="h-10 w-10 text-primary" />
              <CardTitle>Intelligent Responses</CardTitle>
              <CardDescription>
                AI-powered conversations that understand context and provide relevant solutions.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <ArrowRight className="h-10 w-10 text-primary" />
              <CardTitle>Seamless Integration</CardTitle>
              <CardDescription>
                Easy setup with your existing tools and platforms. No technical expertise required.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            Our AI Solutions
          </h2>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            Comprehensive AI tools designed to enhance every aspect of your customer engagement.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Bot className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">AI Phone Receptionist</CardTitle>
              <CardDescription>
                Intelligent call handling and appointment scheduling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" asChild className="w-full">
                <Link href="/services/ai-phone-receptionist">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <MessageSquare className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Website Chat CRM</CardTitle>
              <CardDescription>
                Convert website visitors into qualified leads
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" asChild className="w-full">
                <Link href="/services/website-chat-crm">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Mail className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Email Automation</CardTitle>
              <CardDescription>
                Intelligent email responses and follow-ups
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" asChild className="w-full">
                <Link href="/services/email-positive-replies">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
                Book Your Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}