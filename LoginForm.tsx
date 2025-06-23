"use client";

import { useState } from "react";
import { User, Lock, ArrowRight } from "lucide-react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Login attempt:", { email, password });
      alert("Login successful! (This is a demo)");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header Complication */}
        <div className="complication-card p-8 text-center">
          <div className="complication-label mb-2">Authentication</div>
          <div className="complication-title text-3xl mb-2">Welcome Back</div>
          <div className="complication-body">
            Enter your credentials to access the bounty platform
          </div>
        </div>

        {/* Login Form Complication */}
        <div className="complication-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-3">
              <div className="complication-label">Email Address</div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <User size={18} className="text-muted-foreground" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`
                    w-full pl-12 pr-4 py-4 bg-input border border-border rounded-lg
                    text-foreground placeholder-muted-foreground
                    focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none
                    transition-colors
                    ${errors.email ? 'border-destructive' : ''}
                  `}
                />
              </div>
              {errors.email && (
                <div className="text-sm text-destructive">{errors.email}</div>
              )}
            </div>
            
            {/* Password Field */}
            <div className="space-y-3">
              <div className="complication-label">Password</div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Lock size={18} className="text-muted-foreground" />
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`
                    w-full pl-12 pr-4 py-4 bg-input border border-border rounded-lg
                    text-foreground placeholder-muted-foreground
                    focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none
                    transition-colors
                    ${errors.password ? 'border-destructive' : ''}
                  `}
                />
              </div>
              {errors.password && (
                <div className="text-sm text-destructive">{errors.password}</div>
              )}
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full complication-card p-4 hover:bg-secondary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col text-left">
                  <div className="complication-label mb-1">Action</div>
                  <div className="complication-title">
                    {isLoading ? 'Signing in...' : 'Sign In'}
                  </div>
                </div>
                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <ArrowRight size={18} className="text-primary" />
                </div>
              </div>
            </button>
          </form>
        </div>
        
        {/* Sign Up Complication */}
        <div className="complication-card p-6 text-center">
          <div className="complication-body mb-3">
            Don't have an account?
          </div>
          <button 
            type="button"
            className="complication-subtitle text-primary hover:text-primary/80 transition-colors"
            onClick={() => alert("Sign up functionality would go here")}
          >
            Create Account →
          </button>
        </div>
      </div>
    </div>
  );
}