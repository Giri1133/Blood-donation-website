import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Heart, Building2 } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-4xl">
          <div className="text-center space-y-2 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Create an Account</h1>
            <p className="text-muted-foreground">Choose how you want to join our community</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 mb-4 mx-auto">
                  <Heart className="size-6 text-primary" />
                </div>
                <CardTitle className="text-center">Donor</CardTitle>
                <CardDescription className="text-center">Register as a blood donor to help save lives</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/register/donor">Register as Donor</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 mb-4 mx-auto">
                  <Users className="size-6 text-accent" />
                </div>
                <CardTitle className="text-center">Recipient</CardTitle>
                <CardDescription className="text-center">
                  Register to search for donors and post requests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-transparent" variant="outline" className="bg-transparent">
                  <Link href="/register/recipient">Register as Recipient</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 mb-4 mx-auto">
                  <Building2 className="size-6 text-primary" />
                </div>
                <CardTitle className="text-center">Blood Bank</CardTitle>
                <CardDescription className="text-center">Register your blood bank facility</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-transparent" variant="outline" className="bg-transparent">
                  <Link href="/register/blood-bank">Register Blood Bank</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-medium hover:underline">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
