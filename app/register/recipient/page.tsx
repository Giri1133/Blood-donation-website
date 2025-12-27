import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RecipientRegistrationForm } from "@/components/recipient-registration-form"

export default function RecipientRegistrationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-2xl">
          <div className="text-center space-y-2 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Register as a Recipient</h1>
            <p className="text-muted-foreground">Create your profile to search for blood donors and post requests</p>
          </div>
          <RecipientRegistrationForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
