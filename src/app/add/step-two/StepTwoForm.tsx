'use client';

import Input from '@/components/Input';
import SubmitButton from '@/components/SubmitButton';
import { FormErrors } from '@/types';
import { useFormState } from 'react-dom';
import { stepTwoFormAction } from './actions';

export const initialState: FormErrors = {};

export default function StepTwoForm() {
  const [serverErrors, formAction] = useFormState(
    stepTwoFormAction,
    initialState
  );
  return (
    <form action={formAction} className='flex flex-1 flex-col items-center'>
      <div className='flex w-full flex-col gap-8 lg:max-w-[700px] '>
        <Input
          label='Coupon Code'
          id='coupon'
          type='text'
          minLength={5}
          required
          errorMsg={serverErrors?.coupon}
        />
        <Input
          label='Discount (%)'
          id='discount'
          type='number'
          required
          min={1}
          max={100}
          errorMsg={serverErrors?.discount}
        />
        <SubmitButton text='Submit' />
      </div>
    </form>
  );
}
