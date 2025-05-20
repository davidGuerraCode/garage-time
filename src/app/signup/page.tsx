'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormField } from '@/components/ui/form-field';
import {
  type SignupForm,
  SignupFormSchema,
} from '@/schemas/auth/signup.schema';
import { useForm } from '@tanstack/react-form';
import Link from 'next/link';
import { z } from 'zod';
import { signup } from './actions';

const formFields = [
  { name: 'firstName', label: 'First Name', type: 'text' },
  { name: 'lastName', label: 'Last Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
  { name: 'confirmPassword', label: 'Confirm Password', type: 'password' },
  { name: 'phoneNumber', label: 'Phone Number', type: 'tel' },
] as const;

const SignupPage = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
    } as SignupForm,
  });

  return (
    <main className="flex flex-col gap-5 p-2.5 max-w-2xl w-xl mx-auto min-h-screen justify-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl text-gray-600">
            SIGN UP
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-5 text-gray-600">
            {formFields.map(({ name, label, type }) => (
              <form.Field
                key={name}
                name={name}
                validators={{
                  ...(name === 'confirmPassword'
                    ? { onChangeListenTo: ['password'] }
                    : {}),
                  onChange: async ({ value }) => {
                    const error = validateField(name, value);

                    return error ? [error] : [];
                  },
                }}
              >
                {field => {
                  return (
                    <div>
                      <FormField
                        label={label}
                        name={name}
                        type={type}
                        value={field.state.value as string}
                        onChangeHandler={e =>
                          field.handleChange(e.target.value)
                        }
                      />
                      {field.state.meta.errorMap['onChange'] && (
                        <em className="text-red-500 text-xs pl-1 pt-1">
                          {field.state.meta.errorMap['onChange']}
                        </em>
                      )}
                    </div>
                  );
                }}
              </form.Field>
            ))}

            <Button
              type="submit"
              formAction={signup}
              className="w-full"
            >
              Sign up
            </Button>

            <div className="text-center">
              <p className="text-sm">
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="text-blue-500 hover:underline"
                >
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default SignupPage;

function validateField(name: keyof SignupForm, value?: string) {
  try {
    SignupFormSchema._def.schema.shape[name].parse(value);
    return;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.errors[0].message;
    }
    return 'Validation failed';
  }
}
