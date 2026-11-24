"use client";

import { create } from "zustand";

export type Assignment = {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  due: string;
  available: string;
  until?: string;
};

export const emptyAssignment = (course: string): Assignment => ({
  _id: "new",
  title: "New Assignment",
  course,
  description: "New Assignment Description",
  points: 100,
  due: "",
  available: "",
  until: "",
});

// Client cache of the assignments the server returned for the open course.
type AssignmentsStore = {
  assignments: Assignment[];
  setAssignments: (assignments: Assignment[]) => void;
  addAssignment: (assignment: Assignment) => void;
  updateAssignment: (assignment: Assignment) => void;
  deleteAssignment: (assignmentId: string) => void;
  findAssignment: (assignmentId: string) => Assignment | undefined;
};

export const useAssignmentsStore = create<AssignmentsStore>((set, get) => ({
  assignments: [],
  setAssignments: (assignments) => set({ assignments }),
  addAssignment: (assignment) =>
    set((state) => ({
      assignments: [...state.assignments, assignment],
    })),
  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a,
      ),
    })),
  deleteAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.filter((a) => a._id !== assignmentId),
    })),
  findAssignment: (assignmentId) =>
    get().assignments.find((a) => a._id === assignmentId),
}));
