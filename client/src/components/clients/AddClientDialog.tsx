import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface AddClientDialogProps {
  onClientAdded: () => void;
}

export function AddClientDialog({ onClientAdded }: AddClientDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) throw new Error("No user found");

      const { error } = await supabase
        .from('clients')
        .insert([
          { 
            company_name: companyName, 
            website_url: websiteUrl,
            agency_id: user.id 
          }
        ]);

      if (error) throw error;

      toast.success("Client added successfully");
      setCompanyName("");
      setWebsiteUrl("");
      setOpen(false);
      onClientAdded();
    } catch (error: any) {
      toast.error(error.message || "Failed to add client");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="mr-2 h-4 w-4" />
          Add Client
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-slate-950 border-slate-800 text-slate-200">
        <DialogHeader>
          <DialogTitle className="text-white">Add New Client</DialogTitle>
          <DialogDescription className="text-slate-400">
            Enter the details of the agency client you want to manage.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right text-slate-300">
                Company
              </Label>
              <Input
                id="name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="col-span-3 bg-slate-900 border-slate-800 text-white"
                placeholder="Acme Corp"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="website" className="text-right text-slate-300">
                Website
              </Label>
              <Input
                id="website"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                className="col-span-3 bg-slate-900 border-slate-800 text-white"
                placeholder="https://example.com"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white">
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Save Client
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
