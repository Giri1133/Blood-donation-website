"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, AlertCircle, Heart, Users, Building2, Clock, Shield } from "lucide-react"
import Link from "next/link"
import { useDataStore } from "@/lib/data-store"

export default function Home() {
  const { donors, bloodBanks, emergencyRequests } = useDataStore()
  
  const activeEmergencies = emergencyRequests.filter(r => r.status === "active").slice(0, 3)
  const totalDonors = donors.length
  const totalBloodBanks = bloodBanks.length
  const livesServed = donors.length * 3 // Estimate

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
                  Save Lives Today
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
                  Every Drop Counts, Every Donor Matters
                </h1>
                <p className="text-lg text-muted-foreground text-pretty">
                  Join our community of life-savers. Connect with donors, find blood banks, and respond to emergency
                  requests in real-time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-base">
                    <Link href="/register/donor">Become a Donor</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                    <Link href="/emergency">Request Blood</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-3xl font-bold text-primary">{totalDonors}+</CardTitle>
                      <CardDescription>Active Donors</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-3xl font-bold text-primary">{livesServed}+</CardTitle>
                      <CardDescription>Lives Served</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-3xl font-bold text-primary">{totalBloodBanks}+</CardTitle>
                      <CardDescription>Blood Banks</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-3xl font-bold text-primary">24/7</CardTitle>
                      <CardDescription>Support</CardDescription>
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
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">How BloodLink Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our platform makes blood donation simple, efficient, and accessible for everyone.
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
                    Create your profile with blood type, location, and availability information.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                    <Search className="size-6 text-accent" />
                  </div>
                  <CardTitle>Find Matches</CardTitle>
                  <CardDescription>
                    Search for donors by blood type and location. View real-time availability.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <AlertCircle className="size-6 text-primary" />
                  </div>
                  <CardTitle>Emergency Requests</CardTitle>
                  <CardDescription>
                    Post urgent blood requirements and get instant notifications to nearby donors.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                    <Building2 className="size-6 text-accent" />
                  </div>
                  <CardTitle>Blood Bank Network</CardTitle>
                  <CardDescription>
                    Access our network of verified blood banks with real-time inventory updates.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Clock className="size-6 text-primary" />
                  </div>
                  <CardTitle>Track Donations</CardTitle>
                  <CardDescription>
                    Keep a complete history of your donations and upcoming eligibility dates.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                    <Shield className="size-6 text-accent" />
                  </div>
                  <CardTitle>Secure & Private</CardTitle>
                  <CardDescription>
                    Your personal information is protected with industry-standard security measures.
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
                <p className="text-muted-foreground">Help someone in urgent need of blood</p>
              </div>
              <Button asChild variant="outline" className="bg-transparent w-fit">
                <Link href="/emergency">View All</Link>
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
                            <CardDescription className="text-sm">{request.city}, {request.state}</CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
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
                        <Link href="/emergency">Respond to Request</Link>
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
                  Ready to Make a Difference?
                </CardTitle>
                <CardDescription className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
                  Join thousands of donors who have already saved lives. Your donation can be the difference between
                  life and death.
                </CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg" variant="secondary" className="text-base">
                    <Link href="/register/donor">Register Now</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Link href="/donors">Find Donors</Link>
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
