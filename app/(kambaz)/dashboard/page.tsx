"use client";

import { useCallback, useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import * as client from "../courses/client";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useAccountContext } from "../account/AccountContext";

const field =
  "mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5";

export default function Dashboard() {
  // The server is the source of truth; the Zustand store is a client cache.
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const { currentUser } = useAccountContext();
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [enrolledIds, setEnrolledIds] = useState<string[]>([]);
  const [error, setError] = useState("");

  // Signed in: the server filters to enrolled courses (or all, with the
  // Enrollments toggle). Signed out: every course.
  const load = useCallback(async () => {
    try {
      if (currentUser) {
        const enrollments = await client.findMyEnrollments();
        setEnrolledIds(enrollments.map((e) => e.course));
        setCourses(
          showAllCourses
            ? await client.fetchAllCourses()
            : await client.findMyCourses(),
        );
      } else {
        setEnrolledIds([]);
        setCourses(await client.fetchAllCourses());
      }
      setError("");
    } catch {
      setCourses([]);
      setError("Unable to reach the Kambaz server.");
    }
  }, [currentUser, showAllCourses, setCourses]);

  useEffect(() => {
    // load awaits the server before setting state, so the first paint requests it.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- load replaces the empty list
    void load();
  }, [load]);

  const onAddCourse = async () => {
    const { _id: _unused, ...fields } = course;
    void _unused;
    const newCourse = currentUser
      ? await client.createCourse(fields)
      : await client.createCourseUnenrolled(fields);
    addCourse(newCourse);
    if (currentUser) setEnrolledIds([...enrolledIds, newCourse._id]);
  };
  const onUpdateCourse = async () => {
    const saved = await client.updateCourse(course);
    updateCourse(saved);
  };
  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    deleteCourse(courseId);
  };
  const onToggleEnrollment = async (courseId: string) => {
    if (!currentUser) return;
    if (enrolledIds.includes(courseId)) {
      await client.unenrollFromCourse("current", courseId);
    } else {
      await client.enrollIntoCourse("current", courseId);
    }
    await load();
  };

  return (
    <div id="wd-dashboard">
      <h1
        id="wd-dashboard-title"
        className="flex flex-wrap items-center justify-between gap-2"
      >
        Dashboard
        {currentUser && (
          <button
            type="button"
            id="wd-enrollments-toggle"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            Enrollments
          </button>
        )}
      </h1>
      <hr />
      {error && (
        <p className="my-2 rounded bg-red-100 px-3 py-2 text-red-800">{error}</p>
      )}
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={onAddCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={onUpdateCourse}
        >
          Update
        </button>
      </h5>
      <input
        className={`mt-2 ${field}`}
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className={field}
        rows={3}
        value={course.description}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
        id="wd-course-description"
      />
      <input
        className={field}
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
        placeholder="Course number"
      />
      <input
        type="date"
        className={`mb-3 ${field}`}
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            onEdit={() => setCourse(c)}
            onDelete={() => onDeleteCourse(c._id)}
            enrolled={currentUser ? enrolledIds.includes(c._id) : undefined}
            onToggleEnrollment={() => onToggleEnrollment(c._id)}
          />
        ))}
      </div>
    </div>
  );
}
