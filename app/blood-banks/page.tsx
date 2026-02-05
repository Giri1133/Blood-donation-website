"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BloodBankList } from "@/components/blood-bank-list"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useDataStore } from "@/lib/data-store"
import { Search, X } from "lucide-react"

export default function BloodBanksPage() {
  const { bloodBanks, searchBloodBanks } = useDataStore()
  const [filteredBanks, setFilteredBanks] = useState(bloodBanks)
  const [city, setCity] = useState("")
  const [bloodType, setBloodType] = useState("")
  const [isFiltered, setIsFiltered] = useState(false)

  useEffect(() => {
    if (!isFiltered) {
      setFilteredBanks(bloodBanks)
    }
  }, [bloodBanks, isFiltered])

  const handleSearch = () => {
    const results = searchBloodBanks({
      city: city || undefined,
      bloodType: bloodType || undefined,
    })
    setFilteredBanks(results)
    setIsFiltered(true)
  }

  const handleClear = () => {
    setCity("")
    setBloodType("")
    setFilteredBanks(bloodBanks)
    setIsFiltered(false)
  }

  const hasFilters = city || bloodType

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Find Blood Banks</h1>
            <p className="text-muted-foreground">Search our network of verified blood banks and check inventory</p>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-4">
            <Input 
              placeholder="City (e.g., Mumbai)" 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <Select value={bloodType} onValueChange={setBloodType}>
              <SelectTrigger>
                <SelectValue placeholder="Blood Type Available" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="A+">A+</SelectItem>
                <SelectItem value="A-">A-</SelectItem>
                <SelectItem value="B+">B+</SelectItem>
                <SelectItem value="B-">B-</SelectItem>
                <SelectItem value="AB+">AB+</SelectItem>
                <SelectItem value="AB-">AB-</SelectItem>
                <SelectItem value="O+">O+</SelectItem>
                <SelectItem value="O-">O-</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleSearch}>
              <Search className="size-4 mr-2" />
              Search
            </Button>
            {hasFilters && (
              <Button onClick={handleClear} variant="outline" className="bg-transparent">
                <X className="size-4 mr-2" />
                Clear
              </Button>
            )}
          </div>

          <div className="mb-6 flex items-center gap-3">
            <h2 className="text-xl font-semibold">
              {isFiltered ? "Search Results" : "All Blood Banks"}
            </h2>
            <Badge variant="secondary">{filteredBanks.length} found</Badge>
          </div>

          <BloodBankList bloodBanks={filteredBanks} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
