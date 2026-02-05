"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Clock, User, CheckCircle } from "lucide-react"
import type { EmergencyRequest } from "@/lib/data-store"
import { useDataStore } from "@/lib/data-store"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface EmergencyRequestListProps {
  requests: EmergencyRequest[]
}

export function EmergencyRequestList({ requests }: EmergencyRequestListProps) {
  const { updateEmergencyStatus } = useDataStore()
  const [selectedRequest, setSelectedRequest] = useState<EmergencyRequest | null>(null)
  const [confirmFulfill, setConfirmFulfill] = useState<EmergencyRequest | null>(null)

  const handleFulfill = (request: EmergencyRequest) => {
    updateEmergencyStatus(request.id, "fulfilled")
    setConfirmFulfill(null)
    setSelectedRequest(null)
  }

  if (requests.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No emergency requests found.</p>
        <p className="text-muted-foreground text-sm mt-2">Check back later or adjust your filters.</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {requests.map((request) => (
          <Card key={request.id} className="relative overflow-hidden">
            {request.urgency === "critical" && <div className="absolute top-0 left-0 right-0 h-1 bg-destructive" />}
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                    {request.bloodType}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{request.hospital}</CardTitle>
                    <CardDescription className="flex items-start gap-1 mt-1">
                      <MapPin className="size-3 mt-0.5 shrink-0" />
                      <span className="text-xs">{request.address}, {request.city}, {request.state}</span>
                    </CardDescription>
                  </div>
                </div>
                <Badge
                  variant={
                    request.urgency === "critical"
                      ? "destructive"
                      : request.urgency === "urgent"
                        ? "default"
                        : "secondary"
                  }
                >
                  {request.urgency.toUpperCase()}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Units Needed:</span>
                  <span className="font-semibold">{request.units}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Required By:</span>
                  <span className="font-semibold">{request.requiredBy}</span>
                </div>
              </div>

              <div className="rounded-lg bg-muted/50 p-3 space-y-2">
                <p className="text-sm font-medium">Reason:</p>
                <p className="text-sm text-muted-foreground">{request.reason}</p>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Clock className="size-4 text-muted-foreground" />
                <span className="text-muted-foreground">Posted {request.postedTime}</span>
              </div>

              <Button className="w-full" size="lg" onClick={() => setSelectedRequest(request)}>
                Respond to Request
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedRequest} onOpenChange={() => setSelectedRequest(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Emergency Blood Request</DialogTitle>
            <DialogDescription>
              Contact details for this emergency request
            </DialogDescription>
          </DialogHeader>
          {selectedRequest && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  {selectedRequest.bloodType}
                </div>
                <div>
                  <p className="font-semibold text-lg">{selectedRequest.hospital}</p>
                  <p className="text-muted-foreground text-sm">
                    {selectedRequest.units} unit(s) needed
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-center gap-3">
                  <User className="size-5 text-muted-foreground" />
                  <span>{selectedRequest.contactPerson}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="size-5 text-muted-foreground" />
                  <a href={`tel:${selectedRequest.contactPhone}`} className="text-primary hover:underline">
                    {selectedRequest.contactPhone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="size-5 text-muted-foreground" />
                  <span className="text-sm">{selectedRequest.address}, {selectedRequest.city}, {selectedRequest.state}</span>
                </div>
              </div>

              <div className="rounded-lg bg-muted/50 p-3">
                <p className="text-sm font-medium mb-1">Reason:</p>
                <p className="text-sm text-muted-foreground">{selectedRequest.reason}</p>
              </div>

              <div className="flex gap-3 pt-4">
                <Button asChild className="flex-1">
                  <a href={`tel:${selectedRequest.contactPhone}`}>Call Now</a>
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 bg-transparent"
                  onClick={() => setConfirmFulfill(selectedRequest)}
                >
                  <CheckCircle className="size-4 mr-2" />
                  Mark Fulfilled
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!confirmFulfill} onOpenChange={() => setConfirmFulfill(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Mark Request as Fulfilled?</AlertDialogTitle>
            <AlertDialogDescription>
              This will remove the request from the active list. Only mark as fulfilled if the blood requirement has been met.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => confirmFulfill && handleFulfill(confirmFulfill)}>
              Yes, Mark Fulfilled
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
