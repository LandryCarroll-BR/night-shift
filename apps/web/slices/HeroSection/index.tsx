import { FC } from "react"
import { Content } from "@prismicio/client"
import { PrismicRichText, SliceComponentProps } from "@prismicio/react"
import { HeroPrimary } from "@workspace/ui/blocks/hero-primary"
import { SectionHeader } from "@workspace/ui/components/section-header"
import { Display } from "@workspace/ui/components/display"
import { Text } from "@workspace/ui/components/text"
import { ButtonGroup } from "@workspace/ui/components/button-group"
import { Button } from "@workspace/ui/components/button"
import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

/**
 * Props for `HeroSection`.
 */
export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>

/**
 * Component for "HeroSection" Slices.
 */
const HeroSection: FC<HeroSectionProps> = ({ slice }) => {
  return (
    <HeroPrimary
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      images={[
        "https://images.pexels.com/photos/1588075/pexels-photo-1588075.jpeg",
        "https://images.pexels.com/photos/5648436/pexels-photo-5648436.jpeg",
        "https://images.pexels.com/photos/8512603/pexels-photo-8512603.jpeg",
        "https://media.istockphoto.com/id/2191490165/photo/musicians-performing-live-on-stage-with-instruments.jpg?s=1024x1024&w=is&k=20&c=R4ZQeKZsbDEobbcul2dTa2M4MukN_yPcFdAbYYXLF-0=",
      ]}
      video={<AspectRatio ratio={16 / 9} className="bg-primary shadow" />}
    >
      <SectionHeader>
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading1: ({ children }) => <Display size={2}>{children}</Display>,
          }}
        />

        <PrismicRichText
          field={slice.primary.text}
          components={{
            paragraph: ({ children }) => (
              <Text level={"body"} size={1}>
                {children}
              </Text>
            ),
          }}
        />

        <ButtonGroup gap={"sm"}>
          <Button>Book Now</Button>
          <Button variant={"secondary"}>Check the Vibes</Button>
        </ButtonGroup>
      </SectionHeader>
    </HeroPrimary>
  )
}

export default HeroSection
