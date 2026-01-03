import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, FileText, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Client {
  id: string;
  company_name: string;
  website_url: string;
  status: string;
  created_at: string;
}

export default function ClientDetails() {
  const [, params] = useRoute("/client/:id");
  const id = params?.id;
  
  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchClient = async () => {
      try {
        const { data, error } = await supabase
          .from('clients')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setClient(data);
      } catch (error) {
        console.error("Error fetching client:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClient();
  }, [id]);

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

  if (!client) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white gap-4">
        <h1 className="text-2xl font-bold">Client Not Found</h1>
        <Link href="/dashboard">
          <Button variant="outline">Return to Dashboard</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-slate-200 p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dashboard">
            <Button variant="ghost" className="pl-0 text-slate-400 hover:text-white hover:bg-transparent mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-white">{client.company_name}</h1>
                <Badge variant="outline" className="bg-green-950/30 text-green-400 border-green-900">
                  Active
                </Badge>
              </div>
              {client.website_url && (
                <a 
                  href={client.website_url.startsWith('http') ? client.website_url : `https://${client.website_url}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                >
                  {client.website_url}
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                Edit Details
              </Button>
            </div>
          </div>
        </div>

        {/* Reports Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Reports</h2>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="mr-2 h-4 w-4" />
              Generate New Report
            </Button>
          </div>

          {/* Empty State for Reports */}
          <Card className="bg-slate-950 border-slate-800 border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <div className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-slate-500" />
              </div>
              <h3 className="text-lg font-medium text-white mb-1">No reports generated yet</h3>
              <p className="text-slate-400 max-w-sm mb-4">
                Generate your first AI-powered report for {client.company_name} to see insights.
              </p>
              <Button variant="secondary" className="bg-slate-800 text-white hover:bg-slate-700">
                Create First Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
