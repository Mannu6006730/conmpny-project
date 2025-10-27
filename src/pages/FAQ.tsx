import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I purchase a gift card?",
      answer: "Simply browse our collection, select your preferred gift card, choose the amount, enter recipient details, and complete the secure payment process. The gift card will be delivered instantly via email."
    },
    {
      question: "Are the gift cards secure?",
      answer: "Yes, all our gift cards are 100% secure. We use bank-grade encryption and secure payment gateways to protect your transactions. Each gift card comes with unique codes that are generated securely."
    },
    {
      question: "How long are gift cards valid?",
      answer: "Gift card validity varies by brand. Most gift cards are valid for 1-3 years from the date of purchase. You can check the specific validity period on each product page."
    },
    {
      question: "Can I get a refund for my gift card?",
      answer: "Gift cards are generally non-refundable once purchased. However, if there's a technical issue or error in delivery, please contact our support team within 24 hours of purchase."
    },
    {
      question: "How do I redeem my gift card?",
      answer: "Each gift card comes with specific redemption instructions. Generally, you'll need to visit the brand's website or app, create an account, and enter the gift card code during checkout."
    },
    {
      question: "Can I check my gift card balance?",
      answer: "Yes, most gift cards allow balance checking. You can either visit the brand's website and enter your gift card details, or contact their customer service for balance inquiry."
    },
    {
      question: "What happens if I don't receive my gift card?",
      answer: "Gift cards are delivered instantly via email. If you don't receive it within 15 minutes, check your spam folder. If it's still not there, contact our support team with your order details."
    },
    {
      question: "Can I use multiple gift cards for one purchase?",
      answer: "This depends on the merchant's policy. Some brands allow combining multiple gift cards, while others may have restrictions. Check with the specific brand for their policies."
    },
    {
      question: "Do you offer bulk purchases for businesses?",
      answer: "Yes, we offer special pricing and services for bulk purchases. Contact our business team for corporate gifting solutions and volume discounts."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, net banking, UPI, and digital wallets. All payments are processed through secure, encrypted channels."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our gift cards and services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-gradient-card shadow-card-hover">
            <CardHeader>
              <CardTitle>Common Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:text-gift-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-card shadow-card-hover mt-8">
            <CardContent className="text-center p-8">
              <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@payflex.in"
                  className="bg-gradient-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Email Support
                </a>
                <a 
                  href="tel:+91- 999-0-737475"
                  className="border border-gift-primary text-gift-primary px-6 py-3 rounded-lg hover:bg-gift-primary/10 transition-colors"
                >
                  Call Us
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default FAQ;