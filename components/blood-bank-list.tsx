"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, CheckCircle2, AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { BloodBank } from "@/lib/data-store"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface BloodBankListProps {
  bloodBanks: BloodBank[]
}

export function BloodBankList({ bloodBanks }: BloodBankListProps) {
  const [selectedBank, setSelectedBank] = useState<BloodBank | null>(null)

  if (bloodBanks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No blood banks found matching your criteria.</p>
        <p className="text-muted-foreground text-sm mt-2">Try adjusting your search filters.</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {bloodBanks.map((bank) => (
          <Card key={bank.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {bank.name}
                    {bank.verified ? (
                      <CheckCircle2 className="size-5 text-primary" />
                    ) : (
                      <Badge variant="secondary" className="text-xs">Pending</Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="size-4 mt-0.5 shrink-0" />
                      <span>{bank.address}, {bank.city}, {bank.state} - {bank.pincode}</span>
                    </div>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="size-4 text-muted-foreground" />
                  <span>{bank.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-muted-foreground" />
                  <span>{bank.operatingHours}</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-3">Blood Inventory</h4>
                <div className="grid grid-cols-4 gap-2">
                  {bank.inventory.map((item) => (
                    <div key={item.type} className="flex flex-col items-center gap-1 rounded-lg border p-2 bg-muted/50">
                      <span className="font-semibold text-sm">{item.type}</span>
                      <span
                        className={`text-xs ${
                          item.units > 20 ? "text-green-600" : item.units > 10 ? "text-amber-600" : "text-destructive"
                        }`}
                      >
                        {item.units} units
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                className="w-full bg-transparent" 
                variant="outline"
                onClick={() => setSelectedBank(bank)}
              >
                Contact Blood Bank
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedBank} onOpenChange={() => setSelectedBank(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedBank?.name}
              {selectedBank?.verified && <CheckCircle2 className="size-5 text-primary" />}
            </DialogTitle>
            <DialogDescription>
              Contact this blood bank for availability and donation
            </DialogDescription>
          </DialogHeader>
          {selectedBank && (
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="size-5 text-muted-foreground" />
                  <a href={`tel:${selectedBank.phone}`} className="text-primary hover:underline">
                    {selectedBank.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="size-5 text-muted-foreground" />
                  <span>{selectedBank.operatingHours}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 text-muted-foreground mt-0.5" />
                  <span>{selectedBank.address}, {selectedBank.city}, {selectedBank.state} - {selectedBank.pincode}</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-3">Current Inventory</h4>
                <div className="grid grid-cols-4 gap-2">
                  {selectedBank.inventory.map((item) => (
                    <div key={item.type} className="flex flex-col items-center gap-1 rounded-lg border p-2 bg-muted/50">
                      <span className="font-semibold text-sm">{item.type}</span>
                      <span
                        className={`text-xs font-medium ${
                          item.units > 20 ? "text-green-600" : item.units > 10 ? "text-amber-600" : "text-destructive"
                        }`}
                      >
                        {item.units} units
                      </span>
                      {item.units <= 5 && item.units > 0 && (
                        <AlertTriangle className="size-3 text-amber-500" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <Button asChild className="w-full">
                <a href={`tel:${selectedBank.phone}`}>Call Blood Bank</a>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
