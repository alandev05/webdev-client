"use client";
import { useState } from "react";
const SYMBOLS: Record<string, string> = {
  add: "+",
  subtract: "-",
  multiply: "×",
  divide: "÷",
};
const field = "rounded border border-neutral-300 px-3 py-1.5";
export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const calculate = async (op = operation) => {
    const params = new URLSearchParams({ a, b, operation: op });
    const response = await fetch(`/api/lab5/calculator?${params}`);
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
      setResult("");
      return;
    }
    setError("");
    setResult(`${data.a} ${SYMBOLS[data.operation]} ${data.b} = ${data.result}`);
  };
  return (
    <div id="wd-calculator-next-web-api">
      <h3>Calculator (Next.js Web API)</h3>
      <div className="flex max-w-md flex-col gap-2">
        <label>
          A: <input id="wd-calculator-a" className={field} placeholder="A" value={a} onChange={(e) => setA(e.target.value)} />
        </label>
        <label>
          B: <input id="wd-calculator-b" className={field} placeholder="B" value={b} onChange={(e) => setB(e.target.value)} />
        </label>
        <label>
          Operation:{" "}
          <select
            id="wd-calculator-operation"
            className={field}
            value={operation}
            onChange={(e) => {
              setOperation(e.target.value);
              calculate(e.target.value);
            }}
          >
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="multiply">×</option>
            <option value="divide">÷</option>
            <option value="modulo">% (unsupported)</option>
          </select>
        </label>
        <button
          type="button"
          id="wd-calculator-calculate"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          onClick={() => calculate()}
        >
          Calculate
        </button>
        <input id="wd-calculator-result" className={field} readOnly value={result} />
        {error && (
          <p id="wd-calculator-error" className="rounded bg-red-100 px-3 py-2 text-red-800">
            {error}
          </p>
        )}
      </div>
      <hr />
    </div>
  );
}
