"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ClipboardCheck, Heart, Droplet, Coffee, Clock, CheckCircle2, 
  XCircle, AlertTriangle, HelpCircle, ArrowRight, Phone, Calendar
} from "lucide-react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function HowToDonatePage() {
  const steps = [
    {
      number: "01",
      title: "Registration",
      duration: "5 minutes",
      icon: ClipboardCheck,
      description: "Fill out a simple registration form with your basic details. Our staff will verify your identity and explain the donation process.",
    },
    {
      number: "02",
      title: "Health Screening",
      duration: "10 minutes",
      icon: Heart,
      description: "A quick health check including blood pressure, pulse, temperature, and hemoglobin levels. This ensures you are fit to donate.",
    },
    {
      number: "03",
      title: "Blood Donation",
      duration: "8-10 minutes",
      icon: Droplet,
      description: "The actual donation takes only 8-10 minutes. You will donate approximately 350-450ml of blood. Our trained staff ensures your comfort.",
    },
    {
      number: "04",
      title: "Refreshments & Rest",
      duration: "10-15 minutes",
      icon: Coffee,
      description: "Enjoy complimentary refreshments while you rest. This helps your body begin recovery. You will receive a donor card and certificate.",
    },
  ]

  const eligibilityCriteria = [
    { criteria: "Age between 18-65 years", eligible: true },
    { criteria: "Weight at least 45 kg", eligible: true },
    { criteria: "Hemoglobin level 12.5 g/dL or higher", eligible: true },
    { criteria: "Good general health", eligible: true },
    { criteria: "No fever, cold, or flu in last 2 weeks", eligible: true },
    { criteria: "Not donated blood in last 3 months (men) / 4 months (women)", eligible: true },
    { criteria: "No major surgery in last 6 months", eligible: true },
    { criteria: "Not pregnant or breastfeeding", eligible: true },
  ]

  const cannotDonate = [
    "Currently taking antibiotics or certain medications",
    "Had tattoo or piercing in last 6 months",
    "History of hepatitis B or C",
    "High-risk behavior for HIV/AIDS",
    "Severe heart, lung, or kidney disease",
    "Uncontrolled diabetes",
    "History of epilepsy or seizures",
    "Recent dental procedures (wait 24-72 hours)",
  ]

  const benefits = [
    {
      title: "Free Health Screening",
      description: "Every donation includes tests for blood type, hemoglobin, hepatitis B & C, HIV, malaria, and syphilis absolutely free.",
    },
    {
      title: "Reduced Heart Disease Risk",
      description: "Regular blood donation helps reduce iron levels in the blood, which may lower the risk of heart disease.",
    },
    {
      title: "Stimulates Blood Cell Production",
      description: "After donation, your body works to replenish blood cells, keeping your blood production system active and healthy.",
    },
    {
      title: "Burns Calories",
      description: "Donating one unit of blood burns approximately 650 calories as your body works to replace the donated blood.",
    },
    {
      title: "Mental Wellbeing",
      description: "The satisfaction of saving lives contributes to positive mental health and a sense of community connection.",
    },
    {
      title: "Priority Access",
      description: "Regular donors receive priority access to blood during emergencies for themselves and their families.",
    },
  ]

  const faqs = [
    {
      question: "Is blood donation painful?",
      answer: "You may feel a slight pinch when the needle is inserted, but the actual donation is painless. Our experienced staff ensures your comfort throughout the process.",
    },
    {
      question: "How long does the whole process take?",
      answer: "The entire process from registration to refreshments takes about 30-45 minutes. The actual blood collection takes only 8-10 minutes.",
    },
    {
      question: "How often can I donate blood?",
      answer: "Men can donate every 3 months (90 days), and women can donate every 4 months (120 days). This allows your body to fully recover between donations.",
    },
    {
      question: "Will I feel weak after donating?",
      answer: "Most people feel fine after donating. We recommend resting for 10-15 minutes, drinking extra fluids, and avoiding strenuous activity for a few hours.",
    },
    {
      question: "Can I donate if I have diabetes?",
      answer: "If your diabetes is well-controlled with diet or oral medication, you may be eligible to donate. Those on insulin need to discuss with the medical officer.",
    },
    {
      question: "What should I eat before donating?",
      answer: "Have a healthy meal and drink plenty of water before donating. Avoid fatty foods. Do not donate on an empty stomach.",
    },
    {
      question: "Is my blood tested before use?",
      answer: "Yes, all donated blood is thoroughly tested for blood type and infectious diseases including HIV, Hepatitis B & C, malaria, and syphilis before being used.",
    },
    {
      question: "Where can I donate blood in Chennai?",
      answer: "You can donate at any of our partner blood banks including Apollo, SRMC, Government General Hospital, Vijaya Hospital, and Rotary TTK Blood Bank. Check our Blood Banks page for locations.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-28">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="outline" className="border-primary text-primary">
                Everything You Need to Know
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                How to Donate Blood
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Donating blood is safe, simple, and takes less than an hour. Learn about the process, eligibility criteria, and the incredible benefits of becoming a blood donor in Chennai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg">
                  <Link href="/register/donor">Register to Donate</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent">
                  <Link href="/blood-banks">Find Donation Centers</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Process */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The Donation Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From start to finish, blood donation takes only 30-45 minutes. Here is what to expect:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <Card key={step.number} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="size-4" />
                        {step.duration}
                      </div>
                    </div>
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                      <step.icon className="size-6 text-primary" />
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section id="eligibility" className="py-20 bg-muted/50 scroll-mt-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Eligibility Criteria</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Check if you are eligible to donate blood. Most healthy adults can donate safely.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="size-5 text-green-600" />
                    <CardTitle className="text-lg">You Can Donate If</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {eligibilityCriteria.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-green-600 mt-1 shrink-0" />
                        <span className="text-sm">{item.criteria}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="size-5 text-destructive" />
                    <CardTitle className="text-lg">You Cannot Donate If</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {cannotDonate.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <XCircle className="size-4 text-destructive mt-1 shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 max-w-2xl mx-auto">
              <Card className="border-amber-200 bg-amber-50/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="size-5 text-amber-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-amber-800">Not Sure About Your Eligibility?</p>
                      <p className="text-sm text-amber-700 mt-1">
                        If you are uncertain about any medical conditions or medications, speak with the medical officer at the blood bank. They will assess your eligibility before donation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 scroll-mt-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Benefits of Blood Donation</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Blood donation is not just about helping others it benefits you too!
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 mb-3">
                      <Heart className="size-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-muted/50 scroll-mt-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Got questions? We have answers. Find everything you need to know about blood donation.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg border px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="size-5 text-primary shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-8 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="size-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Need Help?</CardTitle>
                      <CardDescription>Call our helpline</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">+91 44 2829 1000</p>
                  <p className="text-sm text-muted-foreground mt-1">Available 24/7 for emergency requests</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10">
                      <Calendar className="size-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle>Schedule Donation</CardTitle>
                      <CardDescription>Book an appointment</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/blood-banks">
                      Find a Blood Bank <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <Card className="bg-gradient-to-r from-primary to-primary/80 border-0 text-primary-foreground max-w-4xl mx-auto">
              <CardHeader className="text-center space-y-6 py-12">
                <CardTitle className="text-3xl md:text-4xl font-bold text-balance">
                  Ready to Save Lives?
                </CardTitle>
                <CardDescription className="text-primary-foreground/90 text-lg max-w-xl mx-auto">
                  Your single donation can save up to 3 lives. Join thousands of Chennai donors making a difference every day.
                </CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/register/donor">Register Now</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Link href="/stories">Read Donor Stories</Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
