import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tiuqtfiwczpiyrnlhwnk.supabase.co';
const supabaseKey = 'sb_publishable_mr9kYbDAuABLvwbPE1UWJg_yM8ZhQTm';

export const supabase = createClient(supabaseUrl, supabaseKey);
