import { z } from 'zod';

export const SignupFormSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z
      .string()
      .min(6, 'Password must be at least 6 characters long'),
    firstName: z
      .string()
      .min(1, 'First name is required')
      .max(50, 'First name must be at most 50 characters long'),
    phoneNumber: z
      .string()
      .min(13, 'Phone number must be at least 13 characters long'),
    lastName: z
      .string()
      .max(50, 'Last name must be at most 50 characters long')
      .optional(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type SignupForm = z.infer<typeof SignupFormSchema>;
