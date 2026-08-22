"use client"

import { cn } from "@workspace/ui/lib/utils"
import { motion } from "framer-motion"
import * as React from "react"

interface HeroPrimaryProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  images: string[]
  video: React.ReactNode
}

function HeroPrimary({
  children,
  images,
  className,
  video,
  ...props
}: HeroPrimaryProps) {
  return (
    <section className={cn(className)} {...props}>
      <div
        className={cn(
          "relative isolate grid min-h-svh w-full place-items-center overflow-hidden p-layout-lg uppercase"
        )}
      >
        <div className="relative z-10">
          {children}

          {video && (
            <div className="mx-auto mt-layout-lg max-w-xl">{video}</div>
          )}
        </div>

        <div className="absolute inset-0 -left-1/3 grayscale">
          {images.map((src, index) => (
            <HeroPrimaryImage
              key={`${src}-${index}`}
              src={src}
              index={index}
              context={{ imagesLength: images.length }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-background from-10% to-background/50" />
      </div>
    </section>
  )
}

interface HeroPrimaryImageProps extends React.HTMLAttributes<HTMLImageElement> {
  index: number
  src: string
  context: {
    imagesLength: number
  }
}

function HeroPrimaryImage({
  index,
  src,
  context = { imagesLength: 0 },
}: HeroPrimaryImageProps) {
  return (
    <div
      className="absolute inset-y-0 w-1/2 clip-chevron"
      style={{ left: `${index * (100 / context.imagesLength)}%` }}
    >
      <motion.img
        src={src}
        alt=""
        className="size-full object-cover"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.3 + index * 0.1,
          ease: "easeOut",
        }}
      />
    </div>
  )
}

export type { HeroPrimaryProps }

export { HeroPrimary }
