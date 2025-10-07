import React from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  helperText?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type = 'text',
    label,
    error,
    leftIcon,
    rightIcon,
    helperText,
    id,
    ...props 
  }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
    
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-sm font-medium text-corporate-dark mb-2"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400">
                {leftIcon}
              </span>
            </div>
          )}
          
          <input
            type={type}
            id={inputId}
            className={cn(
              "input-field",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error && "border-accent-red focus:ring-accent-red/50 focus:border-accent-red",
              className
            )}
            ref={ref}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-400">
                {rightIcon}
              </span>
            </div>
          )}
        </div>
        
        {error && (
          <p className="mt-1 text-sm text-accent-red">
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p className="mt-1 text-sm text-corporate-light">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export default Input
