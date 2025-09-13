import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
          <Badge variant="outline" className="mb-4">
            Legal
          </Badge>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Privacy Policy
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
              </p>
              <h4 className="font-semibold">Personal Information may include:</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Company information and job title</li>
                <li>Account credentials and preferences</li>
                <li>Payment and billing information</li>
                <li>Communications with our support team</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We use the information we collect to provide, maintain, and improve our services.
              </p>
              <h4 className="font-semibold">Specifically, we use your information to:</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide and deliver our AI services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Improve our services and develop new features</li>
                <li>Comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </p>
              <h4 className="font-semibold">We may share your information in the following situations:</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>With service providers who assist us in operating our business</li>
                <li>To comply with legal obligations or protect our rights</li>
                <li>In connection with a business transaction (merger, acquisition, etc.)</li>
                <li>With your explicit consent</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <h4 className="font-semibold">Our security measures include:</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Depending on your location, you may have certain rights regarding your personal information.
              </p>
              <h4 className="font-semibold">These rights may include:</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to collect information about your browsing activities and improve your experience on our website.
              </p>
              <p className="text-muted-foreground">
                You can control cookies through your browser settings, but disabling cookies may affect the functionality of our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: privacy@kratosintelligence.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 AI Street, Tech City, TC 12345, United States</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}