import { cn } from "@workspace/ui/lib/utils"
import * as React from "react"

interface SectionHeaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  align?: "center" | "left"
}

function SectionHeader({
  align = "center",
  className,
  children,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col **:data-[slot='button-group']:mt-layout-md",
        align === "center" && "items-center text-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export type { SectionHeaderProps }

export { SectionHeader }
