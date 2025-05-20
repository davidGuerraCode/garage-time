import { createClient } from '@/utils/supabase/server';
import { type EmailOtpType } from '@supabase/supabase-js';
import { type NextRequest, NextResponse } from 'next/server';

// Handler for GET requests to the /auth/confirm route
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const tokenHash = searchParams.get('token_hash');
  const type = searchParams.get('type') as EmailOtpType | null;
  const next = '/dashboard';

  // Redirect link without the secret token
  const redirectTo = request.nextUrl.clone();
  redirectTo.pathname = next;
  redirectTo.searchParams.delete('token_hash');
  redirectTo.searchParams.delete('type');

  if (tokenHash && type) {
    const supabase = await createClient();
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash: tokenHash,
    });
    console.log('Verifying OTP:', { type, tokenHash });

    console.log('Error verifying OTP:', error);

    if (!error) {
      redirectTo.searchParams.delete('next');

      return NextResponse.redirect(redirectTo);
    }
  }

  redirectTo.pathname = '/error';

  return NextResponse.redirect(redirectTo);
}
