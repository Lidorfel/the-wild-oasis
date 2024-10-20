import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tupeacxbaggnbnljkysi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1cGVhY3hiYWdnbmJubGpreXNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NzA1NjIsImV4cCI6MjA0NDE0NjU2Mn0.KaWQ3yJqOfPlrfbkaYAnLxWJxm4sTMDeNi6RLwNOp-o";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
