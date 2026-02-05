import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"

export function DonorList() {
  // Mock data - will be replaced with database queries
  const donors = [
    {
      id: "1",
      name: "Rahul S.",
      bloodType: "O+",
      city: "Mumbai",
      state: "Maharashtra",
      lastDonation: "3 months ago",
      available: true,
    },
    {
      id: "2",
      name: "Priya M.",
      bloodType: "A-",
      city: "Delhi",
      state: "Delhi",
      lastDonation: "5 months ago",
      available: true,
    },
    {
      id: "3",
      name: "Amit K.",
      bloodType: "B+",
      city: "Bengaluru",
      state: "Karnataka",
      lastDonation: "2 months ago",
      available: true,
    },
    {
      id: "4",
      name: "Sneha T.",
      bloodType: "AB-",
      city: "Chennai",
      state: "Tamil Nadu",
      lastDonation: "4 months ago",
      available: true,
    },
    {
      id: "5",
      name: "Vikram R.",
      bloodType: "O-",
      city: "Hyderabad",
      state: "Telangana",
      lastDonation: "6 months ago",
      available: true,
    },
    {
      id: "6",
      name: "Ananya P.",
      bloodType: "A+",
      city: "Kolkata",
      state: "West Bengal",
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
