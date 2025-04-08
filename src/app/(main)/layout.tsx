export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main style={{ padding: "20px" }}>{children}</main>;
}
