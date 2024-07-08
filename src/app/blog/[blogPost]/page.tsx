import { Metadata } from "next";

type Props = {
  params: {
    blogPost: string;
    blogDescription: string;
  }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Blog: ${params.blogPost}`,
    // description: params.blogDescription
  }
}

export const generateStaticParams() = 

export default function BlogPost({ params }: Props) {
  return (
    <h1>Blog Title { params.blogPost }</h1>
  )
}
