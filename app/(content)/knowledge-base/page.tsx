import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Search, BookOpen, Video, FileText, HelpCircle, ArrowRight } from 'lucide-react'

export default function KnowledgeBasePage() {
  const categories = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Learn the basics of setting up and using our AI solutions',
      articles: 12,
      href: '/knowledge-base/getting-started'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all our features',
      articles: 8,
      href: '/knowledge-base/tutorials'
    },
    {
      icon: FileText,
      title: 'API Documentation',
      description: 'Technical documentation for developers and integrations',
      articles: 24,
      href: '/knowledge-base/api'
    },
    {
      icon: HelpCircle,
      title: 'FAQ',
      description: 'Frequently asked questions and troubleshooting',
      articles: 18,
      href: '/knowledge-base/faq'
    }
  ]

  const popularArticles = [
    {
      title: 'Setting up your first AI Phone Receptionist',
      description: 'Complete guide to configuring and deploying your AI receptionist',
      category: 'Getting Started',
      readTime: '5 min read',
      href: '/knowledge-base/ai-phone-setup'
    },
    {
      title: 'Integrating Website Chat CRM with your existing tools',
      description: 'Learn how to connect our chat CRM with popular business tools',
      category: 'Integrations',
      readTime: '8 min read',
      href: '/knowledge-base/chat-crm-integration'
    },
    {
      title: 'Best practices for Email Automation',
      description: 'Tips and strategies for maximizing your email automation ROI',
      category: 'Best Practices',
      readTime: '6 min read',
      href: '/knowledge-base/email-automation-best-practices'
    },
    {
      title: 'Understanding AI Analytics and Reporting',
      description: 'How to interpret and act on your AI performance metrics',
      category: 'Analytics',
      readTime: '7 min read',
      href: '/knowledge-base/analytics-reporting'
    },
    {
      title: 'Troubleshooting Common Issues',
      description: 'Solutions to the most common problems users encounter',
      category: 'Troubleshooting',
      readTime: '4 min read',
      href: '/knowledge-base/troubleshooting'
    },
    {
      title: 'API Rate Limits and Best Practices',
      description: 'Understanding API limitations and how to optimize your usage',
      category: 'API',
      readTime: '10 min read',
      href: '/knowledge-base/api-rate-limits'
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
          <Badge variant="outline" className="mb-4">
            Knowledge Base
          </Badge>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Help Center &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Find answers, learn best practices, and get the most out of your Kratos Intelligence AI solutions.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="container py-8">
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for articles, guides, and documentation..."
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container space-y-6 py-8 md:py-12">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            Browse by Category
          </h2>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            Find the information you need organized by topic and expertise level.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="text-center">
                  <IconComponent className="h-12 w-12 text-primary mx-auto group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.articles} articles
                  </p>
                  <Button variant="ghost" asChild className="w-full">
                    <Link href={category.href}>
                      Browse <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Popular Articles */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            Popular Articles
          </h2>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            Most viewed and helpful articles from our knowledge base.
          </p>
        </div>
        <div className="mx-auto max-w-4xl space-y-4">
          {popularArticles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {article.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      <Link href={article.href}>{article.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {article.description}
                    </CardDescription>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ml-4 mt-2" />
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Support */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            Still Need Help?
          </h2>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex gap-4 mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Support <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/book-a-demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}