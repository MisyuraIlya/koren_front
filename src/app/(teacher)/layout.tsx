"use client"
import TeacherLayout from "@/modules/teacher/components/layout/TeacherLayout";
import { TeacherProvider } from "@/modules/teacher/provider/TeacherLayoutProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TeacherProvider>
        <TeacherLayout>
          {children}
        </TeacherLayout>
      </TeacherProvider>
    </>
  );
}
