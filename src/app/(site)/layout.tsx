import Navbar from "@/components/Home/Navbar";
import Sidebar from "@/components/Home/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
