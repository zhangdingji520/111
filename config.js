import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://hntioocpuhbrwiuvdify.supabase.co';
// 注意下面这里，开头必须是小写的 e
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhudGlvb2NwdWhicndpdXZkaWZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5OTUwNDIsImV4cCI6MjA5MzU3MTA0Mn0.3kLSZV1scyC89dWVXPi0PZAg7jWVUDG6psHLNUKgvKo';

export const supabase = createClient(supabaseUrl, supabaseKey);
