"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export function BloodBankRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // TODO: Implement actual registration logic with database
    console.log("[v0] Blood bank registration form submitted")

    setIsSubmitting(false)
    alert("Registration successful! Your application is pending verification.")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Blood Bank Information</CardTitle>
        <CardDescription>Please provide complete information for verification</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Organization Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Organization Information</h3>

            <div className="space-y-2">
              <Label htmlFor="name">
                Blood Bank Name <span className="text-destructive">*</span>
              </Label>
              <Input id="name" placeholder="Central Blood Bank" required />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="licenseNumber">
                  License Number <span className="text-destructive">*</span>
                </Label>
                <Input id="licenseNumber" placeholder="BB-NY-001" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Official Email <span className="text-destructive">*</span>
                </Label>
                <Input id="email" type="email" placeholder="contact@bloodbank.com" required />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Contact Number <span className="text-destructive">*</span>
                </Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="operatingHours">
                  Operating Hours <span className="text-destructive">*</span>
                </Label>
                <Input id="operatingHours" placeholder="24/7 or Mon-Fri 9AM-6PM" required />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="password">
                  Password <span className="text-destructive">*</span>
                </Label>
                <Input id="password" type="password" placeholder="••••••••" required minLength={8} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">
                  Confirm Password <span className="text-destructive">*</span>
                </Label>
                <Input id="confirmPassword" type="password" placeholder="••••••••" required minLength={8} />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Address Information</h3>

            <div className="space-y-2">
              <Label htmlFor="address">
                Street Address <span className="text-destructive">*</span>
              </Label>
              <Input id="address" placeholder="123 Main St" required />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="city">
                  City <span className="text-destructive">*</span>
                </Label>
                <Input id="city" placeholder="New York" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">
                  State <span className="text-destructive">*</span>
                </Label>
                <Input id="state" placeholder="NY" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pincode">
                  Pincode <span className="text-destructive">*</span>
                </Label>
                <Input id="pincode" placeholder="10001" required />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Additional Information</h3>

            <div className="space-y-2">
              <Label htmlFor="facilities">Facilities and Services</Label>
              <Textarea
                id="facilities"
                placeholder="Describe available facilities, services, and certifications..."
                rows={4}
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm font-normal cursor-pointer leading-relaxed">
                I certify that this blood bank is properly licensed and all information provided is accurate. I
                understand that verification is required before activation. <span className="text-destructive">*</span>
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit for Verification"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
