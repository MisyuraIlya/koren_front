"use client"
import Layout from "@/components/layout";
export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <Layout.SideBar>
        {children}
    </Layout.SideBar>

  );
}
