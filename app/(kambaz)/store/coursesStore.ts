"use client";

import { create } from "zustand";

export type Course = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
  image: string;
  term: string;
};

const emptyCourse: Course = {
  _id: "0",
  name: "New Course",
  number: "New Number",
  startDate: "2023-09-10",
  endDate: "2023-12-15",
  department: "D123",
  credits: 4,
  description: "New Description",
  image: "/images/reactjs.jpg",
  term: "New Term",
};

// Client cache of the courses the server returned. The server owns the data
// and assigns every _id, so nothing here mints ids.
type CoursesStore = {
  courses: Course[];
  setCourses: (courses: Course[]) => void;
  addCourse: (course: Course) => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: (course: Course) => void;
};

export const useCoursesStore = create<CoursesStore>((set) => ({
  courses: [],
  setCourses: (courses) => set({ courses }),
  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, course],
    })),
  deleteCourse: (courseId) =>
    set((state) => ({
      courses: state.courses.filter((course) => course._id !== courseId),
    })),
  updateCourse: (course) =>
    set((state) => ({
      courses: state.courses.map((c) => (c._id === course._id ? course : c)),
    })),
}));

export { emptyCourse };
