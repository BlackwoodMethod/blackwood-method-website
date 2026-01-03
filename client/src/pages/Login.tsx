import { useState } from "react";
import { useLocation } from "wouter";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [, setLocation] = useLocation();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      toast.success("Account created! Please check your email to verify.");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      toast.success("Logged in successfully!");
      setLocation("/dashboard");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <Card className="w-full max-w-md border-slate-800 bg-slate-950 text-slate-200 shadow-2xl shadow-blue-900/20">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold tracking-tight text-white">
            Blackwood Method
          </CardTitle>
          <CardDescription className="text-slate-400">
            Enter your credentials to access the agency portal
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-slate-900">
              <TabsTrigger value="signin" className="data-[state=active]:bg-slate-800 data-[state=active]:text-white">Sign In</TabsTrigger>
              <TabsTrigger value="signup" className="data-[state=active]:bg-slate-800 data-[state=active]:text-white">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="email-signin" className="text-slate-300">Email</Label>
                  <Input 
                    id="email-signin" 
                    type="email" 
                    placeholder="agency@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500 focus-visible:ring-blue-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-signin" className="text-slate-300">Password</Label>
                  <Input 
                    id="password-signin" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500 focus-visible:ring-blue-600"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={loading}>
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  Sign In
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="email-signup" className="text-slate-300">Email</Label>
                  <Input 
                    id="email-signup" 
                    type="email" 
                    placeholder="agency@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500 focus-visible:ring-blue-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-signup" className="text-slate-300">Password</Label>
                  <Input 
                    id="password-signup" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500 focus-visible:ring-blue-600"
                  />
                </div>
                <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-700" disabled={loading}>
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  Create Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-xs text-slate-500">
            Protected by Blackwood Method Security
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
