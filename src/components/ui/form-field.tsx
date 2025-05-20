import { cn } from '@/lib/utils';
import { ChangeEvent } from 'react';
import { Input } from './input';
import { Label } from './label';

type FormFieldProps = {
  label: string;
  name: string;
  value: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password' | 'email' | 'tel';
  isValid?: boolean;
};

export const FormField = ({
  label,
  name,
  value,
  onChangeHandler,
  type = 'text',
  isValid,
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        value={value}
        name={name}
        id={name}
        type={type}
        onChange={onChangeHandler}
        className={cn(!isValid && 'border-red-500')}
      />
    </div>
  );
};
