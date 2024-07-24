import { useAddDealContext } from '@/contexts/addDealContext';
import { type } from 'os';
import { ChangeEvent } from 'react';

interface InputProps {
  label: string;
  id: string;
  description?: string;
  required?: boolean;
  pattern?: string;
  type: string;
  minLength?: number;
  min?: number;
  max?: number;
  errorMsg?: string;
}

interface NewDealData {
  [key: string]: string | number | undefined;
}

export default function Input({
  label,
  id,
  required,
  pattern,
  type,
  minLength,
  min,
  max,
  description,
  errorMsg,
}: InputProps) {
  const { updateNewDealDetails, newDealData } = useAddDealContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateNewDealDetails({ [name]: value });
  };

  return (
    <div>
      <label className='block text-lg' htmlFor={id}>
        {label}
        {description && (
          <span className='text-sm text-slate-200 block mb-1'>
            {description}
          </span>
        )}
      </label>
      <input
        className={`w-full rounded-md py-4 px-2 text-slate-900 ${
          errorMsg ? 'border-red-500' : 'border-slate-300'
        } border-2`}
        type={type}
        name={id}
        id={id}
        required={required}
        pattern={pattern}
        minLength={minLength}
        min={min}
        max={max}
        onChange={handleInputChange}
        value={newDealData[id as keyof typeof newDealData] || ''} // Use value instead of defaultValue
      />
      <div className='min-h-8 mt-1'>
        {errorMsg && (
          <span className='text-red-500 text-sm block '>{errorMsg}</span>
        )}
      </div>
    </div>
  );
}
