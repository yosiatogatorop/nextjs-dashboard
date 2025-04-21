import { InputHTMLAttributes } from 'react';

interface HeartCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function HeartCheckbox({ label, ...props }: HeartCheckboxProps) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-rose-300 rounded"
        {...props}
      />
      <label htmlFor={props.id} className="ml-2 block text-sm text-rose-700">
        {label}
      </label>
    </div>
  );
}