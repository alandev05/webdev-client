import { FaCheckCircle, FaFileImport } from "react-icons/fa";
import {
  MdDoNotDisturbAlt,
  MdOutlineAnalytics,
  MdOutlineAutoAwesome,
  MdOutlineCampaign,
  MdOutlineHome,
  MdOutlineLibraryBooks,
  MdOutlineNotifications,
  MdOutlineViewStream,
} from "react-icons/md";
const fullWidth =
  "mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm";
const icon = "me-2 shrink-0 text-base";
export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <button type="button" className={fullWidth}>
        <FaFileImport className={icon} /> Import Existing Content
      </button>
      <button type="button" className={fullWidth}>
        <MdOutlineLibraryBooks className={icon} /> Import from Commons
      </button>
      <button type="button" className={fullWidth}>
        <MdOutlineHome className={icon} /> Choose Home Page
      </button>
      <button type="button" className={fullWidth}>
        <MdOutlineViewStream className={icon} /> View Course Stream
      </button>
      <button type="button" className={fullWidth}>
        <MdOutlineCampaign className={icon} /> New Announcement
      </button>
      <button type="button" className={fullWidth}>
        <MdOutlineAnalytics className={icon} /> New Analytics
      </button>
      <button type="button" className={fullWidth}>
        <MdOutlineNotifications className={icon} /> View Course Notifications
      </button>
      <button type="button" id="wd-ai-status" className={fullWidth}>
        <MdOutlineAutoAwesome className={icon} /> Sample action
      </button>
    </div>
  );
}
