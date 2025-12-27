import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Droplet, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary">
            <Droplet className="size-6 text-primary-foreground fill-primary-foreground" />
          </div>
          <span className="font-semibold text-lg">BloodLink</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/donors" className="text-sm font-medium hover:text-primary transition-colors">
            Find Donors
          </Link>
          <Link href="/blood-banks" className="text-sm font-medium hover:text-primary transition-colors">
            Blood Banks
          </Link>
          <Link href="/emergency" className="text-sm font-medium hover:text-primary transition-colors">
            Emergency Requests
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About Us
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="hidden md:inline-flex bg-transparent">
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/register">Register</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/donors" className="text-sm font-medium hover:text-primary transition-colors">
                  Find Donors
                </Link>
                <Link href="/blood-banks" className="text-sm font-medium hover:text-primary transition-colors">
                  Blood Banks
                </Link>
                <Link href="/emergency" className="text-sm font-medium hover:text-primary transition-colors">
                  Emergency Requests
                </Link>
                <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                  About Us
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Button asChild variant="outline">
                    <Link href="/login">Sign In</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/register">Register</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
