"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Users, Building2, Award, Target, Eye, MapPin, Calendar, Shield, Handshake } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const milestones = [
    { year: "2020", title: "Founded in Chennai", description: "Started with 50 donors in T. Nagar during the pandemic" },
    { year: "2021", title: "1000+ Donors", description: "Expanded to cover all Chennai zones" },
    { year: "2022", title: "Hospital Partnerships", description: "Partnered with Apollo, SRMC, and GGH blood banks" },
    { year: "2023", title: "5000+ Lives Saved", description: "Milestone of facilitating 5000+ successful donations" },
    { year: "2024", title: "Real-Time Platform", description: "Launched live blood stock tracking across Chennai" },
    { year: "2025", title: "Community Growth", description: "Growing network of 8000+ registered donors" },
  ]

  const team = [
    { name: "Dr. Ramesh Krishnan", role: "Founder & Medical Director", description: "Former Head of Transfusion Medicine at GGH Chennai" },
    { name: "Priya Lakshmi", role: "Operations Director", description: "15 years experience in healthcare management" },
    { name: "Senthil Kumar", role: "Technology Lead", description: "Building platforms that save lives" },
    { name: "Dr. Meena Subramaniam", role: "Medical Advisor", description: "Consultant Hematologist, Apollo Hospitals" },
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
                About BloodLink Chennai
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                Connecting Hearts, Saving Lives in Namma Chennai
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                BloodLink Chennai is a community-driven initiative dedicated to ensuring that no patient in our beloved city suffers due to a shortage of blood. We bridge the gap between willing donors and those in need.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Target className="size-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To create a self-sustaining blood donation ecosystem in Chennai where every patient has timely access to safe blood. We aim to build a network of voluntary donors across all neighborhoods from Adyar to Anna Nagar, Mylapore to Madhavaram ensuring that help is always within reach.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                    <Eye className="size-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A Chennai where blood shortage is a thing of the past. We envision a city where every citizen understands the importance of blood donation, where technology seamlessly connects donors with recipients, and where community spirit drives us to save lives together.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg mx-auto text-muted-foreground space-y-6">
                <p>
                  BloodLink Chennai was born during the challenging times of 2020, when the COVID-19 pandemic severely disrupted blood donation drives across the city. Dr. Ramesh Krishnan, witnessing patients struggle to find blood at Government General Hospital, decided to take action.
                </p>
                <p>
                  What started as a WhatsApp group of 50 willing donors in T. Nagar quickly grew into a movement. Local residents, shopkeepers, IT professionals, and students all came together with one purpose to ensure no one in Chennai dies due to lack of blood.
                </p>
                <p>
                  Today, BloodLink Chennai has evolved into a comprehensive platform that connects over 8,000 registered donors with patients across the city. We partner with major hospitals including Apollo, SRMC, Vijaya, and Government General Hospital to provide real-time blood stock information.
                </p>
                <p>
                  Our strength lies in the diversity of our donor community teachers from Mylapore, auto drivers from Royapettah, software engineers from OMR, and homemakers from Velachery. This is what makes Chennai special: when one of us needs help, we all come together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Our Impact</h2>
            <div className="grid gap-6 md:grid-cols-4">
              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                      <Users className="size-7 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-4xl font-bold text-primary">8,000+</CardTitle>
                  <CardDescription>Registered Donors</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                      <Heart className="size-7 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-4xl font-bold text-primary">15,000+</CardTitle>
                  <CardDescription>Lives Impacted</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                      <Building2 className="size-7 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-4xl font-bold text-primary">25+</CardTitle>
                  <CardDescription>Partner Blood Banks</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="size-7 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-4xl font-bold text-primary">15</CardTitle>
                  <CardDescription>Chennai Zones Covered</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Our Journey</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                        {milestone.year.slice(-2)}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-primary/20 mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <p className="text-sm text-muted-foreground mb-1">{milestone.year}</p>
                      <h3 className="font-semibold text-lg">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Our Values</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Handshake className="size-6 text-primary" />
                  </div>
                  <CardTitle>Community First</CardTitle>
                  <CardDescription>
                    We believe in the power of community. Chennai is not just a city it is a family. When one member needs help, we all respond.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                    <Shield className="size-6 text-accent" />
                  </div>
                  <CardTitle>Trust & Safety</CardTitle>
                  <CardDescription>
                    All our partner blood banks are verified. We ensure donor privacy and follow strict safety protocols for every donation.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Award className="size-6 text-primary" />
                  </div>
                  <CardTitle>Excellence</CardTitle>
                  <CardDescription>
                    We strive for excellence in connecting donors with those in need. Every minute counts, and we work to reduce response times.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Meet Our Team</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <Card key={member.name}>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-2xl font-bold text-primary">
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="font-medium text-primary">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container">
            <Card className="bg-gradient-to-r from-primary to-primary/80 border-0 text-primary-foreground">
              <CardHeader className="text-center space-y-6 py-12">
                <CardTitle className="text-3xl md:text-4xl font-bold text-balance">
                  Be Part of Our Story
                </CardTitle>
                <CardDescription className="text-primary-foreground/90 text-lg max-w-xl mx-auto">
                  Join the BloodLink Chennai family and help us write the next chapter of saving lives in our city.
                </CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/register/donor">Become a Donor</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Link href="/contact">Contact Us</Link>
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
