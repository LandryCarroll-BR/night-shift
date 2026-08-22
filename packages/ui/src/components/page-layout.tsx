import { cn } from "@workspace/ui/lib/utils"
import * as React from "react"

interface PageLayoutProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

function PageLayout({ children, className, ...props }: PageLayoutProps) {
  return (
    <div className={cn("flex min-h-svh flex-col", className)} {...props}>
      {children}
    </div>
  )
}

export type { PageLayoutProps }

export { PageLayout }
