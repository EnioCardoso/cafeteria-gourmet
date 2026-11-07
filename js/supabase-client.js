/* Cole aqui os dados do seu projeto Supabase antes de publicar. */
// Use a URL-base do projeto; não use o sufixo /rest/v1 nesta configuração.
const SUPABASE_URL = 'https://vxvvogejbessanuqvijr.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_-euq_CRFG2YxwioCMr83sg_foIlGJ4Y';
const supabaseClient = window.supabase && !SUPABASE_URL.startsWith('COLE_')
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
const dbReady = () => {
  if (!supabaseClient) alert('Configure a URL e a chave anon em js/supabase-client.js.');
  return !!supabaseClient;
};
