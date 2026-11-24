import Environment from "./Environment";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithRemoteObjects from "./WorkingWithRemoteObjects";
import WorkingWithRemoteArrays from "./WorkingWithRemoteArrays";
import HttpClient from "./HttpClient";
import WorkingWithRemoteObjectsAsynchronously from "./WorkingWithRemoteObjectsAsync";
import WorkingWithRemoteArraysAsynchronously from "./WorkingWithRemoteArraysAsync";
import HelloRoute from "./HelloRoute";
import CalculatorNextWebApiClient from "./Calculator";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function Lab5() {
  return (
    <div id="wd-lab5" className="p-2">
      <h2>Lab 5</h2>
      <div className="mb-2">
        <a
          id="wd-lab5-welcome-link"
          className="text-blue-700 underline"
          href={`${HTTP_SERVER}/lab5/welcome`}
        >
          Welcome
        </a>
      </div>
      <Environment />
      <PathParameters />
      <QueryParameters />
      <WorkingWithRemoteObjects />
      <WorkingWithRemoteArrays />
      <HttpClient />
      <WorkingWithRemoteObjectsAsynchronously />
      <WorkingWithRemoteArraysAsynchronously />
      <HelloRoute />
      <CalculatorNextWebApiClient />
    </div>
  );
}
