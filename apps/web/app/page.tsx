import { HeroPrimary } from "@workspace/ui/blocks/hero-primary"
import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Button } from "@workspace/ui/components/button"
import { ButtonGroup } from "@workspace/ui/components/button-group"
import { Display } from "@workspace/ui/components/display"
import { SectionHeader } from "@workspace/ui/components/section-header"
import { Text } from "@workspace/ui/components/text"
import { PageLayout } from "@workspace/ui/components/page-layout"

export default function Page() {
  return (
    <PageLayout>
      <HeroPrimary
        images={[
          "https://images.pexels.com/photos/1588075/pexels-photo-1588075.jpeg",
          "https://images.pexels.com/photos/5648436/pexels-photo-5648436.jpeg",
          "https://images.pexels.com/photos/8512603/pexels-photo-8512603.jpeg",
          "https://media.istockphoto.com/id/2191490165/photo/musicians-performing-live-on-stage-with-instruments.jpg?s=1024x1024&w=is&k=20&c=R4ZQeKZsbDEobbcul2dTa2M4MukN_yPcFdAbYYXLF-0=",
        ]}
        video={<AspectRatio ratio={16 / 9} className="bg-primary shadow" />}
      >
        <SectionHeader>
          <Display size={2}>We don&apos;t just make music.</Display>
          <Text level={"body"} size={1}>
            We create memories.
          </Text>

          <ButtonGroup gap={"sm"}>
            <Button>Book Now</Button>
            <Button variant={"secondary"}>Check the Vibes</Button>
          </ButtonGroup>
        </SectionHeader>
      </HeroPrimary>
    </PageLayout>
  )
}
