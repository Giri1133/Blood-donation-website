"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DonorSearch } from "@/components/donor-search"
import { DonorList } from "@/components/donor-list"
import { useDataStore } from "@/lib/data-store"
import { Badge } from "@/components/ui/badge"

export default function DonorsPage() {
  const { donors, searchDonors } = useDataStore()
  const [filteredDonors, setFilteredDonors] = useState(donors)
  const [isFiltered, setIsFiltered] = useState(false)

  useEffect(() => {
    if (!isFiltered) {
      setFilteredDonors(donors)
    }
  }, [donors, isFiltered])

  const handleSearch = (filters: { bloodType?: string; city?: string; state?: string }) => {
    const results = searchDonors(filters)
    setFilteredDonors(results)
    setIsFiltered(true)
  }

  const handleClear = () => {
    setFilteredDonors(donors)
    setIsFiltered(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Find Blood Donors</h1>
            <p className="text-muted-foreground">
              Search our network of verified donors by blood type and location
            </p>
          </div>

          <DonorSearch onSearch={handleSearch} onClear={handleClear} />
          
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold">
                {isFiltered ? "Search Results" : "All Donors"}
              </h2>
              <Badge variant="secondary">{filteredDonors.length} found</Badge>
            </div>
          </div>

          <DonorList donors={filteredDonors} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
