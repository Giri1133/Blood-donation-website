import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"

export function DonorList() {
  // Mock data - will be replaced with database queries
  const donors = [
    {
      id: "1",
      name: "John D.",
      bloodType: "O+",
      city: "New York",
      state: "NY",
      lastDonation: "3 months ago",
      available: true,
    },
    {
      id: "2",
      name: "Sarah M.",
      bloodType: "A-",
      city: "Los Angeles",
      state: "CA",
      lastDonation: "5 months ago",
      available: true,
    },
    {
      id: "3",
      name: "Michael R.",
      bloodType: "B+",
      city: "Chicago",
      state: "IL",
      lastDonation: "2 months ago",
      available: true,
    },
    {
      id: "4",
      name: "Emily T.",
      bloodType: "AB-",
      city: "Houston",
      state: "TX",
      lastDonation: "4 months ago",
      available: true,
    },
    {
      id: "5",
      name: "David K.",
      bloodType: "O-",
      city: "Phoenix",
      state: "AZ",
      lastDonation: "6 months ago",
      available: true,
    },
    {
      id: "6",
      name: "Lisa W.",
      bloodType: "A+",
      city: "Philadelphia",
      state: "PA",
      lastDonation: "1 month ago",
      available: false,
    },
  ]

  return (
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
              {donor.available && <Badge className="bg-green-500 hover:bg-green-600">Available</Badge>}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="size-4" />
              <span>Last donation: {donor.lastDonation}</span>
            </div>

            <Button className="w-full" disabled={!donor.available}>
              {donor.available ? "Contact Donor" : "Not Available"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
