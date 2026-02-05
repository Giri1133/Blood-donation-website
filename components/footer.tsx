import Link from "next/link"
import { Droplet, Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary">
                <Droplet className="size-6 text-primary-foreground fill-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg leading-tight">BloodLink Chennai</span>
                <span className="text-xs text-muted-foreground">Connecting Lives, Saving Chennai</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Serving Chennai and surrounding areas since 2020. Our mission is to ensure no patient in our city suffers due to lack of blood. Join our community of over 5,000 donors.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-primary" />
                <span>Emergency Helpline: +91 44 2829 1000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-primary" />
                <span>contact@bloodlinkchennai.org</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                <span>T. Nagar, Chennai - 600017</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-primary" />
                <span>24/7 Emergency Support</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Donors</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/register/donor" className="text-muted-foreground hover:text-foreground transition-colors">
                  Register as Donor
                </Link>
              </li>
              <li>
                <Link href="/how-to-donate#eligibility" className="text-muted-foreground hover:text-foreground transition-colors">
                  Eligibility Criteria
                </Link>
              </li>
              <li>
                <Link href="/how-to-donate" className="text-muted-foreground hover:text-foreground transition-colors">
                  Donation Process
                </Link>
              </li>
              <li>
                <Link href="/how-to-donate#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                  Benefits of Donating
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-muted-foreground hover:text-foreground transition-colors">
                  Donor Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Find Blood</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/donors" className="text-muted-foreground hover:text-foreground transition-colors">
                  Search Donors
                </Link>
              </li>
              <li>
                <Link href="/emergency/new" className="text-muted-foreground hover:text-foreground transition-colors">
                  Post Emergency Request
                </Link>
              </li>
              <li>
                <Link href="/blood-banks" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blood Banks in Chennai
                </Link>
              </li>
              <li>
                <Link href="/emergency" className="text-muted-foreground hover:text-foreground transition-colors">
                  Active Requests
                </Link>
              </li>
              <li>
                <Link href="/register/recipient" className="text-muted-foreground hover:text-foreground transition-colors">
                  Register as Recipient
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/how-to-donate#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>2025 BloodLink Chennai. All rights reserved. Made with care for Namma Chennai.</p>
            <div className="flex items-center gap-4">
              <span className="text-xs">Supported by Tamil Nadu State Blood Transfusion Council</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
