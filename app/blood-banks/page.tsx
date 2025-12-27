import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BloodBankList } from "@/components/blood-bank-list"
import { BloodBankSearch } from "@/components/blood-bank-search"

export default function BloodBanksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container">
          <div className="text-center space-y-2 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Find Blood Banks</h1>
            <p className="text-muted-foreground">Search our network of verified blood banks and check inventory</p>
          </div>
          <BloodBankSearch />
          <BloodBankList />
        </div>
      </main>
      <Footer />
    </div>
  )
}
