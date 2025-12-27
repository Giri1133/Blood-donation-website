import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-md">
          <div className="text-center space-y-2 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to your account to continue</p>
          </div>
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
