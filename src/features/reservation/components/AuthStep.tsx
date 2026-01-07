
import { Button } from "@/components/ui/Button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function AuthStep({ onNext }: { onNext: (data: any) => void }) {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
    onNext({ user: { name: "Guest User" } });
  };

  return (
    <div className="max-w-md mx-auto">
      <CardHeader className="text-center px-0">
        <CardTitle className="text-2xl">
            {isLogin ? "Welcome Back" : "Create Account"}
        </CardTitle>
        <CardDescription>
            {isLogin ? "Login to access your saved details." : "Register to book your first appointment."}
        </CardDescription>
      </CardHeader>

      <div className="flex bg-muted p-1 rounded-lg mb-8">
        <button
          className={cn(
            "flex-1 py-2 text-sm font-medium rounded-md transition-all",
            isLogin ? "bg-white shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
          )}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={cn(
            "flex-1 py-2 text-sm font-medium rounded-md transition-all",
            !isLogin ? "bg-white shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
          )}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
         {!isLogin && (
             <div className="space-y-2">
                 <label className="text-sm font-medium">Full Name</label>
                 <input type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="John Doe" required />
             </div>
         )}
         <div className="space-y-2">
             <label className="text-sm font-medium">Email Address</label>
             <input type="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="john@example.com" required />
         </div>
         <div className="space-y-2">
             <label className="text-sm font-medium">Password</label>
             <input type="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" required />
         </div>
         
         <Button type="submit" className="w-full" size="lg">
             {isLogin ? "Login" : "Create Account"}
         </Button>
      </form>
      
      <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground mb-4">Or continue as guest</p>
          <Button variant="outline" className="w-full" onClick={() => onNext({ user: { name: "Guest" } })}>
              Skip & Continue as Guest
          </Button>
      </div>
    </div>
  );
}
