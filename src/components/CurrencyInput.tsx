'use client';

import React from 'react';
import { NumericFormat } from 'react-number-format';

interface CurrencyInputProps {
  label?: string;
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  prefix?: string;
  icon?: React.ReactNode;
}

export function CurrencyInput({
  label,
  value,
  onChange,
  placeholder = '0,00',
  className = '',
  containerClassName = '',
  labelClassName = '',
  prefix = 'R$',
  icon,
}: CurrencyInputProps) {
  const id = React.useId();

  return (
    <div className={containerClassName}>
      {label && (
        <label 
          htmlFor={id}
          className={`block text-[10px] font-black text-unum-gray uppercase tracking-widest mb-2 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">
            {prefix}
          </span>
        )}
        <NumericFormat
          id={id}
          value={value === 0 ? '' : value}
          onValueChange={(values) => {
            onChange(Number(values.value));
          }}
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          fixedDecimalScale
          placeholder={placeholder}
          className={`w-full ${prefix ? 'pl-9' : 'px-4'} pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-unum-blue focus:ring-2 focus:ring-unum-blue/10 focus:border-unum-blue outline-none transition-all ${className}`}
        />
        {icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
