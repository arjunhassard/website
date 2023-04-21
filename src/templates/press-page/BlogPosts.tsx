import { FC } from "react"
import { Box, SimpleGrid, Stack } from "@chakra-ui/react"
import Card from "../../components/Card"
import ExternalButtonLink from "../../components/Buttons/ExternalButtonLink"
import { ExternalLinkHref } from "../../components/Navbar/types"
import useGhostBlogPosts from "../../hooks/useGhostBlogPosts"
import { H3, H5 } from "../../components"

export interface BlogPost {
  title: string
  subTitle: string
  description: string
  url: string
}

const BlogCard: FC<BlogPost> = ({ title, subTitle, description, url }) => {
  return (
    <Card
      m="auto"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      w="100%"
    >
      <Stack spacing={6}>
        <Stack spacing={4} minH="100px">
          <Card.Title noOfLines={2}>{title}</Card.Title>
          <Card.SubTitle>{subTitle}</Card.SubTitle>
        </Stack>
        <Card.Divider />
        <Card.Body as="div" noOfLines={6}>
          {description}
        </Card.Body>
      </Stack>
      <ExternalButtonLink mt={16} href={url as ExternalLinkHref} variant="link">
        Read
      </ExternalButtonLink>
    </Card>
  )
}

export interface BlogPostsProps {
  title: string
  subTitle: string
}

const BlogPosts: FC<BlogPostsProps> = ({ title, subTitle }) => {
  const blogPosts = useGhostBlogPosts()

  return (
    <Box>
      <H3 color="gray.50">{title}</H3>
      <H5 mt={4} color="gray.300">
        {subTitle}
      </H5>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={8}>
        {blogPosts.slice(0, 3).map((post: any, i) => (
          <BlogCard key={i} {...post} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default BlogPosts
