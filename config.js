// 引入 Supabase SDK (通过 CDN)
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://hntioocpuhbrwiuvdify.supabase.co';
const supabaseKey = 'EyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhudGlvb2NwdWhicndpdXZkaWZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5OTUwNDIsImV4cCI6MjA5MzU3MTA0Mn0.3kLSZV1scyC89dWVXPi0PZAg7jWVUDG6psHLNUKgvKo';

export const supabase = createClient(supabaseUrl, supabaseKey);
