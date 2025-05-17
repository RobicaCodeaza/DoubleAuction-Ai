import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hrveklaoxjzftdgkteqw.supabase.co'
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhydmVrbGFveGp6ZnRkZ2t0ZXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MDE5OTksImV4cCI6MjA2Mjk3Nzk5OX0.bjXVXN7HKmlUbSnRxr7u9MaCxffBk2x8sCpkQC81S20'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase
