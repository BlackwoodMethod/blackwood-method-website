import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut, 
  Menu
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "sonner";
import { AddClientDialog } from "@/components/clients/AddClientDialog";
import { ClientGrid } from "@/components/clients/ClientGrid";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>(null);
  const [agencyName, setAgencyName] = useState<string>("Agency Partner");
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          setLocation("/login");
          return;
        }
        
        setSession(session);
        
        // Fetch profile data
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('agency_name')
          .eq('id', session.user.id)
          .single();
          
        if (profile && profile.agency_name) {
          setAgencyName(profile.agency_name);
        }
      } catch (error) {
        console.error("Error checking session:", error);
      } finally {
        setLoading(false);
      }
    };
    
    checkSession();
  }, [setLocation]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setLocation("/login");
    toast.success("Signed out successfully");
  };

  const handleClientAdded = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-slate-800"></div>
          <div className="h-4 w-32 rounded bg-slate-800"></div>
        </div>
      </div>
    );
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-slate-800">
        <h2 className="text-xl font-bold text-white tracking-tight">Blackwood</h2>
        <p className="text-xs text-slate-400 mt-1">Agency Portal</p>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <Link href="/dashboard">
          <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Overview
          </Button>
        </Link>
        <Link href="/dashboard/clients">
          <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800">
            <Users className="mr-2 h-4 w-4" />
            Clients
          </Button>
        </Link>
        <Link href="/dashboard/settings">
          <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </Link>
      </nav>
      <div className="p-4 border-t border-slate-800">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-950/30"
          onClick={handleSignOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-slate-200 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 border-r border-slate-800 bg-slate-950">
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-slate-800 bg-slate-950/50 backdrop-blur flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-slate-400">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 bg-slate-950 border-slate-800 w-64">
                <SidebarContent />
              </SheetContent>
            </Sheet>
            <h1 className="text-lg font-semibold text-white hidden md:block">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-slate-400">
              Welcome, <span className="text-white font-medium">{agencyName}</span>
            </div>
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
              {agencyName.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-8 overflow-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">My Clients</h1>
                <p className="text-slate-400">Manage your agency clients and their automation workflows.</p>
              </div>
              <AddClientDialog onClientAdded={handleClientAdded} />
            </div>

            <ClientGrid refreshTrigger={refreshTrigger} />
          </div>
        </main>
      </div>
    </div>
  );
}
