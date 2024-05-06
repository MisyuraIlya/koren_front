"use client"
import TeacherLayout from "@/modules/teacher/components/layout/TeacherLayout";
import { CoursesProvider } from "@/provider/CourseProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CoursesProvider>
        <TeacherLayout>
          {children}
        </TeacherLayout>
      </CoursesProvider>
    </>
  );
}
