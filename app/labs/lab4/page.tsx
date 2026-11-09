"use client";

import Link from "next/link";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ProfileForm from "./profile/ProfileForm";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import UrlEncoding from "./UrlEncoding";
import ContextExamples from "./context/ContextExamples";
import ContextProfileForm from "./context/ContextProfileForm";
import ZustandExamples from "./zustand/ZustandExamples";
import ZustandProfileForm from "./zustand/ZustandProfileForm";
import ReduxExamples from "./redux/ReduxExamples";
import Effect from "./Effect";

export default function Lab4() {
  const sayHello = (message: string) => {
    alert(message);
  };
  const sayMyName = () => {
    alert("Alan Nguyen");
  };
  const sampleFromParent = () => {
    alert("Sample from parent");
  };
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <p className="mb-4 flex flex-wrap gap-2">
        <Link
          href="/labs/lab4/hooks"
          id="wd-lab4-hooks-link"
          className="rounded bg-blue-600 px-3 py-1 text-sm text-white no-underline"
        >
          Writing Your Own Hooks
        </Link>
        <Link
          href="/labs/lab4/profile-form"
          id="wd-lab4-profile-form-link"
          className="rounded bg-blue-600 px-3 py-1 text-sm text-white no-underline"
        >
          Profile Forms Side by Side
        </Link>
      </p>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions
        message="Hello from Lab 4"
        theFunction={sayHello}
        theNameFunction={sayMyName}
        theOtherFunction={sampleFromParent}
      />
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ProfileForm />
      <hr />
      <ParentStateComponent />
      <PropDrilling />
      <UrlEncoding />
      <ContextExamples />
      <ContextProfileForm />
      <hr />
      <ZustandExamples />
      <ZustandProfileForm />
      <hr />
      <ReduxExamples />
      <Effect />
    </div>
  );
}
