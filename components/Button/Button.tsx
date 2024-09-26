import { cva, type VariantProps } from "class-variance-authority"
import { Button as HuButton, ButtonProps as HuButtonProps } from "@headlessui/react"
import { twMerge } from "tailwind-merge"
import { ElementType } from "react"

const button = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-xl",
    "text-center",
    "transition-colors",
    "delay-50",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-primary-downloadButtonColor", "text-white", "hover:enabled:bg-blue-700"],
        secondary: ["bg-transparent", "text-blue-400", "hover:enabled:bg-blue-400", "hover:enabled:text-white"],
      },
      size: {
        sm: ["min-w-20", "h-full", "min-h-10", "text-sm", "py-2", "px-4"],
        lg: ["min-w-26", , "h-full",  "min-h-10", "text-md", "py-2.5", "px-3"],
      },
      underline: { true: ["underline"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
)

export type ButtonProps<E extends ElementType> = HuButtonProps<E> & VariantProps<typeof button> & {
  className?: string;
}

export function Button<T extends ElementType = 'button'>({ className, intent, size, underline, ...props }: ButtonProps<T>) {
  return (
    <HuButton  {...props} className={twMerge(button({ intent, size, underline, className }))}>
      {props.children}
    </HuButton>
  )
}
