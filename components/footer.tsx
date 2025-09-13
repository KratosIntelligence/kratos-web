import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold">Kratos Intelligence</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              AI-powered business solutions that drive growth and efficiency.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/services/ai-phone-receptionist"
                  className="text-muted-foreground hover:text-foreground"
                >
                  AI Phone Receptionist
                </Link>
              </li>
              <li>
                <Link
                  href="/services/website-chat-crm"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Website Chat CRM
                </Link>
              </li>
              <li>
                <Link
                  href="/services/email-positive-replies"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Email Positive Replies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/pricing"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge-base"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Knowledge Base
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Kratos Intelligence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}