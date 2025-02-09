import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to CMS</h1>
      <div className="flex gap-4">
        <Button asChild>
          <LoginLink>Login</LoginLink>
        </Button>
        <Button asChild variant="outline">
          <RegisterLink>Sign Up</RegisterLink>
        </Button>
      </div>
    </div>
  );
}
