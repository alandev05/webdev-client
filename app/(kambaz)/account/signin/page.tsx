"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";
import { useUsersStore } from "../../store/usersStore";

const field = "mb-2 w-full rounded border border-neutral-300 px-3 py-2";

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { setCurrentUser } = useAccountContext();
  const users = useUsersStore((state) => state.users);
  const router = useRouter();

  const signin = () => {
    const user = users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password,
    );
    if (!user) return;
    setCurrentUser(user);
    router.push("/dashboard");
  };

  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Sign in</h3>
      <input
        placeholder="username"
        id="wd-username"
        className={`wd-username ${field}`}
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        placeholder="password"
        type="password"
        id="wd-password"
        className={`wd-password ${field}`}
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button
        type="button"
        onClick={signin}
        id="wd-signin-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign in
      </button>
      <Link href="/account/signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
