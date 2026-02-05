"use client"

import React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, AlertCircle, 
  Building2, Users, CheckCircle2
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Emergency Helpline",
      value: "+91 44 2829 1000",
      description: "Available 24/7 for urgent blood requests",
      highlight: true,
    },
    {
      icon: Phone,
      title: "General Enquiries",
      value: "+91 44 2829 1001",
      description: "Mon-Sat, 9 AM - 6 PM",
      highlight: false,
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "contact@bloodlinkchennai.org",
      description: "We respond within 24 hours",
      highlight: false,
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "+91 98410 12345",
      description: "Quick queries and donor coordination",
      highlight: false,
    },
  ]

  const offices = [
    {
      name: "Head Office - T. Nagar",
      address: "45, 2nd Main Road, T. Nagar, Chennai - 600017",
      phone: "+91 44 2829 1000",
      hours: "Mon-Sat: 9 AM - 6 PM",
    },
    {
      name: "Anna Nagar Coordination Center",
      address: "12, 3rd Avenue, Anna Nagar East, Chennai - 600102",
      phone: "+91 44 2829 1002",
      hours: "Mon-Sat: 9 AM - 5 PM",
    },
    {
      name: "OMR Support Center",
      address: "Tidel Park, Module 5, OMR, Chennai - 600096",
      phone: "+91 44 2829 1003",
      hours: "Mon-Fri: 10 AM - 6 PM",
    },
  ]

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <Card className="max-w-md w-full mx-4">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex size-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="size-8 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-2xl">Message Sent!</CardTitle>
              <CardDescription>
                Thank you for reaching out. Our team will get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-28">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="outline" className="border-primary text-primary">
                Get in Touch
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                Contact BloodLink Chennai
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Whether you need blood urgently, want to organize a donation camp, or have questions about becoming a donor, we are here to help. Reach out to us through any of the channels below.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="bg-primary text-primary-foreground py-4">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <AlertCircle className="size-6" />
              <p className="font-medium">
                For emergency blood requests, call our 24/7 helpline:{" "}
                <a href="tel:+914428291000" className="underline font-bold">
                  +91 44 2829 1000
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactMethods.map((method) => (
                <Card key={method.title} className={method.highlight ? "border-primary bg-primary/5" : ""}>
                  <CardHeader>
                    <div className={`flex size-12 items-center justify-center rounded-lg mb-4 ${
                      method.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10"
                    }`}>
                      <method.icon className={`size-6 ${method.highlight ? "" : "text-primary"}`} />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription className="font-medium text-foreground">
                      {method.value}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Office Locations */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Send Us a Message</h2>
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input id="name" placeholder="Your name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency">Emergency Blood Request</SelectItem>
                            <SelectItem value="donor">Donor Registration Help</SelectItem>
                            <SelectItem value="camp">Organize Blood Donation Camp</SelectItem>
                            <SelectItem value="partnership">Hospital/Blood Bank Partnership</SelectItem>
                            <SelectItem value="volunteer">Volunteer with Us</SelectItem>
                            <SelectItem value="feedback">Feedback/Suggestions</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Please describe your query in detail..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Office Locations */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Our Offices in Chennai</h2>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <Card key={office.name}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                            <Building2 className="size-5 text-primary" />
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-semibold">{office.name}</h3>
                            <div className="space-y-1 text-sm text-muted-foreground">
                              <div className="flex items-start gap-2">
                                <MapPin className="size-4 mt-0.5 shrink-0" />
                                <span>{office.address}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="size-4 shrink-0" />
                                <span>{office.phone}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="size-4 shrink-0" />
                                <span>{office.hours}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner With Us */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Partner With Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join our mission to ensure no one in Chennai suffers due to blood shortage
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                      <Building2 className="size-7 text-primary" />
                    </div>
                  </div>
                  <CardTitle>Hospitals & Blood Banks</CardTitle>
                  <CardDescription>
                    Partner with us to list your blood bank and receive donor referrals
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex size-14 items-center justify-center rounded-full bg-accent/10">
                      <Users className="size-7 text-accent" />
                    </div>
                  </div>
                  <CardTitle>Corporate Partners</CardTitle>
                  <CardDescription>
                    Organize blood donation camps at your workplace as part of CSR
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                      <MessageSquare className="size-7 text-primary" />
                    </div>
                  </div>
                  <CardTitle>Volunteers</CardTitle>
                  <CardDescription>
                    Join our team of volunteers who help coordinate donations across Chennai
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
