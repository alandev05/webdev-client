"use client";
import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const input = "mb-2 me-2 rounded border border-neutral-300 px-3 py-1.5";
const button =
  "mb-2 me-2 inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline";
export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  const url = (operation: string) =>
    `${HTTP_SERVER}/lab5/calculator?operation=${operation}&a=${a}&b=${b}`;
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input
        className={input}
        id="wd-query-parameter-a"
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        className={input}
        id="wd-query-parameter-b"
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <br />
      <a className={button} id="wd-query-parameter-add" href={url("add")}>
        Add {a} + {b}
      </a>
      <a className={button} id="wd-query-parameter-subtract" href={url("subtract")}>
        Subtract {a} - {b}
      </a>
      <a className={button} id="wd-query-parameter-multiply" href={url("multiply")}>
        Multiply {a} &times; {b}
      </a>
      <a className={button} id="wd-query-parameter-divide" href={url("divide")}>
        Divide {a} &divide; {b}
      </a>
      <hr />
    </div>
  );
}
