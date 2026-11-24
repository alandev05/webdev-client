"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
type Assignment = {
  id?: number;
  title?: string;
  description?: string;
  due?: string;
  completed?: boolean;
  score?: number;
};
const field = "mb-2 block w-full max-w-md rounded border border-neutral-300 px-3 py-1.5";
export default function WorkingWithRemoteObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<Assignment>({});
  const updateTitle = async () => {
    setAssignment(await client.updateTitle(assignment.title ?? ""));
  };
  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        setAssignment(await client.fetchAssignment());
      } catch {
        /* companion server may be down */
      }
    };
    fetchAssignment();
  }, []);
  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <input
        id="wd-async-assignment-title"
        className={field}
        value={assignment.title ?? ""}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <textarea
        id="wd-async-assignment-description"
        className={field}
        value={assignment.description ?? ""}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
      />
      <input
        id="wd-async-assignment-due"
        type="date"
        className={field}
        value={assignment.due ?? ""}
        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
      />
      <label className="mb-2 block">
        <input
          id="wd-async-assignment-completed"
          type="checkbox"
          className="me-1"
          checked={assignment.completed ?? false}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        Completed
      </label>
      <button
        type="button"
        id="wd-async-update-title"
        className="mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={updateTitle}
      >
        Update Title
      </button>
      <pre className="rounded bg-neutral-100 p-2 text-sm">
        {JSON.stringify(assignment, null, 2)}
      </pre>
      <hr />
    </div>
  );
}
