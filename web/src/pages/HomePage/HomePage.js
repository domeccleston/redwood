import { Link, routes } from '@redwoodjs/router'

import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <BlogLayout>
      <BlogPostCell />
    </BlogLayout>
  )
}

export default HomePage
