import { FC } from "react"
import { HStack, Stack, Square, Box } from "@chakra-ui/react"
import { LabelMd } from "../../../components/Typography"
import { Image, ImageProps } from "../../../components"

const ImageStack: FC<{
  title: string
  description: string
  image: ImageProps
}> = ({ title, description, image }) => {
  return (
    <Stack
      maxW={{ base: "100%", md: "300px" }}
      w="full"
      direction={{
        base: "row",
        md: "column",
      }}
      spacing={8}
    >
      <Image w="128px" h="128px" {...image} />
      <Stack direction="column">
        <HStack>
          <Square bg="brand.500" w="20px" h="20px" />
          <LabelMd>{title}</LabelMd>
        </HStack>
        <Box
          mt="1rem"
          layerStyle="bodyMd"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Stack>
    </Stack>
  )
}

export default ImageStack
