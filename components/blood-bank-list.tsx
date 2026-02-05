import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, CheckCircle2 } from "lucide-react"

export function BloodBankList() {
  // Mock data - will be replaced with database queries
  const bloodBanks = [
    {
      id: "1",
      name: "AIIMS Blood Bank",
      address: "Ansari Nagar East, New Delhi, Delhi 110029",
      phone: "+91 11 2658 8500",
      hours: "24/7",
      verified: true,
      inventory: [
        { type: "A+", units: 45 },
        { type: "A-", units: 12 },
        { type: "B+", units: 38 },
        { type: "B-", units: 8 },
        { type: "AB+", units: 15 },
        { type: "AB-", units: 5 },
        { type: "O+", units: 52 },
        { type: "O-", units: 18 },
      ],
    },
    {
      id: "2",
      name: "Tata Memorial Blood Bank",
      address: "Dr. E Borges Road, Parel, Mumbai, Maharashtra 400012",
      phone: "+91 22 2417 7000",
      hours: "Mon-Sat 8AM-8PM",
      verified: true,
      inventory: [
        { type: "A+", units: 32 },
        { type: "A-", units: 10 },
        { type: "B+", units: 28 },
        { type: "B-", units: 6 },
        { type: "AB+", units: 12 },
        { type: "AB-", units: 4 },
        { type: "O+", units: 40 },
        { type: "O-", units: 15 },
      ],
    },
    {
      id: "3",
      name: "CMC Blood Bank",
      address: "Ida Scudder Road, Vellore, Tamil Nadu 632004",
      phone: "+91 416 228 1000",
      hours: "24/7",
      verified: true,
      inventory: [
        { type: "A+", units: 28 },
        { type: "A-", units: 8 },
        { type: "B+", units: 22 },
        { type: "B-", units: 5 },
        { type: "AB+", units: 10 },
        { type: "AB-", units: 3 },
        { type: "O+", units: 35 },
        { type: "O-", units: 12 },
      ],
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {bloodBanks.map((bank) => (
        <Card key={bank.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  {bank.name}
                  {bank.verified && <CheckCircle2 className="size-5 text-primary" />}
                </CardTitle>
                <CardDescription className="mt-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="size-4 mt-0.5 shrink-0" />
                    <span>{bank.address}</span>
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
                <span>{bank.hours}</span>
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

            <Button className="w-full bg-transparent" variant="outline">
              Contact Blood Bank
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
