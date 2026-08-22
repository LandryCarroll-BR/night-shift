import { cn } from "@workspace/ui/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import * as React from "react"

const headingVariants = cva("font-sans", {
  variants: {
    size: {
      1: "text-heading1",
      2: "text-heading-2",
      3: "text-heading-3",
      4: "text-heading-4",
      5: "text-heading5",
      6: "text-heading6",
    },
  },
  defaultVariants: {
    size: 1,
  },
})

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

interface HeadingProps
  extends
    React.HtmlHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  level?: HeadingLevel
}

function Heading({
  level = 1,
  size,
  className,
  children,
  ...props
}: HeadingProps) {
  const Element: `h${typeof level}` = `h${level}`

  return (
    <Element
      data-slot="heading"
      className={cn(headingVariants({ size: size || level }), className)}
      {...props}
    >
      {children}
    </Element>
  )
}

export type { HeadingLevel, HeadingProps }

export { Heading, headingVariants }
