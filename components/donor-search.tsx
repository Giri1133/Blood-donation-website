"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, X } from "lucide-react"

interface DonorSearchProps {
  onSearch: (filters: { bloodType?: string; city?: string; state?: string }) => void
  onClear: () => void
}

export function DonorSearch({ onSearch, onClear }: DonorSearchProps) {
  const [bloodType, setBloodType] = useState<string>("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")

  const handleSearch = () => {
    onSearch({
      bloodType: bloodType || undefined,
      city: city || undefined,
      state: state || undefined,
    })
  }

  const handleClear = () => {
    setBloodType("")
    setCity("")
    setState("")
    onClear()
  }

  const hasFilters = bloodType || city || state

  return (
    <div className="mb-8 space-y-4">
      <div className="grid gap-4 md:grid-cols-4">
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
        <Input 
          placeholder="City (e.g., Mumbai)" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <Input 
          placeholder="State (e.g., Maharashtra)" 
          value={state}
          onChange={(e) => setState(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <div className="flex gap-2">
          <Button onClick={handleSearch} className="flex-1">
            <Search className="size-4 mr-2" />
            Search
          </Button>
          {hasFilters && (
            <Button onClick={handleClear} variant="outline" size="icon" className="bg-transparent">
              <X className="size-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
