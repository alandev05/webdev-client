import axios from "axios";
import type { Course } from "../store/coursesStore";
import type { CourseModule } from "../store/modulesStore";
import type { Assignment } from "../store/assignmentsStore";
import type { User } from "../account/AccountContext";

// Every Kambaz request carries the session cookie so routes that resolve
// "current" (enrollments, course creation) know who is signed in.
const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const USERS_API = `${HTTP_SERVER}/api/users`;
const MODULES_API = `${HTTP_SERVER}/api/modules`;
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;

// ----- Courses
export const fetchAllCourses = async (): Promise<Course[]> => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};
export const findCourseById = async (courseId: string): Promise<Course> => {
  const { data } = await axiosWithCredentials.get(`${COURSES_API}/${courseId}`);
  return data;
};
export const findMyCourses = async (): Promise<Course[]> => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return data;
};
// signed in: creates the course and enrolls the current user in it
export const createCourse = async (course: Partial<Course>): Promise<Course> => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/current/courses`,
    course,
  );
  return data;
};
// signed out: creates the course without an enrollment
export const createCourseUnenrolled = async (
  course: Partial<Course>,
): Promise<Course> => {
  const { data } = await axiosWithCredentials.post(COURSES_API, course);
  return data;
};
export const deleteCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${courseId}`);
  return data;
};
export const updateCourse = async (course: Course): Promise<Course> => {
  const { data } = await axiosWithCredentials.put(
    `${COURSES_API}/${course._id}`,
    course,
  );
  return data;
};

// ----- Modules
export const findModulesForCourse = async (
  courseId: string,
): Promise<CourseModule[]> => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/modules`,
  );
  return response.data;
};
export const createModuleForCourse = async (
  courseId: string,
  module: Partial<CourseModule>,
): Promise<CourseModule> => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/modules`,
    module,
  );
  return response.data;
};
export const deleteModule = async (moduleId: string) => {
  const response = await axiosWithCredentials.delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};
export const updateModule = async (module: CourseModule): Promise<CourseModule> => {
  const { data } = await axiosWithCredentials.put(
    `${MODULES_API}/${module._id}`,
    module,
  );
  return data;
};

// ----- Assignments
export const findAssignmentsForCourse = async (
  courseId: string,
): Promise<Assignment[]> => {
  const { data } = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/assignments`,
  );
  return data;
};
export const findAssignmentById = async (
  assignmentId: string,
): Promise<Assignment> => {
  const { data } = await axiosWithCredentials.get(
    `${ASSIGNMENTS_API}/${assignmentId}`,
  );
  return data;
};
export const createAssignmentForCourse = async (
  courseId: string,
  assignment: Partial<Assignment>,
): Promise<Assignment> => {
  const { data } = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment,
  );
  return data;
};
export const updateAssignment = async (
  assignment: Assignment,
): Promise<Assignment> => {
  const { data } = await axiosWithCredentials.put(
    `${ASSIGNMENTS_API}/${assignment._id}`,
    assignment,
  );
  return data;
};
export const deleteAssignment = async (assignmentId: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${ASSIGNMENTS_API}/${assignmentId}`,
  );
  return data;
};

// ----- Enrollments
export type Enrollment = { _id: string; user: string; course: string };
export const findMyEnrollments = async (): Promise<Enrollment[]> => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/current/enrollments`,
  );
  return data;
};
export const enrollIntoCourse = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/${userId}/courses/${courseId}`,
  );
  return data;
};
export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${USERS_API}/${userId}/courses/${courseId}`,
  );
  return data;
};

// ----- People
export const findUsersForCourse = async (courseId: string): Promise<User[]> => {
  const { data } = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/users`);
  return data;
};
export const createUser = async (user: Partial<User>): Promise<User> => {
  const { data } = await axiosWithCredentials.post(USERS_API, user);
  return data;
};
export const updateUser = async (user: User): Promise<User> => {
  const { data } = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
  return data;
};
export const deleteUser = async (userId: string) => {
  const { data } = await axiosWithCredentials.delete(`${USERS_API}/${userId}`);
  return data;
};
