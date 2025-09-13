import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, Users, BarChart, Zap, ArrowRight, Check } from 'lucide-react'

export default function WebsiteChatCRMPage() {
  return (
    <div className="flex flex-col">
      <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
          <Badge variant="outline" className="mb-4">
            Website Chat CRM
          </Badge>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Convert Visitors into{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Qualified Leads
            </span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Intelligent chat system that engages website visitors, captures leads, and integrates seamlessly with your CRM.
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
              <MessageSquare className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Real-time Chat</CardTitle>
              <CardDescription>
                Instant responses to visitor questions and inquiries
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Users className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Lead Capture</CardTitle>
              <CardDescription>
                Automatically collect and qualify visitor information
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <BarChart className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>
                Track performance and optimize conversion rates
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Zap className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>CRM Integration</CardTitle>
              <CardDescription>
                Seamlessly sync leads with your existing CRM system
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
                Intelligent Conversation Flow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                AI-powered conversations that adapt based on visitor behavior and intent to maximize engagement.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Check className="h-6 w-6 text-primary" />
                Lead Scoring & Qualification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Automatically score and qualify leads based on their responses and behavior patterns.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Check className="h-6 w-6 text-primary" />
                Multi-channel Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Consistent experience across web, mobile, and social media platforms.
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
            Start converting more website visitors into qualified leads today.
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