"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";
export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const base = `/courses/${cid}`;
  const links = [
    { label: "Home", href: `${base}/home`, id: "wd-course-home-link" },
    { label: "Modules", href: `${base}/modules`, id: "wd-course-modules-link" },
    { label: "Piazza", href: `${base}/piazza`, id: "wd-course-piazza-link" },
    { label: "Zoom", href: `${base}/zoom`, id: "wd-course-zoom-link" },
    {
      label: "Assignments",
      href: `${base}/assignments`,
      id: "wd-course-assignments-link",
    },
    { label: "Quizzes", href: `${base}/quizzes`, id: "wd-course-quizzes-link" },
    { label: "Grades", href: `${base}/grades`, id: "wd-course-grades-link" },
    { label: "People", href: `${base}/people/table`, id: "wd-course-people-link" },
  ];
  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group rounded-none text-lg"
    >
      {links.map((link) => {
        const active =
          pathname === link.href || pathname.startsWith(link.href + "/");
        return (
          <Link
            key={link.id}
            href={link.href}
            id={link.id}
            className={
              active
                ? "list-group-item active border-0"
                : "list-group-item border-0 text-red-600"
            }
          >
            {link.label}
          </Link>
        );
      })}
      <Link
        href={`${base}/home`}
        id="wd-course-ai-link"
        className="list-group-item border-0 text-red-600"
      >
        Sample
      </Link>
    </div>
  );
}
