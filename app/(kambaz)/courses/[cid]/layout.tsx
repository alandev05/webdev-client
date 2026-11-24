"use client";

import { ReactNode, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import * as client from "../client";
import { useCoursesStore, type Course } from "../../store/coursesStore";
import { useAccountContext } from "../../account/AccountContext";

export default function CoursesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const cached = useCoursesStore((state) =>
    state.courses.find((c) => c._id === courseId),
  );
  const [fetched, setFetched] = useState<Course | undefined>(undefined);
  const course = cached ?? fetched;
  const [showCourseNav, setShowCourseNav] = useState(true);
  const { currentUser } = useAccountContext();
  // null = still checking with the server
  const [enrolled, setEnrolled] = useState<boolean | null>(null);
  const router = useRouter();

  // After a refresh the cache is empty, so read the course from the server.
  useEffect(() => {
    if (cached) return;
    client.findCourseById(courseId).then(setFetched).catch(() => {});
  }, [cached, courseId]);

  // Route protection: a signed-in user may only open courses they are enrolled in.
  useEffect(() => {
    const check = async () => {
      if (!currentUser) {
        setEnrolled(true);
        return;
      }
      try {
        const enrollments = await client.findMyEnrollments();
        setEnrolled(enrollments.some((e) => e.course === courseId));
      } catch {
        setEnrolled(false);
      }
    };
    check();
  }, [currentUser, courseId]);

  useEffect(() => {
    if (enrolled === false) router.push("/dashboard");
  }, [enrolled, router]);

  if (!enrolled) return null;

  return (
    <div id="wd-courses">
      <h2 className="text-2xl font-semibold text-red-600">
        <FaAlignJustify
          className="me-4 mb-1 inline cursor-pointer text-xl"
          onClick={() => setShowCourseNav(!showCourseNav)}
          title="Toggle course navigation"
          id="wd-course-nav-toggle"
        />
        <Breadcrumb course={course} />
        <span id="wd-course-id" className="ms-2 text-base text-neutral-500">
          ({course?._id})
        </span>
      </h2>
      <hr className="my-3" />
      <div className="flex gap-4">
        {showCourseNav ? (
          <div className="hidden w-[140px] shrink-0 md:block">
            <CourseNavigation cid={courseId} />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
