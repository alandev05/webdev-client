import type { ReactNode } from "react";
import ModuleControlButtons from "./ModuleControlButtons";
import {
  useModulesStore,
  type CourseModule,
} from "../../../store/modulesStore";

export default function Module({
  module,
  onUpdateModule,
  onRemoveModule,
  children,
}: {
  module: CourseModule;
  onUpdateModule: (module: CourseModule) => void;
  onRemoveModule: (moduleId: string) => void;
  children?: ReactNode;
}) {
  // typing only updates the local cache; Enter saves to the server
  const updateModule = useModulesStore((state) => state.updateModule);
  return (
    <li
      id={`wd-module-${module._id}`}
      className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl"
    >
      <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 ps-2">
        <span className="min-w-0 flex-1">
          {module.editing ? (
            <input
              className="w-1/2 rounded border border-neutral-300 px-2 py-1 text-base"
              defaultValue={module.name}
              onChange={(e) => updateModule({ ...module, name: e.target.value })}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onUpdateModule({
                    ...module,
                    name: e.currentTarget.value,
                    editing: false,
                  });
                }
              }}
              autoFocus
            />
          ) : (
            module.name
          )}
        </span>
        <ModuleControlButtons
          moduleId={module._id}
          deleteModule={onRemoveModule}
        />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
    </li>
  );
}
