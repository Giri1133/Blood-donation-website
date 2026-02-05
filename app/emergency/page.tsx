"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmergencyRequestList } from "@/components/emergency-request-list"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useDataStore } from "@/lib/data-store"
import Link from "next/link"
import { Plus, X } from "lucide-react"

export default function EmergencyPage() {
  const { emergencyRequests, searchEmergencyRequests } = useDataStore()
  const [filteredRequests, setFilteredRequests] = useState(emergencyRequests.filter(r => r.status === "active"))
  const [bloodType, setBloodType] = useState("")
  const [urgency, setUrgency] = useState("")
  const [isFiltered, setIsFiltered] = useState(false)

  useEffect(() => {
    if (!isFiltered) {
      setFilteredRequests(emergencyRequests.filter(r => r.status === "active"))
    }
  }, [emergencyRequests, isFiltered])

  const handleSearch = () => {
    const results = searchEmergencyRequests({
      bloodType: bloodType || undefined,
      urgency: urgency || undefined,
    })
    setFilteredRequests(results)
    setIsFiltered(true)
  }

  const handleClear = () => {
    setBloodType("")
    setUrgency("")
    setFilteredRequests(emergencyRequests.filter(r => r.status === "active"))
    setIsFiltered(false)
  }

  const hasFilters = bloodType || urgency

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
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

          <div className="mb-8 grid gap-4 md:grid-cols-4">
            <Select value={bloodType} onValueChange={setBloodType}>
              <SelectTrigger>
                <SelectValue placeholder="Blood Type" />
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
            <Select value={urgency} onValueChange={setUrgency}>
              <SelectTrigger>
                <SelectValue placeholder="Urgency Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleSearch}>
              Filter Requests
            </Button>
            {hasFilters && (
              <Button onClick={handleClear} variant="outline" className="bg-transparent">
                <X className="size-4 mr-2" />
                Clear Filters
              </Button>
            )}
          </div>

          <div className="mb-6 flex items-center gap-3">
            <h2 className="text-xl font-semibold">
              {isFiltered ? "Filtered Results" : "Active Requests"}
            </h2>
            <Badge variant="secondary">{filteredRequests.length} found</Badge>
          </div>

          <EmergencyRequestList requests={filteredRequests} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
