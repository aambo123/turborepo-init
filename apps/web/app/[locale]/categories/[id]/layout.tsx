export default async function CategoryLayout({
    children,
    tours
  }: Readonly<{
    children: React.ReactNode,
    tours: React.ReactNode,
  }>) {
    return (
        <>
        {children}
        {tours}
        </>
    )
  }
  