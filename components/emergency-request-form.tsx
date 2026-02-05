"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useDataStore } from "@/lib/data-store"

export function EmergencyRequestForm() {
  const router = useRouter()
  const { addEmergencyRequest } = useDataStore()
  const [requiredByDate, setRequiredByDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [bloodType, setBloodType] = useState("")
  const [urgency, setUrgency] = useState<"critical" | "urgent" | "moderate" | "">("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    
    const request = {
      bloodType: bloodType,
      units: Number(formData.get("units")),
      hospital: formData.get("hospitalName") as string,
      address: formData.get("hospitalAddress") as string,
      city: formData.get("city") as string,
      state: formData.get("state") as string,
      contactPerson: formData.get("contactPerson") as string,
      contactPhone: formData.get("contactPhone") as string,
      urgency: urgency as "critical" | "urgent" | "moderate",
      reason: formData.get("reason") as string,
      requiredBy: requiredByDate ? format(requiredByDate, "PPP") : "As soon as possible",
    }

    // Add to data store
    addEmergencyRequest(request)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSuccess(true)

    setTimeout(() => {
      router.push("/emergency")
    }, 2000)
  }

  if (isSuccess) {
    return (
      <Card>
        <CardContent className="py-16">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="size-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold">Request Posted Successfully!</h2>
            <p className="text-muted-foreground">
              Your emergency blood request has been posted. Nearby donors will be able to see and respond to it.
            </p>
            <p className="text-sm text-muted-foreground">
              Redirecting to emergency requests...
            </p>
          </div>
        </CardContent>
      </Card>
    )
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
                <Select value={bloodType} onValueChange={setBloodType} required>
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
                <Input id="units" name="units" type="number" min="1" placeholder="2" required />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="urgency">
                  Urgency Level <span className="text-destructive">*</span>
                </Label>
                <Select value={urgency} onValueChange={(v) => setUrgency(v as typeof urgency)} required>
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
                      type="button"
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-transparent",
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
                name="reason"
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
              <Input id="hospitalName" name="hospitalName" placeholder="AIIMS Hospital" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="hospitalAddress">
                Hospital Address <span className="text-destructive">*</span>
              </Label>
              <Input id="hospitalAddress" name="hospitalAddress" placeholder="123 Medical Center Dr" required />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="city">
                  City <span className="text-destructive">*</span>
                </Label>
                <Input id="city" name="city" placeholder="Mumbai" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">
                  State <span className="text-destructive">*</span>
                </Label>
                <Input id="state" name="state" placeholder="Maharashtra" required />
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
                <Input id="contactPerson" name="contactPerson" placeholder="Dr. Sharma" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPhone">
                  Contact Phone <span className="text-destructive">*</span>
                </Label>
                <Input id="contactPhone" name="contactPhone" type="tel" placeholder="+91 98765 43210" required />
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
