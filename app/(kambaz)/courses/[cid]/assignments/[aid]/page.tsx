import Link from "next/link";
import * as db from "../../../../database";
const field =
  "w-full rounded border border-neutral-300 px-3 py-2 text-sm";
const label = "mb-1 block text-sm font-medium text-neutral-700";
const section = "mb-4";
export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = db.assignments.find((a) => a._id === aid);
  return (
    <div id="wd-assignments-editor" className="max-w-2xl">
      <div className={section}>
        <label htmlFor="wd-name" className={label}>
          Assignment Name
        </label>
        <input
          id="wd-name"
          defaultValue={assignment?.title ?? ""}
          className={field}
        />
        <p id="wd-assignment-id" className="mt-1 text-sm text-neutral-600">
          Assignment id: {aid}
        </p>
      </div>
      <div className={section}>
        <label htmlFor="wd-description" className={label}>
          Description
        </label>
        <textarea
          id="wd-description"
          rows={4}
          className={field}
          defaultValue={assignment?.description ?? ""}
        />
      </div>
      <div className={section}>
        <label htmlFor="wd-points" className={label}>
          Points
        </label>
        <input
          id="wd-points"
          defaultValue={assignment?.points ?? 100}
          className={field}
        />
      </div>
      <div className={section}>
        <label htmlFor="wd-group" className={label}>
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={field}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>
      <div className={section}>
        <label htmlFor="wd-display-grade-as" className={label}>
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="PERCENTAGE"
          className={field}
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
          <option value="COMPLETE">Complete/Incomplete</option>
        </select>
      </div>
      <div className={section}>
        <label htmlFor="wd-submission-type" className={label}>
          Submission Type
        </label>
        <select id="wd-submission-type" defaultValue="ONLINE" className={field}>
          <option value="ONLINE">Online</option>
          <option value="ON_PAPER">On Paper</option>
          <option value="NO_SUBMISSION">No Submission</option>
          <option value="EXTERNAL_TOOL">External Tool</option>
        </select>
      </div>
      <fieldset className={`${section} rounded border border-neutral-300 p-3`}>
        <legend className="px-1 text-sm font-medium text-neutral-700">
          Online Entry Options
        </legend>
        <div className="flex flex-col gap-1 text-sm">
          <label htmlFor="wd-text-entry">
            <input type="checkbox" id="wd-text-entry" className="me-2" />
            Text Entry
          </label>
          <label htmlFor="wd-website-url">
            <input
              type="checkbox"
              id="wd-website-url"
              defaultChecked
              className="me-2"
            />
            Website URL
          </label>
          <label htmlFor="wd-media-recordings">
            <input type="checkbox" id="wd-media-recordings" className="me-2" />
            Media Recordings
          </label>
          <label htmlFor="wd-student-annotation">
            <input
              type="checkbox"
              id="wd-student-annotation"
              className="me-2"
            />
            Student Annotation
          </label>
          <label htmlFor="wd-file-upload">
            <input type="checkbox" id="wd-file-upload" className="me-2" />
            File Upload
          </label>
        </div>
      </fieldset>
      <fieldset className={`${section} rounded border border-neutral-300 p-3`}>
        <legend className="px-1 text-sm font-medium text-neutral-700">
          Assign
        </legend>
        <div className="mb-3">
          <label htmlFor="wd-assign-to" className={label}>
            Assign to
          </label>
          <input id="wd-assign-to" defaultValue="Everyone" className={field} />
        </div>
        <div className="mb-3">
          <label htmlFor="wd-due-date" className={label}>
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            defaultValue={assignment?.due}
            className={field}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="wd-available-from" className={label}>
              Available from
            </label>
            <input
              type="date"
              id="wd-available-from"
              defaultValue={assignment?.available}
              className={field}
            />
          </div>
          <div>
            <label htmlFor="wd-available-until" className={label}>
              Until
            </label>
            <input
              type="date"
              id="wd-available-until"
              defaultValue="2024-05-20"
              className={field}
            />
          </div>
        </div>
      </fieldset>
      <div className={section}>
        <label htmlFor="wd-ai-editor-notes" className={label}>
          Sample notes
        </label>
        <textarea id="wd-ai-editor-notes" rows={3} className={field} />
      </div>
      <hr className="my-4 border-neutral-300" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
