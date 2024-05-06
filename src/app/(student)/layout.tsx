"use client"
import StudentLayout from "@/modules/student/layout/StudentLayout";
import TeacherLayout from "@/modules/teacher/components/layout/TeacherLayout";
import { TeacherCoursesProvider } from "@/modules/teacher/provider/TeacherCoursesProvider";
import { CoursesProvider } from "@/provider/CourseProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CoursesProvider>
        <StudentLayout>
          {children}
        </StudentLayout>
      </CoursesProvider>
    </>
  );
}
