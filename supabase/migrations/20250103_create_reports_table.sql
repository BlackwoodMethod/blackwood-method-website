create table if not exists reports (
  id uuid default gen_random_uuid() primary key,
  client_id uuid references clients(id) on delete cascade not null,
  title text not null,
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table reports enable row level security;

-- Create policy to allow users to see reports for their own clients
create policy "Users can view reports for their clients"
  on reports for select
  using (
    exists (
      select 1 from clients
      where clients.id = reports.client_id
      and clients.agency_id = auth.uid()
    )
  );

-- Create policy to allow users to insert reports for their clients
create policy "Users can insert reports for their clients"
  on reports for insert
  with check (
    exists (
      select 1 from clients
      where clients.id = reports.client_id
      and clients.agency_id = auth.uid()
    )
  );
