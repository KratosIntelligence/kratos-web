import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Send, MessageCircle, Users, Zap, ArrowRight, Check } from 'lucide-react'

export default function TelegramAgentPage() {
  return (
    <div className="flex flex-col">
      <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
          <Badge variant="outline" className="mb-4">
            Telegram Agent
          </Badge>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Automate Customer Support on{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Telegram
            </span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Provide instant customer support, order tracking, and engagement through intelligent Telegram bot automation.
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
              <Send className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Instant Responses</CardTitle>
              <CardDescription>
                Provide immediate answers to customer questions 24/7
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <MessageCircle className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Order Tracking</CardTitle>
              <CardDescription>
                Automated order status updates and tracking information
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Users className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Customer Support</CardTitle>
              <CardDescription>
                Handle common support queries and escalate when needed
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Zap className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Broadcast Messaging</CardTitle>
              <CardDescription>
                Send targeted messages and updates to your audience
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
                Understand and respond to customer messages in natural language with context awareness.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Check className="h-6 w-6 text-primary" />
                Multi-language Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Communicate with customers in their preferred language for better engagement and satisfaction.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Check className="h-6 w-6 text-primary" />
                Integration Capabilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Connect with your existing systems, CRM, and databases for seamless information flow.
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
            Transform your Telegram presence with intelligent automation.
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