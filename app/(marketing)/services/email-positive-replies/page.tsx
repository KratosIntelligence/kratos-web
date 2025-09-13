import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mail, Zap, Target, TrendingUp, ArrowRight, Check } from 'lucide-react'

export default function EmailPositiveRepliesPage() {
  return (
    <div className="flex flex-col">
      <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
          <Badge variant="outline" className="mb-4">
            Email Positive Replies
          </Badge>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Automate Email Responses with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Intelligence
            </span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Generate positive, brand-consistent email responses that maintain your voice and drive engagement automatically.
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
              <Mail className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Smart Replies</CardTitle>
              <CardDescription>
                AI-generated responses that match your brand voice
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Zap className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Instant Response</CardTitle>
              <CardDescription>
                Respond to emails within minutes, not hours
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Target className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Brand Consistency</CardTitle>
              <CardDescription>
                Maintain consistent tone and messaging across all emails
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <TrendingUp className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Performance Tracking</CardTitle>
              <CardDescription>
                Monitor response rates and engagement metrics
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
                Context-Aware Responses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                AI analyzes email context, sender history, and intent to generate appropriate responses.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Check className="h-6 w-6 text-primary" />
                Follow-up Sequences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Automated follow-up emails that nurture leads and maintain engagement over time.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Check className="h-6 w-6 text-primary" />
                Sentiment Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Detect email sentiment and adjust response tone accordingly for better customer relationships.
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
            Transform your email communication with intelligent automation.
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