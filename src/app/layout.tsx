import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: 'Grinding With Ross',
    default: 'Grinding With Ross',
    template: '%s | Grinding With Ross'
  },
  description: 'Hi, welcome to the blog Grinding With Ross',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/About">About</Link>
        {children}
      </body>
    </html>
  )
}
