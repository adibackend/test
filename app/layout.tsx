import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'shadcn',
  description: 'Admin Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` w-full antialiased overflow-x-auto`}>
        <Navbar />
        <div className="flex">
          <div className="h-[100vh] w-[250px]  md:block hidden">
            <Sidebar />
          </div>
          <div className="p-5  w-full md:max-w-[1140px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
