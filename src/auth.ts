import { supabase } from './lib/supabase';
// import cookie from 'cookie';

export async function getUser() {
  const { data } = await supabase.auth.getSession();

  // console.log({ data });

  if (!data?.session?.user) return null;

  return data.session?.user;
}

export async function isSignedIn() {
  return (await getUser()) !== null;
}
