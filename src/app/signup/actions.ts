import { SignupForm, SignupFormSchema } from '@/schemas';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function signup(formData: FormData) {
  const supabase = await createClient();
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string,
    firstName: formData.get('firstName') as string,
    lastName: formData.get('lastName') as string,
    phoneNumber: formData.get('phoneNumber') as string,
  };

  validateSignupFormData(data);

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.error('Error signing up:', error);
    redirect('/error');
  }
  revalidatePath('/', 'layout');
  redirect('/dashboard');
}

function validateSignupFormData(data: SignupForm) {
  const result = SignupFormSchema.safeParse(data);

  if (!result.success) {
    console.error('Validation error:', result.error);
    redirect('/error');
  }
}
