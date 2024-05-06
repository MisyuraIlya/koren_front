"use client"
import WorkLayout from "@/components/shared/WorkLayout";
export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
      <WorkLayout>
        {children}
      </WorkLayout>

  );
}
