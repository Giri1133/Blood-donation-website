"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function EmergencyRequestForm() {
  const [requiredByDate, setRequiredByDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // TODO: Implement actual emergency request logic with database
    console.log("[v0] Emergency request form submitted")

    setIsSubmitting(false)
    alert("Emergency request posted successfully! Nearby donors will be notified.")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Emergency Request Details</CardTitle>
        <CardDescription>Provide complete information to help donors respond quickly</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Blood Requirements */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Blood Requirements</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="bloodType">
                  Blood Type Needed <span className="text-destructive">*</span>
                </Label>
                <Select required>
                  <SelectTrigger id="bloodType">
                    <SelectValue placeholder="Select blood type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A+">A+</SelectItem>
                    <SelectItem value="A-">A-</SelectItem>
                    <SelectItem value="B+">B+</SelectItem>
                    <SelectItem value="B-">B-</SelectItem>
                    <SelectItem value="AB+">AB+</SelectItem>
                    <SelectItem value="AB-">AB-</SelectItem>
                    <SelectItem value="O+">O+</SelectItem>
                    <SelectItem value="O-">O-</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="units">
                  Units Needed <span className="text-destructive">*</span>
                </Label>
                <Input id="units" type="number" min="1" placeholder="2" required />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="urgency">
                  Urgency Level <span className="text-destructive">*</span>
                </Label>
                <Select required>
                  <SelectTrigger id="urgency">
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="critical">Critical - Immediate</SelectItem>
                    <SelectItem value="urgent">Urgent - Within 24 hours</SelectItem>
                    <SelectItem value="moderate">Moderate - Within 3 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>
                  Required By <span className="text-destructive">*</span>
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !requiredByDate && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 size-4" />
                      {requiredByDate ? format(requiredByDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={requiredByDate} onSelect={setRequiredByDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason">
                Medical Reason <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="reason"
                placeholder="Please describe the medical situation requiring blood transfusion"
                rows={3}
                required
              />
            </div>
          </div>

          {/* Hospital Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Hospital Information</h3>

            <div className="space-y-2">
              <Label htmlFor="hospitalName">
                Hospital Name <span className="text-destructive">*</span>
              </Label>
              <Input id="hospitalName" placeholder="City General Hospital" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="hospitalAddress">
                Hospital Address <span className="text-destructive">*</span>
              </Label>
              <Input id="hospitalAddress" placeholder="123 Medical Center Dr" required />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="city">
                  City <span className="text-destructive">*</span>
                </Label>
                <Input id="city" placeholder="Mumbai" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">
                  State <span className="text-destructive">*</span>
                </Label>
                <Input id="state" placeholder="Maharashtra" required />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Information</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contactPerson">
                  Contact Person <span className="text-destructive">*</span>
                </Label>
                <Input id="contactPerson" placeholder="Dr. Smith" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPhone">
                  Contact Phone <span className="text-destructive">*</span>
                </Label>
                <Input id="contactPhone" type="tel" placeholder="+91 98765 43210" required />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Posting Request..." : "Post Emergency Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
