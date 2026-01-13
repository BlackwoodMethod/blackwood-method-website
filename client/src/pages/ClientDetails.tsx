import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, FileText, Plus, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface Client {
  id: string;
  company_name: string;
  website_url: string;
  status: string;
  created_at: string;
}

interface Report {
  id: string;
  title: string;
  content: any; // Changed to any to handle JSONB
  created_at: string;
}

export default function ClientDetails() {
  const [, params] = useRoute("/client/:id");
  const id = params?.id;
  
  const [client, setClient] = useState<Client | null>(null);
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        // Fetch client
        const { data: clientData, error: clientError } = await supabase
          .from('clients')
          .select('*')
          .eq('id', id)
          .single();

        if (clientError) throw clientError;
        setClient(clientData);

        // Fetch reports
        const { data: reportsData, error: reportsError } = await supabase
          .from('reports')
          .select('*')
          .eq('client_id', id)
          .order('created_at', { ascending: false });

        if (reportsError && reportsError.code !== '42P01') { // Ignore if table doesn't exist yet
          console.error("Error fetching reports:", reportsError);
        }
        
        setReports(reportsData || []);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleGenerateReport = async () => {
    if (!client) return;
    
    setGenerating(true);
    toast.info("Analyzing client data with AI...");

    try {
      // Manual Fetch to avoid SDK header stripping issues with new Auth
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;
      
      if (!token) throw new Error("No active session");

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-report`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
          },
          body: JSON.stringify({ 
            client_name: client.company_name, 
            website_url: client.website_url 
          })
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Function Error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      const resultJson = data.result;
      
      // 2. Save to Supabase (content is now JSONB)
      const { data: savedReport, error: saveError } = await supabase
        .from('reports')
        .insert([
          {
            client_id: client.id,
            title: `AI Strategy Analysis - ${new Date().toLocaleDateString()}`,
            content: resultJson // Passing object directly for JSONB
          }
        ])
        .select()
        .single();

      if (saveError) throw saveError;

      // 3. Update UI
      setReports([savedReport, ...reports]);
      toast.success("Report generated successfully!");

    } catch (error: any) {
      console.error("Generation error:", error);
      toast.error(`Failed to generate report: ${error.message}`);
    } finally {
      setGenerating(false);
    }
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
            <Button 
              onClick={handleGenerateReport} 
              disabled={generating}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {generating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Plus className="mr-2 h-4 w-4" />
                  Generate New Report
                </>
              )}
            </Button>
          </div>

          {reports.length === 0 ? (
            <Card className="bg-slate-950 border-slate-800 border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <div className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-slate-500" />
                </div>
                <h3 className="text-lg font-medium text-white mb-1">No reports generated yet</h3>
                <p className="text-slate-400 max-w-sm mb-4">
                  Generate your first AI-powered report for {client.company_name} to see insights.
                </p>
                <Button 
                  variant="secondary" 
                  className="bg-slate-800 text-white hover:bg-slate-700"
                  onClick={handleGenerateReport}
                  disabled={generating}
                >
                  Create First Report
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {reports.map((report) => (
                <Card key={report.id} className="bg-slate-900 border-slate-800 text-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-white">{report.title}</CardTitle>
                    <p className="text-xs text-slate-500">Generated on {new Date(report.created_at).toLocaleDateString()}</p>
                  </CardHeader>
                  <CardContent>
                    {/* Render JSON content nicely */}
                    {report.content && report.content.opportunities ? (
                      <div className="space-y-4">
                        {report.content.opportunities.map((opp: any, idx: number) => (
                          <div key={idx} className="p-4 bg-slate-950 rounded border border-slate-800">
                            <h4 className="font-bold text-blue-400 mb-1">{opp.title}</h4>
                            <p className="text-sm text-slate-300">{opp.description}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <pre className="bg-slate-950 p-4 rounded-lg overflow-auto text-sm text-slate-300 font-mono whitespace-pre-wrap max-h-96">
                        {JSON.stringify(report.content, null, 2)}
                      </pre>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
