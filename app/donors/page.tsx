import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DonorSearch } from "@/components/donor-search"
import { DonorList } from "@/components/donor-list"

function DonorContent() {
  return (
    <>
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Find Blood Donors</h1>
        <p className="text-muted-foreground">Search for available donors by blood type and location</p>
      </div>
      <DonorSearch />
      <DonorList />
    </>
  )
}

export default function DonorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container">
          <Suspense fallback={null}>
            <DonorContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}
