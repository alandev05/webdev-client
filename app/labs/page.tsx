import Link from "next/link";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <p id="wd-labs-author">
        Alan Nguyen{" "}
        <a
          href="https://github.com/alandev05/webdev-client"
          id="wd-github"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </p>
      <p id="wd-labs-server">
        <a
          href="https://github.com/alandev05/webdev-server"
          id="wd-server-github"
          target="_blank"
          rel="noreferrer"
        >
          Node Server Github
        </a>{" "}
        |{" "}
        <a
          href={HTTP_SERVER}
          id="wd-server-root"
          target="_blank"
          rel="noreferrer"
        >
          Deployed Node Server
        </a>
      </p>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link">
            Lab 4: Managing Client State
          </Link>
        </li>
        <li>
          <Link href="/labs/lab5" id="wd-lab5-link">
            Lab 5: HTTP Servers
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
      </ul>
    </div>
  );
}
