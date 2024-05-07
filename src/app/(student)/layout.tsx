"use client"
import MainLayout from "@/components/layout/MainLayout";
import { TeacherCoursesProvider } from "@/modules/teacher/provider/TeacherCoursesProvider";
import { CoursesProvider } from "@/provider/CourseProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CoursesProvider>
        <MainLayout>
          {children}
        </MainLayout>
      </CoursesProvider>
    </>
  );
}
