import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
          <Badge variant="outline" className="mb-4">
            Contact Us
          </Badge>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Get in Touch with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Team
            </span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Ready to transform your business with AI? We're here to help you get started and answer any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your needs and how we can help..."
                  rows={5}
                />
              </div>
              <Button className="w-full" size="lg">
                Send Message <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">hello@kratosintelligence.com</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-muted-foreground">
                      123 AI Street<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prefer a Demo?</CardTitle>
                <CardDescription>
                  See our AI solutions in action with a personalized demonstration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <a href="/book-a-demo">
                    Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            Common Questions
          </h2>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            Quick answers to questions you might have before reaching out.
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How quickly can I get started?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Most of our AI solutions can be set up within 1-2 weeks after our initial consultation and requirements gathering.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Do you offer custom solutions?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes, we specialize in creating custom AI solutions tailored to your specific business needs and industry requirements.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What kind of support do you provide?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We provide comprehensive support including setup assistance, training, ongoing maintenance, and 24/7 technical support for Enterprise clients.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}