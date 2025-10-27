import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent } from "@/components/ui/card";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
            <p className="text-muted-foreground">Last updated: December 20, 2024</p>
          </div>

          <Card className="border-0 bg-gradient-card shadow-card-hover">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. General Policy</h2>
                <p className="text-muted-foreground">
                  Due to the digital nature of gift cards, all sales are generally final and non-refundable. 
                  Once a gift card has been delivered electronically, it cannot be returned or exchanged for cash.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Exceptions</h2>
                <p className="text-muted-foreground mb-4">
                  We may consider refunds in the following exceptional circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Technical error resulting in duplicate charges</li>
                  <li>Failure to deliver the gift card due to system issues</li>
                  <li>Gift card delivered to incorrect email address due to our error</li>
                  <li>Defective or invalid gift card codes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Refund Request Process</h2>
                <p className="text-muted-foreground mb-4">
                  To request a refund under exceptional circumstances:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                  <li>Contact our customer support within 24 hours of purchase</li>
                  <li>Provide your order number and detailed explanation</li>
                  <li>Include any relevant screenshots or documentation</li>
                  <li>Allow 3-5 business days for investigation</li>
                  <li>If approved, refund will be processed to original payment method</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Refund Timeline</h2>
                <p className="text-muted-foreground mb-4">
                  When a refund is approved:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Credit cards: 5-7 business days</li>
                  <li>Debit cards: 3-5 business days</li>
                  <li>Digital wallets: 1-3 business days</li>
                  <li>Bank transfers: 7-10 business days</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Non-Refundable Situations</h2>
                <p className="text-muted-foreground mb-4">
                  Refunds will not be provided in the following situations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Change of mind after purchase</li>
                  <li>Gift card delivered to correct email but recipient didn't receive it</li>
                  <li>Gift card lost, stolen, or used without authorization</li>
                  <li>Merchant-specific terms and conditions not met</li>
                  <li>Gift card expired due to merchant's validity period</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Merchant-Specific Policies</h2>
                <p className="text-muted-foreground">
                  Some gift cards may have specific refund or exchange policies set by the issuing merchant. 
                  These policies take precedence over our general refund policy. Please check the specific 
                  terms and conditions for each gift card brand.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Chargebacks and Disputes</h2>
                <p className="text-muted-foreground">
                  If you initiate a chargeback or dispute with your payment provider without first contacting 
                  our support team, we reserve the right to suspend your account and refuse future service.
                </p>
              </section>


              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Contact for Refund Requests</h2>
                <p className="text-muted-foreground">
                  For refund requests or questions about this policy, contact us at:
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

export default RefundPolicy;