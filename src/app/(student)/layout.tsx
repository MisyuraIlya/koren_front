"use client"
import { StudentCoursesProvider } from "@/modules/student/provider/StudentCoursesProvider";
import { CoursesProvider } from "@/provider/CourseProvider";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StudentCoursesProvider>
        <CoursesProvider>
          {children}
        </CoursesProvider>
      </StudentCoursesProvider>
    </>
  );
}
