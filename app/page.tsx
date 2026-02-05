"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Search, AlertCircle, Heart, Users, Building2, Clock, Shield, 
  Calendar, BookOpen, Quote, ArrowRight, Phone, MapPin
} from "lucide-react"
import Link from "next/link"
import { useDataStore } from "@/lib/data-store"

export default function Home() {
  const { donors, bloodBanks, emergencyRequests, donorStories } = useDataStore()
  
  const activeEmergencies = emergencyRequests.filter(r => r.status === "active").slice(0, 3)
  const totalDonors = donors.length
  const totalBloodBanks = bloodBanks.length
  const livesServed = donors.length * 3

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="w-fit border-primary text-primary">
                  Serving Chennai Since 2020
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
                  Namma Chennai, Namma Blood Bank
                </h1>
                <p className="text-lg text-muted-foreground text-pretty">
                  Join over 5,000 donors across Chennai who are making a difference every day. From T. Nagar to Tambaram, Adyar to Anna Nagar our community ensures no patient goes without the blood they need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-base">
                    <Link href="/register/donor">Become a Donor</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                    <Link href="/emergency">
                      <Phone className="mr-2 size-4" />
                      Need Blood Urgently?
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-primary" />
                  <span>Emergency Helpline: +91 44 2829 1000 (24/7)</span>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-3xl font-bold text-primary">{totalDonors}+</CardTitle>
                      <CardDescription>Active Donors in Chennai</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-3xl font-bold text-primary">{livesServed}+</CardTitle>
                      <CardDescription>Lives Saved</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-3xl font-bold text-primary">{totalBloodBanks}</CardTitle>
                      <CardDescription>Partner Blood Banks</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-3xl font-bold text-primary">24/7</CardTitle>
                      <CardDescription>Emergency Support</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">How BloodLink Chennai Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our platform connects donors, recipients, and blood banks across Chennai efficiently and compassionately.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Users className="size-6 text-primary" />
                  </div>
                  <CardTitle>Register as Donor</CardTitle>
                  <CardDescription>
                    Create your profile with blood type, your Chennai locality, and availability. Get notified when someone nearby needs your blood type.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                    <Search className="size-6 text-accent" />
                  </div>
                  <CardTitle>Find Blood Instantly</CardTitle>
                  <CardDescription>
                    Search our database of verified donors across Chennai. Filter by blood type, area, and availability for quick matches.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <AlertCircle className="size-6 text-primary" />
                  </div>
                  <CardTitle>Emergency Alerts</CardTitle>
                  <CardDescription>
                    Post urgent requirements and our system notifies nearby donors immediately. Critical requests are prioritized for faster response.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                    <Building2 className="size-6 text-accent" />
                  </div>
                  <CardTitle>Real-Time Stock Updates</CardTitle>
                  <CardDescription>
                    Check blood availability at Apollo, SRMC, GGH, Vijaya, and other major Chennai blood banks with live inventory data.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Calendar className="size-6 text-primary" />
                  </div>
                  <CardTitle>Schedule Donations</CardTitle>
                  <CardDescription>
                    Book your donation appointment at a convenient blood bank near you. We will remind you when you are eligible to donate again.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                    <Shield className="size-6 text-accent" />
                  </div>
                  <CardTitle>Verified & Secure</CardTitle>
                  <CardDescription>
                    All blood banks are verified by Tamil Nadu State Blood Transfusion Council. Your personal data is protected.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency Requests Preview */}
        <section className="py-20 md:py-32 bg-muted/50">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Active Emergency Requests</h2>
                <p className="text-muted-foreground">Help someone in Chennai who urgently needs blood today</p>
              </div>
              <Button asChild variant="outline" className="bg-transparent w-fit">
                <Link href="/emergency">View All Requests</Link>
              </Button>
            </div>

            {activeEmergencies.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {activeEmergencies.map((request) => (
                  <Card key={request.id} className="relative overflow-hidden">
                    {request.urgency === "critical" && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-destructive" />
                    )}
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                            {request.bloodType}
                          </div>
                          <div>
                            <CardTitle className="text-base">{request.hospital}</CardTitle>
                            <CardDescription className="text-sm">{request.address}, {request.city}</CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{request.reason}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Units Needed:</span>
                        <span className="font-semibold">{request.units}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge
                          variant={
                            request.urgency === "critical"
                              ? "destructive"
                              : request.urgency === "urgent"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {request.urgency.charAt(0).toUpperCase() + request.urgency.slice(1)}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{request.postedTime}</span>
                      </div>
                      <Button asChild className="w-full">
                        <Link href="/emergency">
                          Respond to Request
                          <ArrowRight className="ml-2 size-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">No active emergency requests at the moment.</p>
                  <Button asChild className="mt-4">
                    <Link href="/emergency/new">Post an Emergency Request</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Donor Stories Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Stories from Chennai Donors</h2>
                <p className="text-muted-foreground">Real people, real impact in our city</p>
              </div>
              <Button asChild variant="outline" className="bg-transparent w-fit">
                <Link href="/stories">Read More Stories</Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {donorStories.slice(0, 2).map((story) => (
                <Card key={story.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 shrink-0">
                        <span className="text-2xl font-bold text-primary">{story.name.charAt(0)}</span>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-semibold text-lg">{story.name}</h3>
                          <p className="text-sm text-muted-foreground">{story.location}</p>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <Badge variant="outline" className="border-primary text-primary">
                            {story.bloodType}
                          </Badge>
                          <span className="text-muted-foreground">{story.donations} donations</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 relative">
                      <Quote className="absolute -top-2 -left-1 size-8 text-primary/20" />
                      <p className="text-muted-foreground pl-6 italic">
                        {story.quote}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Resources Section */}
        <section className="py-20 md:py-32 bg-muted/50">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Learn About Blood Donation</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding the donation process helps you become a better donor
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <BookOpen className="size-6 text-primary" />
                  </div>
                  <CardTitle>Eligibility Criteria</CardTitle>
                  <CardDescription>
                    You can donate if you are 18-65 years old, weigh at least 45kg, and are in good health. Learn about conditions that may affect eligibility.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="px-0">
                    <Link href="/how-to-donate#eligibility">
                      Check Eligibility <ArrowRight className="ml-1 size-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                    <Heart className="size-6 text-accent" />
                  </div>
                  <CardTitle>Benefits of Donating</CardTitle>
                  <CardDescription>
                    Blood donation not only saves lives but also provides health benefits including free health screening and reduced risk of heart disease.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="px-0">
                    <Link href="/how-to-donate#benefits">
                      Learn Benefits <ArrowRight className="ml-1 size-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Clock className="size-6 text-primary" />
                  </div>
                  <CardTitle>Donation Process</CardTitle>
                  <CardDescription>
                    The entire process takes only 30-45 minutes. We guide you through registration, health check, donation, and refreshments.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="px-0">
                    <Link href="/how-to-donate">
                      View Process <ArrowRight className="ml-1 size-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 md:py-32">
          <div className="container">
            <Card className="bg-gradient-to-r from-primary to-primary/80 border-0 text-primary-foreground">
              <CardHeader className="text-center space-y-6 py-16">
                <div className="flex justify-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary-foreground/20">
                    <Heart className="size-8 fill-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-3xl md:text-5xl font-bold text-balance">
                  Chennai Needs You
                </CardTitle>
                <CardDescription className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
                  Every 2 seconds, someone in Chennai needs blood. Your single donation can save up to 3 lives. Join thousands of Chennai donors who have already made a difference.
                </CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg" variant="secondary" className="text-base">
                    <Link href="/register/donor">Register as Donor</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Link href="/blood-banks">Find Nearby Blood Banks</Link>
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
