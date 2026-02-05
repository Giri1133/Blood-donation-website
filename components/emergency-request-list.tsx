import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Clock, User } from "lucide-react"

export function EmergencyRequestList() {
  // Mock data - will be replaced with database queries
  const requests = [
    {
      id: "1",
      bloodType: "O+",
      units: 2,
      hospital: "AIIMS Hospital",
      address: "Ansari Nagar, New Delhi, Delhi",
      contactPerson: "Dr. Sharma",
      contactPhone: "+91 98765 43210",
      urgency: "critical",
      reason: "Emergency surgery - accident victim",
      requiredBy: "Today, 6:00 PM",
      postedTime: "2 hours ago",
      status: "active",
    },
    {
      id: "2",
      bloodType: "A-",
      units: 1,
      hospital: "Fortis Hospital",
      address: "Bannerghatta Road, Bengaluru, Karnataka",
      contactPerson: "Dr. Reddy",
      contactPhone: "+91 98123 45678",
      urgency: "urgent",
      reason: "Cancer treatment - immediate transfusion needed",
      requiredBy: "Tomorrow, 10:00 AM",
      postedTime: "5 hours ago",
      status: "active",
    },
    {
      id: "3",
      bloodType: "B+",
      units: 3,
      hospital: "Apollo Hospital",
      address: "Greams Road, Chennai, Tamil Nadu",
      contactPerson: "Dr. Krishnan",
      contactPhone: "+91 99876 54321",
      urgency: "moderate",
      reason: "Scheduled surgery preparation",
      requiredBy: "In 3 days",
      postedTime: "1 day ago",
      status: "active",
    },
    {
      id: "4",
      bloodType: "AB-",
      units: 1,
      hospital: "Medanta Hospital",
      address: "Sector 38, Gurugram, Haryana",
      contactPerson: "Dr. Gupta",
      contactPhone: "+91 97654 32109",
      urgency: "critical",
      reason: "Severe anemia - urgent transfusion",
      requiredBy: "Today, 8:00 PM",
      postedTime: "3 hours ago",
      status: "active",
    },
  ]

  return (
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
                    <span className="text-xs">{request.address}</span>
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

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <User className="size-4 text-muted-foreground" />
                <span>{request.contactPerson}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-muted-foreground" />
                <span>{request.contactPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-muted-foreground" />
                <span className="text-muted-foreground">Posted {request.postedTime}</span>
              </div>
            </div>

            <Button className="w-full" size="lg">
              Respond to Request
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
