'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoginFormSchema } from '@/schemas/auth/login.schema';
import { useForm } from '@tanstack/react-form';
import Link from 'next/link';
import { login } from './actions';

const LoginPage = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onChange: LoginFormSchema,
    },
  });

  return (
    <main className="flex flex-col gap-5 p-2.5 max-w-2xl w-xl mx-auto min-h-screen justify-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl text-gray-600">
            LOG IN
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-5 text-gray-600">
            <form.Field name="email">
              {field => (
                <div>
                  <Label
                    htmlFor="email"
                    className="mb-1.5"
                  >
                    Email
                  </Label>
                  <Input
                    value={field.state.value}
                    name="email"
                    id="email"
                    type="email"
                    onChange={e => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="password">
              {field => (
                <div>
                  <Label
                    htmlFor="password"
                    className="mb-1.5"
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    value={field.state.value}
                    type="password"
                    onChange={e => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>

            <Button
              formAction={login}
              type="submit"
            >
              Log in
            </Button>

            <div className="text-center">
              <p className="text-sm">
                Don&apos;t have an account?{' '}
                <Link
                  href="/signup"
                  className="text-blue-500 cursor-pointer"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default LoginPage;
