export default function BlogPost({ params }: { params: { blogPost: string } }) {
  return (
    <h1>Blog Title { params.blogPost }</h1>
  )
}
