"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Lesson from "./Lesson";
import Module from "./Module";
import ModulesControls from "./ModulesControls";
import * as client from "../../client";
import {
  useModulesStore,
  type CourseModule,
} from "../../../store/modulesStore";

export default function Modules() {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  // The server filters modules by course; the store only caches that list.
  const modules = useModulesStore((state) => state.modules);
  const setModules = useModulesStore((state) => state.setModules);
  const addModule = useModulesStore((state) => state.addModule);
  const updateModule = useModulesStore((state) => state.updateModule);
  const deleteModule = useModulesStore((state) => state.deleteModule);

  useEffect(() => {
    const load = async () => {
      setModules([]);
      setModules(await client.findModulesForCourse(courseId));
    };
    load();
  }, [courseId, setModules]);

  const onAddModule = async (moduleName: string) => {
    const created = await client.createModuleForCourse(courseId, {
      name: moduleName,
      description: "",
    });
    addModule(created);
  };
  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    deleteModule(moduleId);
  };
  const onUpdateModule = async (module: CourseModule) => {
    // "editing" is UI-only state; do not persist it on the server
    const { editing: _editing, ...toSave } = module;
    void _editing;
    const saved = await client.updateModule(toSave);
    updateModule(saved);
  };

  return (
    <div>
      <ModulesControls onAddModule={onAddModule} />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module
            key={module._id}
            module={module}
            onUpdateModule={onUpdateModule}
            onRemoveModule={onRemoveModule}
          >
            {module.lessons?.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name} />
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}
