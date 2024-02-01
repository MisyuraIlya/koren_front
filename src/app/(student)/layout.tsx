"use client"
import { StudentCoursesProvider } from "@/modules/student/provider/StudentCoursesProvider";
import CoursesPageComponent from "@/modules/student/components/courses/CoursesPageComponent";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StudentCoursesProvider>
        <CoursesPageComponent>
          {children}
        </CoursesPageComponent>
      </StudentCoursesProvider>
    </>
  );
}
