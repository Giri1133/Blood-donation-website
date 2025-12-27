import { AdminHeader } from "@/components/admin-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Droplet, Building2, AlertCircle, Activity } from "lucide-react"
import { AdminRecentActivity } from "@/components/admin-recent-activity"
import { AdminPendingApprovals } from "@/components/admin-pending-approvals"

export default function AdminDashboard() {
  // Mock statistics - will be replaced with database queries
  const stats = {
    totalDonors: 5247,
    donorsChange: "+12%",
    totalRecipients: 3156,
    recipientsChange: "+8%",
    bloodBanks: 203,
    bloodBanksChange: "+3",
    emergencyRequests: 45,
    emergencyChange: "-5",
    totalDonations: 12543,
    donationsChange: "+15%",
    activeUsers: 8403,
    usersChange: "+10%",
  }

  return (
    <div className="flex min-h-screen flex-col bg-muted/30">
      <AdminHeader />

      <main className="flex-1 py-8">
        <div className="container space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground">Overview of platform statistics and activity</p>
          </div>

          {/* Statistics Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Donors</CardTitle>
                <Users className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalDonors.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-600">{stats.donorsChange}</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Recipients</CardTitle>
                <Users className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalRecipients.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-600">{stats.recipientsChange}</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Blood Banks</CardTitle>
                <Building2 className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.bloodBanks}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-600">{stats.bloodBanksChange}</span> new this month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Emergencies</CardTitle>
                <AlertCircle className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.emergencyRequests}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-600">{stats.emergencyChange}</span> from yesterday
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
                <Droplet className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalDonations.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-600">{stats.donationsChange}</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <Activity className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.activeUsers.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-600">{stats.usersChange}</span> from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Content Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            <AdminPendingApprovals />
            <AdminRecentActivity />
          </div>
        </div>
      </main>
    </div>
  )
}
