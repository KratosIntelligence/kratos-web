import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Workflow, Zap, Settings, BarChart, ArrowRight, Check } from 'lucide-react'

export default function VoiceflowMakePage() {
  return (
    <div className="flex flex-col">
      <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
          <Badge variant="outline" className="mb-4">
            Voiceflow Make
          </Badge>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Build Conversational AI{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Without Code
            </span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Create sophisticated conversational AI workflows with our visual builder. Deploy across multiple channels without technical expertise.
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
              <Workflow className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Visual Builder</CardTitle>
              <CardDescription>
                Drag-and-drop interface for creating complex conversation flows
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Zap className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Multi-channel Deploy</CardTitle>
              <CardDescription>
                Deploy to web, mobile, voice assistants, and messaging platforms
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Settings className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Integrations</CardTitle>
              <CardDescription>
                Connect with your existing tools and databases seamlessly
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <BarChart className="h-10 w-10 text-primary mx-auto" />
              <CardTitle>Analytics</CardTitle>
              <CardDescription>
                Track performance and optimize conversation flows
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
                No-Code Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Build sophisticated AI conversations without writing a single line of code using our intuitive visual interface.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Check className="h-6 w-6 text-primary" />
                Advanced Logic & Conditions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Create complex conversation flows with conditional logic, variables, and dynamic responses.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Check className="h-6 w-6 text-primary" />
                Real-time Testing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Test your conversational AI in real-time as you build, ensuring perfect user experiences before deployment.
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
            Start building powerful conversational AI experiences today.
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