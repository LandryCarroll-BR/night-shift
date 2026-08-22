import { cn } from "@workspace/ui/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import * as React from "react"

const displayVariants = cva("font-heading", {
  variants: {
    size: {
      1: "text-displayLarge",
      2: "text-displayMedium",
      3: "text-displaySmall",
    },
  },
  defaultVariants: {
    size: 1,
  },
})

type DisplayLevel = 1 | 2 | 3

interface DisplayProps
  extends
    React.HtmlHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof displayVariants> {
  level?: DisplayLevel
}

function Display({
  level = 1,
  size,
  className,
  children,
  ...props
}: DisplayProps) {
  const Element: `h${typeof level}` = `h${level}`

  return (
    <Element
      data-slot="display"
      className={cn(displayVariants({ size: size || level }), className)}
      {...props}
    >
      {children}
    </Element>
  )
}

export type { DisplayLevel, DisplayProps }

export { Display, displayVariants }
