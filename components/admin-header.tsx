import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Droplet, LayoutDashboard, Users, Building2, AlertCircle, Settings, LogOut } from "lucide-react"

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary">
            <Droplet className="size-6 text-primary-foreground fill-primary-foreground" />
          </div>
          <span className="font-semibold text-lg">BloodLink Admin</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/admin"
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <LayoutDashboard className="size-4" />
            Dashboard
          </Link>
          <Link
            href="/admin/users"
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <Users className="size-4" />
            Users
          </Link>
          <Link
            href="/admin/blood-banks"
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <Building2 className="size-4" />
            Blood Banks
          </Link>
          <Link
            href="/admin/emergency"
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <AlertCircle className="size-4" />
            Emergencies
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Settings className="size-5" />
          </Button>
          <Button variant="outline">
            <LogOut className="size-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </header>
  )
}
