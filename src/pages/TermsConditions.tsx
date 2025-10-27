import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent } from "@/components/ui/card";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: December 20, 2024</p>
          </div>

          <Card className="border-0 bg-gradient-card shadow-card-hover">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using SmartPayflex services, you accept and agree to be bound by the 
                  terms and provision of this agreement. These terms apply to all visitors, users, and 
                  others who access or use our service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
                <p className="text-muted-foreground mb-4">
                  Permission is granted to temporarily download one copy of SmartPayflex materials for 
                  personal, non-commercial transitory viewing only. This is the grant of a license, not 
                  a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on SmartPayflex's website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Gift Card Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Gift cards purchased through SmartPayflex are subject to the following terms:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Gift cards are non-refundable and cannot be exchanged for cash</li>
                  <li>Gift cards expire according to the issuer's terms and conditions</li>
                  <li>Lost or stolen gift cards cannot be replaced</li>
                  <li>Gift cards are for personal use only and cannot be resold</li>
                  <li>We are not responsible for gift cards that are lost, stolen, or used without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground">
                  All payments must be made in full at the time of purchase. We accept major credit cards, 
                  debit cards, and other approved payment methods. By providing payment information, you 
                  represent that you are authorized to use the payment method.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  In no event shall SmartPayflex or its suppliers be liable for any damages (including, 
                  without limitation, damages for loss of data or profit, or due to business interruption) 
                  arising out of the use or inability to use SmartPayflex services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms and conditions are governed by and construed in accordance with the laws of 
                  the jurisdiction in which SmartPayflex operates, and you irrevocably submit to the 
                  exclusive jurisdiction of the courts in that state or location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  SmartPayflex reserves the right to revise these terms at any time without notice. 
                  By using this website, you are agreeing to be bound by the current version of 
                  these terms and conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms & Conditions, please contact us at:
                  <br />
                  Email: info@payflex.in
                  <br />
                  Phone: +91- 999-0-737475
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default TermsConditions;