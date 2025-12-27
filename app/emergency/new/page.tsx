import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmergencyRequestForm } from "@/components/emergency-request-form"

export default function NewEmergencyRequestPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-2xl">
          <div className="text-center space-y-2 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Post Emergency Blood Request</h1>
            <p className="text-muted-foreground">Fill in the details to alert nearby donors</p>
          </div>
          <EmergencyRequestForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
