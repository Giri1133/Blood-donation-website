import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmergencyRequestList } from "@/components/emergency-request-list"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus } from "lucide-react"

export default function EmergencyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Emergency Blood Requests</h1>
              <p className="text-muted-foreground">Urgent requests from hospitals and patients in need</p>
            </div>
            <Button asChild size="lg">
              <Link href="/emergency/new">
                <Plus className="size-5 mr-2" />
                Post Request
              </Link>
            </Button>
          </div>
          <EmergencyRequestList />
        </div>
      </main>
      <Footer />
    </div>
  )
}
