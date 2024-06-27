export const metadata = {
  title: 'Grinding With Ross',
  description: 'Hi, welcome to the blog Grinding With Ross',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
