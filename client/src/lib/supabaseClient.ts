import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create a dummy client if keys are missing to prevent app crash
// This allows the site to load even if Supabase isn't fully configured
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient('https://placeholder.supabase.co', 'placeholder-key')

// Log a warning in development or if keys are missing
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase keys are missing. AI features will not work.')
}
