import React from 'react';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, helperText, className = '', id, required, ...props }, ref) => {
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

    return (
      <div className="space-y-1.5 text-left">
        <label
          htmlFor={inputId}
          className="block font-mono text-xs uppercase tracking-wider text-[#171717] font-bold"
        >
          {label} {required && <span className="text-[#c2410c]">*</span>}
        </label>
        <input
          id={inputId}
          ref={ref}
          required={required}
          className={`w-full p-3.5 rounded-xl border text-xs sm:text-sm bg-white transition-all outline-none ${
            error
              ? 'border-red-500 ring-1 ring-red-500 focus:border-red-600'
              : 'border-[#171717]/20 focus:border-[#171717] focus:ring-1 focus:ring-[#171717]'
          } ${className}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-[11px] text-red-600 font-medium">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={`${inputId}-helper`} className="text-[11px] text-[#666663]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

export interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, helperText, className = '', id, required, rows = 3, ...props }, ref) => {
    const inputId = id || `textarea-${label.toLowerCase().replace(/\s+/g, '-')}`;

    return (
      <div className="space-y-1.5 text-left">
        <label
          htmlFor={inputId}
          className="block font-mono text-xs uppercase tracking-wider text-[#171717] font-bold"
        >
          {label} {required && <span className="text-[#c2410c]">*</span>}
        </label>
        <textarea
          id={inputId}
          ref={ref}
          required={required}
          rows={rows}
          className={`w-full p-3.5 rounded-xl border text-xs sm:text-sm bg-white transition-all outline-none ${
            error
              ? 'border-red-500 ring-1 ring-red-500 focus:border-red-600'
              : 'border-[#171717]/20 focus:border-[#171717] focus:ring-1 focus:ring-[#171717]'
          } ${className}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-[11px] text-red-600 font-medium">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={`${inputId}-helper`} className="text-[11px] text-[#666663]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

FormTextarea.displayName = 'FormTextarea';
