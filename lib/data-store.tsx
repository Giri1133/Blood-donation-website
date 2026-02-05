"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"

// Types
export interface Donor {
  id: string
  name: string
  email: string
  phone: string
  bloodType: string
  city: string
  state: string
  pincode: string
  address: string
  dateOfBirth: string
  gender: string
  weight: number
  lastDonation: string | null
  available: boolean
  medicalConditions: string
  createdAt: string
}

export interface Recipient {
  id: string
  name: string
  email: string
  phone: string
  bloodTypeNeeded: string
  city: string
  state: string
  pincode: string
  address: string
  medicalReason: string
  createdAt: string
}

export interface BloodBank {
  id: string
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  pincode: string
  licenseNumber: string
  operatingHours: string
  verified: boolean
  inventory: { type: string; units: number }[]
  createdAt: string
}

export interface EmergencyRequest {
  id: string
  bloodType: string
  units: number
  hospital: string
  address: string
  city: string
  state: string
  contactPerson: string
  contactPhone: string
  urgency: "critical" | "urgent" | "moderate"
  reason: string
  requiredBy: string
  postedTime: string
  status: "active" | "fulfilled" | "expired"
  createdAt: string
}

interface DataStore {
  donors: Donor[]
  recipients: Recipient[]
  bloodBanks: BloodBank[]
  emergencyRequests: EmergencyRequest[]
  addDonor: (donor: Omit<Donor, "id" | "createdAt">) => void
  addRecipient: (recipient: Omit<Recipient, "id" | "createdAt">) => void
  addBloodBank: (bloodBank: Omit<BloodBank, "id" | "createdAt" | "verified" | "inventory">) => void
  addEmergencyRequest: (request: Omit<EmergencyRequest, "id" | "createdAt" | "postedTime" | "status">) => void
  updateEmergencyStatus: (id: string, status: EmergencyRequest["status"]) => void
  searchDonors: (filters: { bloodType?: string; city?: string; state?: string }) => Donor[]
  searchBloodBanks: (filters: { city?: string; bloodType?: string }) => BloodBank[]
  searchEmergencyRequests: (filters: { bloodType?: string; urgency?: string }) => EmergencyRequest[]
}

const DataStoreContext = createContext<DataStore | null>(null)

// Initial mock data
const initialDonors: Donor[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "+91 98765 43210",
    bloodType: "O+",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
    address: "123 Marine Drive",
    dateOfBirth: "1990-05-15",
    gender: "male",
    weight: 72,
    lastDonation: "2025-11-01",
    available: true,
    medicalConditions: "",
    createdAt: "2025-01-01",
  },
  {
    id: "2",
    name: "Priya Menon",
    email: "priya@example.com",
    phone: "+91 98123 45678",
    bloodType: "A-",
    city: "Delhi",
    state: "Delhi",
    pincode: "110001",
    address: "45 Connaught Place",
    dateOfBirth: "1988-08-22",
    gender: "female",
    weight: 58,
    lastDonation: "2025-09-15",
    available: true,
    medicalConditions: "",
    createdAt: "2025-01-02",
  },
  {
    id: "3",
    name: "Amit Kumar",
    email: "amit@example.com",
    phone: "+91 99876 54321",
    bloodType: "B+",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560001",
    address: "78 MG Road",
    dateOfBirth: "1995-03-10",
    gender: "male",
    weight: 68,
    lastDonation: "2025-12-01",
    available: true,
    medicalConditions: "",
    createdAt: "2025-01-03",
  },
  {
    id: "4",
    name: "Sneha Trivedi",
    email: "sneha@example.com",
    phone: "+91 97654 32109",
    bloodType: "AB-",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600001",
    address: "23 Anna Salai",
    dateOfBirth: "1992-11-28",
    gender: "female",
    weight: 55,
    lastDonation: "2025-10-20",
    available: true,
    medicalConditions: "",
    createdAt: "2025-01-04",
  },
  {
    id: "5",
    name: "Vikram Reddy",
    email: "vikram@example.com",
    phone: "+91 96543 21098",
    bloodType: "O-",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500001",
    address: "56 Banjara Hills",
    dateOfBirth: "1985-07-04",
    gender: "male",
    weight: 75,
    lastDonation: "2025-08-10",
    available: true,
    medicalConditions: "",
    createdAt: "2025-01-05",
  },
  {
    id: "6",
    name: "Ananya Patel",
    email: "ananya@example.com",
    phone: "+91 95432 10987",
    bloodType: "A+",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700001",
    address: "89 Park Street",
    dateOfBirth: "1993-01-17",
    gender: "female",
    weight: 52,
    lastDonation: "2026-01-15",
    available: false,
    medicalConditions: "",
    createdAt: "2025-01-06",
  },
]

const initialBloodBanks: BloodBank[] = [
  {
    id: "1",
    name: "AIIMS Blood Bank",
    email: "aiims@bloodbank.com",
    phone: "+91 11 2658 8500",
    address: "Ansari Nagar East",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110029",
    licenseNumber: "BB-DL-001",
    operatingHours: "24/7",
    verified: true,
    inventory: [
      { type: "A+", units: 45 },
      { type: "A-", units: 12 },
      { type: "B+", units: 38 },
      { type: "B-", units: 8 },
      { type: "AB+", units: 15 },
      { type: "AB-", units: 5 },
      { type: "O+", units: 52 },
      { type: "O-", units: 18 },
    ],
    createdAt: "2024-01-01",
  },
  {
    id: "2",
    name: "Tata Memorial Blood Bank",
    email: "tata@bloodbank.com",
    phone: "+91 22 2417 7000",
    address: "Dr. E Borges Road, Parel",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400012",
    licenseNumber: "BB-MH-001",
    operatingHours: "Mon-Sat 8AM-8PM",
    verified: true,
    inventory: [
      { type: "A+", units: 32 },
      { type: "A-", units: 10 },
      { type: "B+", units: 28 },
      { type: "B-", units: 6 },
      { type: "AB+", units: 12 },
      { type: "AB-", units: 4 },
      { type: "O+", units: 40 },
      { type: "O-", units: 15 },
    ],
    createdAt: "2024-01-02",
  },
  {
    id: "3",
    name: "CMC Blood Bank",
    email: "cmc@bloodbank.com",
    phone: "+91 416 228 1000",
    address: "Ida Scudder Road",
    city: "Vellore",
    state: "Tamil Nadu",
    pincode: "632004",
    licenseNumber: "BB-TN-001",
    operatingHours: "24/7",
    verified: true,
    inventory: [
      { type: "A+", units: 28 },
      { type: "A-", units: 8 },
      { type: "B+", units: 22 },
      { type: "B-", units: 5 },
      { type: "AB+", units: 10 },
      { type: "AB-", units: 3 },
      { type: "O+", units: 35 },
      { type: "O-", units: 12 },
    ],
    createdAt: "2024-01-03",
  },
]

const initialEmergencyRequests: EmergencyRequest[] = [
  {
    id: "1",
    bloodType: "O+",
    units: 2,
    hospital: "AIIMS Hospital",
    address: "Ansari Nagar",
    city: "New Delhi",
    state: "Delhi",
    contactPerson: "Dr. Sharma",
    contactPhone: "+91 98765 43210",
    urgency: "critical",
    reason: "Emergency surgery - accident victim",
    requiredBy: "Today, 6:00 PM",
    postedTime: "2 hours ago",
    status: "active",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    bloodType: "A-",
    units: 1,
    hospital: "Fortis Hospital",
    address: "Bannerghatta Road",
    city: "Bengaluru",
    state: "Karnataka",
    contactPerson: "Dr. Reddy",
    contactPhone: "+91 98123 45678",
    urgency: "urgent",
    reason: "Cancer treatment - immediate transfusion needed",
    requiredBy: "Tomorrow, 10:00 AM",
    postedTime: "5 hours ago",
    status: "active",
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "3",
    bloodType: "B+",
    units: 3,
    hospital: "Apollo Hospital",
    address: "Greams Road",
    city: "Chennai",
    state: "Tamil Nadu",
    contactPerson: "Dr. Krishnan",
    contactPhone: "+91 99876 54321",
    urgency: "moderate",
    reason: "Scheduled surgery preparation",
    requiredBy: "In 3 days",
    postedTime: "1 day ago",
    status: "active",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "4",
    bloodType: "AB-",
    units: 1,
    hospital: "Medanta Hospital",
    address: "Sector 38",
    city: "Gurugram",
    state: "Haryana",
    contactPerson: "Dr. Gupta",
    contactPhone: "+91 97654 32109",
    urgency: "critical",
    reason: "Severe anemia - urgent transfusion",
    requiredBy: "Today, 8:00 PM",
    postedTime: "3 hours ago",
    status: "active",
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
  },
]

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

function getRelativeTime(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffMins < 1) return "Just now"
  if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? "s" : ""} ago`
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`
  return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`
}

export function DataStoreProvider({ children }: { children: React.ReactNode }) {
  const [donors, setDonors] = useState<Donor[]>(initialDonors)
  const [recipients, setRecipients] = useState<Recipient[]>([])
  const [bloodBanks, setBloodBanks] = useState<BloodBank[]>(initialBloodBanks)
  const [emergencyRequests, setEmergencyRequests] = useState<EmergencyRequest[]>(initialEmergencyRequests)

  // Load data from localStorage on mount
  useEffect(() => {
    const savedDonors = localStorage.getItem("bloodlink_donors")
    const savedRecipients = localStorage.getItem("bloodlink_recipients")
    const savedBloodBanks = localStorage.getItem("bloodlink_bloodbanks")
    const savedEmergencyRequests = localStorage.getItem("bloodlink_emergency")

    if (savedDonors) {
      const parsed = JSON.parse(savedDonors)
      setDonors([...initialDonors, ...parsed.filter((d: Donor) => !initialDonors.find((i) => i.id === d.id))])
    }
    if (savedRecipients) setRecipients(JSON.parse(savedRecipients))
    if (savedBloodBanks) {
      const parsed = JSON.parse(savedBloodBanks)
      setBloodBanks([...initialBloodBanks, ...parsed.filter((b: BloodBank) => !initialBloodBanks.find((i) => i.id === b.id))])
    }
    if (savedEmergencyRequests) {
      const parsed = JSON.parse(savedEmergencyRequests)
      // Update relative times
      const updated = parsed.map((r: EmergencyRequest) => ({
        ...r,
        postedTime: getRelativeTime(new Date(r.createdAt)),
      }))
      setEmergencyRequests([
        ...initialEmergencyRequests,
        ...updated.filter((e: EmergencyRequest) => !initialEmergencyRequests.find((i) => i.id === e.id)),
      ])
    }
  }, [])

  // Save to localStorage when data changes
  useEffect(() => {
    const customDonors = donors.filter((d) => !initialDonors.find((i) => i.id === d.id))
    if (customDonors.length > 0) {
      localStorage.setItem("bloodlink_donors", JSON.stringify(customDonors))
    }
  }, [donors])

  useEffect(() => {
    if (recipients.length > 0) {
      localStorage.setItem("bloodlink_recipients", JSON.stringify(recipients))
    }
  }, [recipients])

  useEffect(() => {
    const customBloodBanks = bloodBanks.filter((b) => !initialBloodBanks.find((i) => i.id === b.id))
    if (customBloodBanks.length > 0) {
      localStorage.setItem("bloodlink_bloodbanks", JSON.stringify(customBloodBanks))
    }
  }, [bloodBanks])

  useEffect(() => {
    const customRequests = emergencyRequests.filter((e) => !initialEmergencyRequests.find((i) => i.id === e.id))
    if (customRequests.length > 0) {
      localStorage.setItem("bloodlink_emergency", JSON.stringify(customRequests))
    }
  }, [emergencyRequests])

  const addDonor = useCallback((donor: Omit<Donor, "id" | "createdAt">) => {
    const newDonor: Donor = {
      ...donor,
      id: generateId(),
      createdAt: new Date().toISOString(),
    }
    setDonors((prev) => [newDonor, ...prev])
  }, [])

  const addRecipient = useCallback((recipient: Omit<Recipient, "id" | "createdAt">) => {
    const newRecipient: Recipient = {
      ...recipient,
      id: generateId(),
      createdAt: new Date().toISOString(),
    }
    setRecipients((prev) => [newRecipient, ...prev])
  }, [])

  const addBloodBank = useCallback((bloodBank: Omit<BloodBank, "id" | "createdAt" | "verified" | "inventory">) => {
    const newBloodBank: BloodBank = {
      ...bloodBank,
      id: generateId(),
      verified: false,
      inventory: [
        { type: "A+", units: 0 },
        { type: "A-", units: 0 },
        { type: "B+", units: 0 },
        { type: "B-", units: 0 },
        { type: "AB+", units: 0 },
        { type: "AB-", units: 0 },
        { type: "O+", units: 0 },
        { type: "O-", units: 0 },
      ],
      createdAt: new Date().toISOString(),
    }
    setBloodBanks((prev) => [newBloodBank, ...prev])
  }, [])

  const addEmergencyRequest = useCallback(
    (request: Omit<EmergencyRequest, "id" | "createdAt" | "postedTime" | "status">) => {
      const newRequest: EmergencyRequest = {
        ...request,
        id: generateId(),
        postedTime: "Just now",
        status: "active",
        createdAt: new Date().toISOString(),
      }
      setEmergencyRequests((prev) => [newRequest, ...prev])
    },
    []
  )

  const updateEmergencyStatus = useCallback((id: string, status: EmergencyRequest["status"]) => {
    setEmergencyRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)))
  }, [])

  const searchDonors = useCallback(
    (filters: { bloodType?: string; city?: string; state?: string }) => {
      return donors.filter((donor) => {
        if (filters.bloodType && filters.bloodType !== "all" && donor.bloodType !== filters.bloodType) return false
        if (filters.city && !donor.city.toLowerCase().includes(filters.city.toLowerCase())) return false
        if (filters.state && !donor.state.toLowerCase().includes(filters.state.toLowerCase())) return false
        return true
      })
    },
    [donors]
  )

  const searchBloodBanks = useCallback(
    (filters: { city?: string; bloodType?: string }) => {
      return bloodBanks.filter((bank) => {
        if (filters.city && !bank.city.toLowerCase().includes(filters.city.toLowerCase())) return false
        if (filters.bloodType && filters.bloodType !== "all") {
          const hasBlood = bank.inventory.find((i) => i.type === filters.bloodType && i.units > 0)
          if (!hasBlood) return false
        }
        return true
      })
    },
    [bloodBanks]
  )

  const searchEmergencyRequests = useCallback(
    (filters: { bloodType?: string; urgency?: string }) => {
      return emergencyRequests.filter((request) => {
        if (request.status !== "active") return false
        if (filters.bloodType && filters.bloodType !== "all" && request.bloodType !== filters.bloodType) return false
        if (filters.urgency && filters.urgency !== "all" && request.urgency !== filters.urgency) return false
        return true
      })
    },
    [emergencyRequests]
  )

  return (
    <DataStoreContext.Provider
      value={{
        donors,
        recipients,
        bloodBanks,
        emergencyRequests,
        addDonor,
        addRecipient,
        addBloodBank,
        addEmergencyRequest,
        updateEmergencyStatus,
        searchDonors,
        searchBloodBanks,
        searchEmergencyRequests,
      }}
    >
      {children}
    </DataStoreContext.Provider>
  )
}

export function useDataStore() {
  const context = useContext(DataStoreContext)
  if (!context) {
    throw new Error("useDataStore must be used within a DataStoreProvider")
  }
  return context
}
