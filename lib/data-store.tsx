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

export interface DonorStory {
  id: string
  name: string
  image: string
  bloodType: string
  donations: number
  story: string
  location: string
  quote: string
}

interface DataStore {
  donors: Donor[]
  recipients: Recipient[]
  bloodBanks: BloodBank[]
  emergencyRequests: EmergencyRequest[]
  donorStories: DonorStory[]
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

// Chennai-focused donor stories
const donorStories: DonorStory[] = [
  {
    id: "1",
    name: "Karthik Rajan",
    image: "/donor-1.jpg",
    bloodType: "O+",
    donations: 24,
    location: "T. Nagar, Chennai",
    story: "I started donating blood after my father needed an emergency transfusion during his surgery at Apollo Hospital. The donors who came forward saved his life. Now, I donate every three months to pay it forward.",
    quote: "Every donation is a chance to be someone's hero. Chennai has taught me the meaning of community.",
  },
  {
    id: "2",
    name: "Lakshmi Venkatesh",
    image: "/donor-2.jpg",
    bloodType: "A-",
    donations: 18,
    location: "Adyar, Chennai",
    story: "As a retired school teacher from Adyar, I have been donating blood for over 15 years. My rare A- blood type is always in demand, and knowing that I can help patients at hospitals like SRMC and Vijaya Hospital gives me immense satisfaction.",
    quote: "Age is no barrier to saving lives. If you are healthy, you can make a difference.",
  },
  {
    id: "3",
    name: "Mohammed Irfan",
    image: "/donor-3.jpg",
    bloodType: "B+",
    donations: 32,
    location: "Royapettah, Chennai",
    story: "Running a small tea shop near Royapettah Government Hospital, I see patients in need every day. I have been donating since I was 18 and have encouraged over 50 people from my neighborhood to become regular donors.",
    quote: "Blood donation does not see religion or status. It only sees humanity.",
  },
  {
    id: "4",
    name: "Priya Subramaniam",
    image: "/donor-4.jpg",
    bloodType: "AB+",
    donations: 12,
    location: "Anna Nagar, Chennai",
    story: "I am an IT professional working in Tidel Park. After joining BloodLink Chennai, I realized how easy it is to schedule donations around my busy work life. The platform connected me to a thalassemia patient who now receives regular transfusions from our donor group.",
    quote: "Technology makes giving back easier than ever. No excuse not to donate!",
  },
]

// Chennai-focused initial donors
const initialDonors: Donor[] = [
  {
    id: "1",
    name: "Arun Prakash",
    email: "arun.prakash@example.com",
    phone: "+91 98410 12345",
    bloodType: "O+",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600017",
    address: "45, 2nd Main Road, T. Nagar",
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
    name: "Meenakshi Sundaram",
    email: "meenakshi@example.com",
    phone: "+91 98411 23456",
    bloodType: "A-",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600020",
    address: "12, Gandhi Street, Adyar",
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
    name: "Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    phone: "+91 98412 34567",
    bloodType: "B+",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600040",
    address: "78, Anna Nagar East",
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
    name: "Deepa Krishnan",
    email: "deepa@example.com",
    phone: "+91 98413 45678",
    bloodType: "AB-",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600014",
    address: "23, Nungambakkam High Road",
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
    name: "Senthil Nathan",
    email: "senthil@example.com",
    phone: "+91 98414 56789",
    bloodType: "O-",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600004",
    address: "56, Royapettah",
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
    name: "Kavitha Murugavel",
    email: "kavitha@example.com",
    phone: "+91 98415 67890",
    bloodType: "A+",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600028",
    address: "89, Velachery Main Road",
    dateOfBirth: "1993-01-17",
    gender: "female",
    weight: 52,
    lastDonation: "2026-01-15",
    available: false,
    medicalConditions: "",
    createdAt: "2025-01-06",
  },
  {
    id: "7",
    name: "Balaji Srinivasan",
    email: "balaji@example.com",
    phone: "+91 98416 78901",
    bloodType: "B-",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600083",
    address: "34, OMR, Sholinganallur",
    dateOfBirth: "1991-06-20",
    gender: "male",
    weight: 70,
    lastDonation: "2025-11-25",
    available: true,
    medicalConditions: "",
    createdAt: "2025-01-07",
  },
  {
    id: "8",
    name: "Saranya Ramesh",
    email: "saranya@example.com",
    phone: "+91 98417 89012",
    bloodType: "O+",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600042",
    address: "67, Tambaram East",
    dateOfBirth: "1994-09-12",
    gender: "female",
    weight: 56,
    lastDonation: "2025-12-20",
    available: true,
    medicalConditions: "",
    createdAt: "2025-01-08",
  },
]

// Chennai-focused blood banks
const initialBloodBanks: BloodBank[] = [
  {
    id: "1",
    name: "Apollo Blood Bank",
    email: "bloodbank@apollochennai.com",
    phone: "+91 44 2829 3333",
    address: "21, Greams Lane, Off Greams Road",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600006",
    licenseNumber: "BB-TN-001",
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
    name: "SRMC Blood Bank",
    email: "bloodbank@srmc.edu",
    phone: "+91 44 4500 1500",
    address: "Sri Ramachandra Medical Centre, Porur",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600116",
    licenseNumber: "BB-TN-002",
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
    name: "Government General Hospital Blood Bank",
    email: "ggh.bloodbank@tn.gov.in",
    phone: "+91 44 2530 5000",
    address: "Park Town",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600003",
    licenseNumber: "BB-TN-003",
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
  {
    id: "4",
    name: "Vijaya Hospital Blood Bank",
    email: "bloodbank@vijayahospital.com",
    phone: "+91 44 4226 2626",
    address: "323, NSK Salai, Vadapalani",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600026",
    licenseNumber: "BB-TN-004",
    operatingHours: "24/7",
    verified: true,
    inventory: [
      { type: "A+", units: 38 },
      { type: "A-", units: 9 },
      { type: "B+", units: 30 },
      { type: "B-", units: 7 },
      { type: "AB+", units: 14 },
      { type: "AB-", units: 4 },
      { type: "O+", units: 45 },
      { type: "O-", units: 16 },
    ],
    createdAt: "2024-01-04",
  },
  {
    id: "5",
    name: "Rotary TTK Blood Bank",
    email: "rotaryttk@bloodbank.org",
    phone: "+91 44 2435 2976",
    address: "146, Poonamallee High Road, Kilpauk",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600010",
    licenseNumber: "BB-TN-005",
    operatingHours: "Mon-Sun 8AM-10PM",
    verified: true,
    inventory: [
      { type: "A+", units: 50 },
      { type: "A-", units: 15 },
      { type: "B+", units: 42 },
      { type: "B-", units: 10 },
      { type: "AB+", units: 18 },
      { type: "AB-", units: 6 },
      { type: "O+", units: 55 },
      { type: "O-", units: 20 },
    ],
    createdAt: "2024-01-05",
  },
]

// Chennai-focused emergency requests
const initialEmergencyRequests: EmergencyRequest[] = [
  {
    id: "1",
    bloodType: "O+",
    units: 2,
    hospital: "Apollo Hospital",
    address: "21, Greams Lane",
    city: "Chennai",
    state: "Tamil Nadu",
    contactPerson: "Dr. Venkatesh",
    contactPhone: "+91 98410 00001",
    urgency: "critical",
    reason: "Emergency surgery - road accident victim from ECR",
    requiredBy: "Today, 6:00 PM",
    postedTime: "2 hours ago",
    status: "active",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    bloodType: "A-",
    units: 1,
    hospital: "SRMC Hospital",
    address: "Porur",
    city: "Chennai",
    state: "Tamil Nadu",
    contactPerson: "Dr. Lakshmi",
    contactPhone: "+91 98411 00002",
    urgency: "urgent",
    reason: "Thalassemia patient requires regular transfusion",
    requiredBy: "Tomorrow, 10:00 AM",
    postedTime: "5 hours ago",
    status: "active",
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "3",
    bloodType: "B+",
    units: 3,
    hospital: "Government General Hospital",
    address: "Park Town",
    city: "Chennai",
    state: "Tamil Nadu",
    contactPerson: "Dr. Suresh Kumar",
    contactPhone: "+91 98412 00003",
    urgency: "moderate",
    reason: "Scheduled cardiac surgery preparation",
    requiredBy: "In 3 days",
    postedTime: "1 day ago",
    status: "active",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "4",
    bloodType: "AB-",
    units: 1,
    hospital: "Vijaya Hospital",
    address: "NSK Salai, Vadapalani",
    city: "Chennai",
    state: "Tamil Nadu",
    contactPerson: "Dr. Ramya",
    contactPhone: "+91 98413 00004",
    urgency: "critical",
    reason: "Severe postpartum hemorrhage - new mother",
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
        donorStories,
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
