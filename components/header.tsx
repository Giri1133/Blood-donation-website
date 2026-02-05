import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Droplet, Menu, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary">
            <Droplet className="size-6 text-primary-foreground fill-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-lg leading-tight">BloodLink</span>
            <span className="text-[10px] text-muted-foreground leading-tight">Chennai</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About Us
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              How to Donate <ChevronDown className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/how-to-donate">Donation Process</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/how-to-donate#eligibility">Eligibility Criteria</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/how-to-donate#benefits">Benefits of Donating</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              Find Blood <ChevronDown className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/donors">Search Donors</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blood-banks">Blood Banks</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/emergency">Emergency Requests</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/stories" className="text-sm font-medium hover:text-primary transition-colors">
            Donor Stories
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact Us
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
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex items-center gap-2 mb-8">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary">
                  <Droplet className="size-6 text-primary-foreground fill-primary-foreground" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-lg leading-tight">BloodLink</span>
                  <span className="text-xs text-muted-foreground leading-tight">Chennai</span>
                </div>
              </div>
              <nav className="flex flex-col gap-4">
                <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                  About Us
                </Link>
                <div className="space-y-2">
                  <span className="text-sm font-medium text-muted-foreground">How to Donate</span>
                  <div className="pl-4 space-y-2">
                    <Link href="/how-to-donate" className="block text-sm hover:text-primary transition-colors">
                      Donation Process
                    </Link>
                    <Link href="/how-to-donate#eligibility" className="block text-sm hover:text-primary transition-colors">
                      Eligibility Criteria
                    </Link>
                    <Link href="/how-to-donate#benefits" className="block text-sm hover:text-primary transition-colors">
                      Benefits of Donating
                    </Link>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-sm font-medium text-muted-foreground">Find Blood</span>
                  <div className="pl-4 space-y-2">
                    <Link href="/donors" className="block text-sm hover:text-primary transition-colors">
                      Search Donors
                    </Link>
                    <Link href="/blood-banks" className="block text-sm hover:text-primary transition-colors">
                      Blood Banks
                    </Link>
                    <Link href="/emergency" className="block text-sm hover:text-primary transition-colors">
                      Emergency Requests
                    </Link>
                  </div>
                </div>
                <Link href="/stories" className="text-sm font-medium hover:text-primary transition-colors">
                  Donor Stories
                </Link>
                <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                  Contact Us
                </Link>
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                  <Button asChild variant="outline" className="bg-transparent">
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
