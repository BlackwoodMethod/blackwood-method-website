import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { AddClientDialog } from "@/components/clients/AddClientDialog";
import { ClientGrid } from "@/components/clients/ClientGrid";

export default function Dashboard() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleClientAdded = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Clients</h1>
          <p className="text-slate-400">Manage your agency clients and their automation workflows.</p>
        </div>
        <AddClientDialog onClientAdded={handleClientAdded} />
      </div>

      <ClientGrid refreshTrigger={refreshTrigger} />
    </DashboardLayout>
  );
}
