import Link from "next/link"
import { Droplet } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary">
                <Droplet className="size-6 text-primary-foreground fill-primary-foreground" />
              </div>
              <span className="font-semibold text-lg">BloodLink</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting blood donors with those in need. Every donation saves lives.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Donors</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/register/donor" className="text-muted-foreground hover:text-foreground">
                  Register as Donor
                </Link>
              </li>
              <li>
                <Link href="/eligibility" className="text-muted-foreground hover:text-foreground">
                  Eligibility Criteria
                </Link>
              </li>
              <li>
                <Link href="/donation-process" className="text-muted-foreground hover:text-foreground">
                  Donation Process
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Recipients</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/register/recipient" className="text-muted-foreground hover:text-foreground">
                  Register as Recipient
                </Link>
              </li>
              <li>
                <Link href="/emergency" className="text-muted-foreground hover:text-foreground">
                  Post Emergency Request
                </Link>
              </li>
              <li>
                <Link href="/blood-banks" className="text-muted-foreground hover:text-foreground">
                  Find Blood Banks
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BloodLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
