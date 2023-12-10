import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get('email')?.toString();
  // const password = formData.get('password')?.toString();

  if (!email) {
    return new Response('Email and password are required', { status: 400 });
  }

  const { data, error } = await supabase.auth.signInWithOtp({
    email
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return redirect('/');
};
