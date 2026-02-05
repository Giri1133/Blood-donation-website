"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Quote, Heart, MapPin, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useDataStore } from "@/lib/data-store"

export default function StoriesPage() {
  const { donorStories } = useDataStore()

  const additionalStories = [
    {
      id: "5",
      name: "Dr. Anand Raghavan",
      image: "/donor-5.jpg",
      bloodType: "O-",
      donations: 45,
      location: "Mylapore, Chennai",
      story: "As a physician at a private clinic in Mylapore, I have seen firsthand how critical timely blood transfusions can be. I started donating during my medical college days at MMC and have not stopped since. My O- blood is universal donor type, which means it can help anyone in an emergency.",
      quote: "Being a doctor taught me the value of blood. Being a donor lets me practice medicine beyond the clinic.",
    },
    {
      id: "6",
      name: "Revathi Chandran",
      image: "/donor-6.jpg",
      bloodType: "A+",
      donations: 15,
      location: "Porur, Chennai",
      story: "I lost my brother to a road accident near Porur because we could not find B- blood in time. That tragedy motivated me to become a regular donor. Now I organize blood donation camps at my workplace near SRMC Hospital every quarter.",
      quote: "I donate in memory of my brother. Each donation is my way of ensuring no other family faces what we did.",
    },
    {
      id: "7",
      name: "Muthu Krishnan",
      image: "/donor-7.jpg",
      bloodType: "B+",
      donations: 28,
      location: "Ambattur, Chennai",
      story: "I work at a manufacturing unit in Ambattur Industrial Estate. When a fellow worker needed blood after an accident, I donated for the first time. That experience changed me. Now, I have convinced over 30 colleagues to become regular donors.",
      quote: "Factory workers are strong. Our blood is strong too. Why not share it with those who need it?",
    },
    {
      id: "8",
      name: "Sangeetha Venkat",
      image: "/donor-8.jpg",
      bloodType: "AB+",
      donations: 20,
      location: "Velachery, Chennai",
      story: "As a mother of two, I understand the anxiety families feel when a loved one needs blood. I started donating after my delivery at a hospital in Velachery, where I received a transfusion. Now both my children, who are in college, are also registered donors.",
      quote: "I teach my children that the best gift you can give is the gift of life itself.",
    },
  ]

  const allStories = [...donorStories, ...additionalStories]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-28">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="outline" className="border-primary text-primary">
                Real Stories, Real Impact
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                Chennai Donors Who Inspire Us
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Meet the ordinary Chennaites doing extraordinary things. These are the stories of people from every corner of our city who have chosen to save lives through blood donation.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Story */}
        <section className="py-20">
          <div className="container">
            <Card className="overflow-hidden border-primary/20">
              <div className="grid md:grid-cols-2">
                <div className="bg-primary/5 p-8 md:p-12 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit border-primary text-primary mb-4">
                    Featured Donor
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{allStories[0].name}</h2>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="size-4" />
                      {allStories[0].location}
                    </div>
                    <Badge variant="secondary">{allStories[0].bloodType}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Heart className="size-4 text-primary" />
                      {allStories[0].donations} donations
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {allStories[0].story}
                  </p>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 size-8 text-primary/30" />
                    <p className="pl-8 italic text-lg font-medium">
                      {allStories[0].quote}
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 md:p-12 flex items-center justify-center">
                  <div className="flex size-48 items-center justify-center rounded-full bg-primary/10 border-4 border-primary/20">
                    <span className="text-6xl font-bold text-primary">{allStories[0].name.charAt(0)}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* All Stories Grid */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
              More Inspiring Stories
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allStories.slice(1).map((story) => (
                <Card key={story.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 shrink-0">
                        <span className="text-2xl font-bold text-primary">{story.name.charAt(0)}</span>
                      </div>
                      <div>
                        <CardTitle className="text-lg">{story.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <MapPin className="size-3" />
                          {story.location}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="border-primary text-primary">
                        {story.bloodType}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Heart className="size-3 text-primary" />
                        {story.donations} donations
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {story.story}
                    </p>
                    <div className="relative pt-4 border-t">
                      <Quote className="absolute top-2 left-0 size-5 text-primary/30" />
                      <p className="pl-6 italic text-sm">
                        {story.quote}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The Power of One Donation</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every donor featured here has made an incredible impact. Here is what their collective effort means:
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-4">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">194</CardTitle>
                  <CardDescription>Total Donations by Featured Donors</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">582</CardTitle>
                  <CardDescription>Estimated Lives Saved</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">8</CardTitle>
                  <CardDescription>Chennai Neighborhoods Represented</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">100+</CardTitle>
                  <CardDescription>New Donors Inspired</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Share Your Story */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Share Your Story</CardTitle>
                <CardDescription>
                  Are you a blood donor in Chennai? We would love to feature your story and inspire others to join the movement.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground text-center">
                  Your experience could motivate someone to donate for the first time. Whether you have donated once or a hundred times, your story matters.
                </p>
                <div className="flex justify-center">
                  <Button asChild>
                    <Link href="/contact">
                      Submit Your Story <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container">
            <Card className="bg-gradient-to-r from-primary to-primary/80 border-0 text-primary-foreground">
              <CardHeader className="text-center space-y-6 py-12">
                <CardTitle className="text-3xl md:text-4xl font-bold text-balance">
                  Start Your Donor Journey Today
                </CardTitle>
                <CardDescription className="text-primary-foreground/90 text-lg max-w-xl mx-auto">
                  Every donor has a first time. Make today the day you begin your story of saving lives.
                </CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/register/donor">Register as Donor</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Link href="/how-to-donate">Learn About Donating</Link>
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
