"use client"
import TeacherLayout from "@/modules/teacher/components/layout/TeacherLayout";
import { TeacherCoursesProvider } from "@/modules/teacher/provider/TeacherCoursesProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TeacherCoursesProvider>
        <TeacherLayout>
          {children}
        </TeacherLayout>
      </TeacherCoursesProvider>
    </>
  );
}
