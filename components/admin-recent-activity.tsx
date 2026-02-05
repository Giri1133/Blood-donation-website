import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UserPlus, Droplet, AlertCircle, Building2 } from "lucide-react"

export function AdminRecentActivity() {
  // Mock data - will be replaced with database queries
  const activities = [
    {
      id: "1",
      type: "donor",
      title: "New Donor Registration",
      description: "Rahul S. registered as O+ donor in Mumbai",
      time: "5 minutes ago",
      icon: UserPlus,
    },
    {
      id: "2",
      type: "emergency",
      title: "Critical Emergency Request",
      description: "AIIMS Hospital posted urgent O- request",
      time: "12 minutes ago",
      icon: AlertCircle,
    },
    {
      id: "3",
      type: "donation",
      title: "Blood Donation Completed",
      description: "Priya M. donated A- at Tata Memorial Blood Bank",
      time: "1 hour ago",
      icon: Droplet,
    },
    {
      id: "4",
      type: "recipient",
      title: "New Recipient Registration",
      description: "Sneha T. registered as AB+ recipient in Chennai",
      time: "2 hours ago",
      icon: UserPlus,
    },
    {
      id: "5",
      type: "blood_bank",
      title: "Blood Bank Updated Inventory",
      description: "Fortis Blood Centre updated stock levels",
      time: "3 hours ago",
      icon: Building2,
    },
  ]

  const getActivityColor = (type: string) => {
    switch (type) {
      case "emergency":
        return "destructive"
      case "donation":
        return "default"
      default:
        return "secondary"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest platform events and updates</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <div key={activity.id} className="flex items-start gap-4">
              <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                <Icon className="size-5" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm">{activity.title}</p>
                  <Badge variant={getActivityColor(activity.type)} className="text-xs">
                    {activity.type.replace("_", " ")}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
