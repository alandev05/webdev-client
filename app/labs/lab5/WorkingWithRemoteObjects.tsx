"use client";
import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const input = "mb-2 me-2 rounded border border-neutral-300 px-3 py-1.5";
const button =
  "mb-2 me-2 inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline";
export default function WorkingWithRemoteObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: "hi",
    name: "hi",
    description: "there",
    course: "there",
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className={button} href={ASSIGNMENT_API_URL}>
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className={button} href={`${ASSIGNMENT_API_URL}/title`}>
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <div>
        <a
          id="wd-update-assignment-title"
          className={button}
          href={`${ASSIGNMENT_API_URL}/title/${encodeURIComponent(assignment.title)}`}
        >
          Update Title
        </a>
        <input
          id="wd-assignment-title"
          className={input}
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </div>
      <div>
        <a
          id="wd-update-assignment-score"
          className={button}
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
        >
          Update Score
        </a>
        <input
          id="wd-assignment-score"
          type="number"
          className={input}
          value={assignment.score}
          onChange={(e) =>
            setAssignment({ ...assignment, score: parseInt(e.target.value) || 0 })
          }
        />
      </div>
      <div>
        <a
          id="wd-update-assignment-completed"
          className={button}
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
        >
          Update Completed
        </a>
        <label>
          <input
            id="wd-assignment-completed"
            type="checkbox"
            className="me-1"
            checked={assignment.completed}
            onChange={(e) =>
              setAssignment({ ...assignment, completed: e.target.checked })
            }
          />
          Completed
        </label>
      </div>
      <h4>Module (On Your Own)</h4>
      <a id="wd-retrieve-module" className={button} href={MODULE_API_URL}>
        Get Module
      </a>
      <a id="wd-retrieve-module-name" className={button} href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>
      <div>
        <a
          id="wd-update-module-name"
          className={button}
          href={`${MODULE_API_URL}/name/${encodeURIComponent(module.name)}`}
        >
          Update Module Name
        </a>
        <input
          id="wd-module-name"
          className={input}
          value={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })}
        />
      </div>
      <div>
        <a
          id="wd-update-module-description"
          className={button}
          href={`${MODULE_API_URL}/description/${encodeURIComponent(module.description)}`}
        >
          Update Module Description
        </a>
        <input
          id="wd-module-description"
          className={input}
          value={module.description}
          onChange={(e) => setModule({ ...module, description: e.target.value })}
        />
      </div>
      <hr />
    </div>
  );
}
