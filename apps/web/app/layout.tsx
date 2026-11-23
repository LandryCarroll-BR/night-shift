import { Cormorant_Garamond, Poppins } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"
import { PrismicPreview } from "@prismicio/next"
import { repositoryName } from "@/lib/prismicio"

const instrumentSerifHeading = Poppins({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-heading",
})

const instrumentSans = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "dark",
        "font-sans",
        instrumentSans.variable,
        instrumentSerifHeading.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  )
}
