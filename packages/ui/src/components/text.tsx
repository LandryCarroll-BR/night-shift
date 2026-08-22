import { cn } from "@workspace/ui/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import * as React from "react"

const textVariants = cva("font-sans", {
  variants: {
    level: {
      subtitle: "text-subtitle",
      body: "text-body",
      caption: "text-caption",
      label: "text-label",
      tagline: "text-tagline",
    },
    size: {
      1: "text-heading1",
      2: "text-heading2",
      3: "text-heading3",
      4: "text-heading4",
      5: "text-heading5",
      6: "text-heading6",
    },
  },
  defaultVariants: {
    level: "body",
  },
})

interface TextProps
  extends
    React.HtmlHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof textVariants> {}

function Text({
  level = "body",
  size,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <p
      data-slot="text"
      className={cn(textVariants({ level, size }), className)}
      {...props}
    >
      {children}
    </p>
  )
}

export type { TextProps }

export { Text, textVariants }
