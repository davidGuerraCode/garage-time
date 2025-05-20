'use server';

import { LoginForm, LoginFormSchema } from '@/schemas/auth/login.schema';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const supabase = await createClient();
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  validateFormData(data);

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error('Error logging in:', error);
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/dashboard');
}

export async function logout() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('Error signing out:', error);
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

function validateFormData(data: LoginForm) {
  const result = LoginFormSchema.safeParse(data);

  if (!result.success) {
    console.error('Validation error:', result.error);
    redirect('/error');
  }
}
