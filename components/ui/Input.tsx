"use client";

import { forwardRef } from "react";
import type {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
  ReactNode,
} from "react";

/**
 * Input / Textarea / Select — transparent background, moss bottom border,
 * ochre focus, sharp corners. No rounded, no shadow.
 */

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: ReactNode;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, hint, error, className = "", id, ...rest }, ref) => {
    const inputId = id || rest.name;
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="field-label">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={`field-input ${error ? "border-brick" : ""} ${className}`}
          {...rest}
        />
        {hint && <p className="mt-2 mono-caption-sm">{hint}</p>}
        {error && (
          <p className="mt-2 text-[13px] text-brick font-sans">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; error?: string }
>(({ label, error, className = "", id, ...rest }, ref) => {
  const inputId = id || rest.name;
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="field-label">
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        ref={ref}
        rows={rest.rows ?? 4}
        className={`field-input resize-none ${error ? "border-brick" : ""} ${className}`}
        {...rest}
      />
      {error && (
        <p className="mt-2 text-[13px] text-brick font-sans">{error}</p>
      )}
    </div>
  );
});
Textarea.displayName = "Textarea";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement> & { label?: string; error?: string }
>(({ label, error, className = "", children, id, ...rest }, ref) => {
  const inputId = id || rest.name;
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="field-label">
          {label}
        </label>
      )}
      <select
        id={inputId}
        ref={ref}
        className={`field-input appearance-none ${error ? "border-brick" : ""} ${className}`}
        {...rest}
      >
        {children}
      </select>
      {error && (
        <p className="mt-2 text-[13px] text-brick font-sans">{error}</p>
      )}
    </div>
  );
});
Select.displayName = "Select";

export default Input;
