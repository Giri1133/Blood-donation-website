import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, CheckCircle2, XCircle } from "lucide-react"

export function AdminPendingApprovals() {
  // Mock data - will be replaced with database queries
  const pendingApprovals = [
    {
      id: "1",
      type: "Blood Bank",
      name: "Metro Blood Center",
      location: "Boston, MA",
      licenseNumber: "BB-MA-045",
      submittedDate: "2 days ago",
    },
    {
      id: "2",
      type: "Blood Bank",
      name: "Valley Medical Blood Bank",
      location: "San Jose, CA",
      licenseNumber: "BB-CA-127",
      submittedDate: "4 days ago",
    },
    {
      id: "3",
      type: "Blood Bank",
      name: "Riverside Blood Services",
      location: "Austin, TX",
      licenseNumber: "BB-TX-089",
      submittedDate: "1 week ago",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pending Approvals</CardTitle>
        <CardDescription>Blood banks awaiting verification</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {pendingApprovals.map((item) => (
          <div key={item.id} className="flex items-start justify-between gap-4 rounded-lg border p-4">
            <div className="flex items-start gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <Building2 className="size-5 text-primary" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm">{item.name}</p>
                  <Badge variant="outline" className="text-xs">
                    {item.type}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.location}</p>
                <p className="text-xs text-muted-foreground">License: {item.licenseNumber}</p>
                <p className="text-xs text-muted-foreground">Submitted {item.submittedDate}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="bg-green-50 border-green-200 hover:bg-green-100">
                <CheckCircle2 className="size-4 text-green-600" />
              </Button>
              <Button size="sm" variant="outline" className="bg-red-50 border-red-200 hover:bg-red-100">
                <XCircle className="size-4 text-red-600" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
