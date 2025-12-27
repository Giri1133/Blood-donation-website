import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BloodBankRegistrationForm } from "@/components/blood-bank-registration-form"

export default function BloodBankRegistrationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-2xl">
          <div className="text-center space-y-2 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Register Blood Bank</h1>
            <p className="text-muted-foreground">Join our network and help save lives in your community</p>
          </div>
          <BloodBankRegistrationForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
