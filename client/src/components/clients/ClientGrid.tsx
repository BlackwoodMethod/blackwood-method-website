import { useEffect, useState } from "react";
import { Link } from "wouter";
import { supabase } from "@/lib/supabaseClient";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Client {
  id: string;
  company_name: string;
  website_url: string;
  status: string;
  created_at: string;
}

interface ClientGridProps {
  refreshTrigger: number;
}

export function ClientGrid({ refreshTrigger }: ClientGridProps) {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('clients')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setClients(data || []);
      } catch (error) {
        console.error("Error fetching clients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, [refreshTrigger]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-48 rounded-xl bg-slate-900/50 border border-slate-800 animate-pulse"></div>
        ))}
      </div>
    );
  }

  if (clients.length === 0) {
    return (
      <div className="text-center py-12 border border-dashed border-slate-800 rounded-xl bg-slate-950/50">
        <div className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center mx-auto mb-4">
          <Building2 className="h-6 w-6 text-slate-500" />
        </div>
        <h3 className="text-lg font-medium text-white mb-1">No clients yet</h3>
        <p className="text-slate-400">Add your first client to start managing their automation.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {clients.map((client) => (
        <Card key={client.id} className="bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700 transition-colors">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <Link href={`/client/${client.id}`} className="flex-1 min-w-0">
                <CardTitle className="text-lg font-bold text-white truncate pr-2 hover:text-blue-400 transition-colors cursor-pointer">
                  {client.company_name}
                </CardTitle>
              </Link>
              <Badge variant="outline" className="bg-green-950/30 text-green-400 border-green-900">
                Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {client.website_url ? (
              <a 
                href={client.website_url.startsWith('http') ? client.website_url : `https://${client.website_url}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                {client.website_url}
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : (
              <span className="text-sm text-slate-500">No website provided</span>
            )}
          </CardContent>
          <CardFooter className="pt-2 border-t border-slate-800/50">
            <Link href={`/client/${client.id}`} className="w-full">
              <Button variant="ghost" size="sm" className="w-full text-slate-400 hover:text-white hover:bg-slate-800">
                View Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
