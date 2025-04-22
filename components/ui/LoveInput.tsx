import { InputHTMLAttributes } from 'react';

interface LoveInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  fullWidth?: boolean;
}

export default function LoveInput({ 
  label, 
  fullWidth = false, 
  ...props 
}: LoveInputProps) {
  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label className="block text-sm font-medium text-rose-700 mb-1">
          {label}
        </label>
      )}
      <input
        className={`border border-rose-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 ${fullWidth ? 'w-full' : ''}`}
        {...props}
      />
    </div>
  );
}