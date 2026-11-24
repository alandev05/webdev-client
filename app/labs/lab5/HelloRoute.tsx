"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
export default function HelloRoute() {
  const [hello, setHello] = useState<{ message?: string }>({});
  useEffect(() => {
    client.fetchHello().then(setHello).catch(() => setHello({}));
  }, []);
  return (
    <div id="wd-hello-route">
      <h3>GET /api/lab5/hello (Next.js Route Handler)</h3>
      <pre className="rounded bg-neutral-100 p-2 text-sm">
        {JSON.stringify(hello, null, 2)}
      </pre>
      <hr />
    </div>
  );
}
