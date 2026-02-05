"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Phone, Mail } from "lucide-react"
import type { Donor } from "@/lib/data-store"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface DonorListProps {
  donors: Donor[]
}

function getLastDonationText(lastDonation: string | null): string {
  if (!lastDonation) return "No previous donations"
  
  const date = new Date(lastDonation)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  
  if (diffDays < 30) return `${diffDays} days ago`
  if (diffDays < 60) return "1 month ago"
  const months = Math.floor(diffDays / 30)
  return `${months} months ago`
}

export function DonorList({ donors }: DonorListProps) {
  const [selectedDonor, setSelectedDonor] = useState<Donor | null>(null)

  if (donors.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No donors found matching your criteria.</p>
        <p className="text-muted-foreground text-sm mt-2">Try adjusting your search filters.</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {donors.map((donor) => (
          <Card key={donor.id} className={!donor.available ? "opacity-60" : ""}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {donor.bloodType}
                  </div>
                  <div>
                    <CardTitle className="text-base">{donor.name}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="size-3" />
                      <span>
                        {donor.city}, {donor.state}
                      </span>
                    </div>
                  </div>
                </div>
                {donor.available ? (
                  <Badge className="bg-green-500 hover:bg-green-600">Available</Badge>
                ) : (
                  <Badge variant="secondary">Not Available</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="size-4" />
                <span>Last donation: {getLastDonationText(donor.lastDonation)}</span>
              </div>

              <Button 
                className="w-full" 
                disabled={!donor.available}
                onClick={() => setSelectedDonor(donor)}
              >
                {donor.available ? "Contact Donor" : "Not Available"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedDonor} onOpenChange={() => setSelectedDonor(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact {selectedDonor?.name}</DialogTitle>
            <DialogDescription>
              Reach out to this donor for blood donation
            </DialogDescription>
          </DialogHeader>
          {selectedDonor && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  {selectedDonor.bloodType}
                </div>
                <div>
                  <p className="font-semibold text-lg">{selectedDonor.name}</p>
                  <p className="text-muted-foreground">
                    {selectedDonor.city}, {selectedDonor.state}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-center gap-3">
                  <Phone className="size-5 text-muted-foreground" />
                  <a href={`tel:${selectedDonor.phone}`} className="text-primary hover:underline">
                    {selectedDonor.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="size-5 text-muted-foreground" />
                  <a href={`mailto:${selectedDonor.email}`} className="text-primary hover:underline">
                    {selectedDonor.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="size-5 text-muted-foreground" />
                  <span>{selectedDonor.address}, {selectedDonor.city}, {selectedDonor.state} - {selectedDonor.pincode}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button asChild className="flex-1">
                  <a href={`tel:${selectedDonor.phone}`}>Call Now</a>
                </Button>
                <Button asChild variant="outline" className="flex-1 bg-transparent">
                  <a href={`mailto:${selectedDonor.email}`}>Send Email</a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
