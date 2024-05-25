import { createClient } from '@supabase/supabase-js';

const url = 'https://yqixvxauhxayugfbnzcr.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxaXh2eGF1aHhheXVnZmJuemNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2NTAwNTYsImV4cCI6MjAyOTIyNjA1Nn0.EADkRoqe0Uku8otmtiyhm-VEEunh_PQmcXPqRffKnnQ';

const supabase = createClient(url, key);

export default supabase