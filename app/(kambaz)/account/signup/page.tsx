"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { emptyUser, useAccountContext } from "../AccountContext";
import * as client from "../client";

const field = "mb-2 w-full rounded border border-neutral-300 px-3 py-2";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useAccountContext();
  const [error, setError] = useState("");
  const router = useRouter();

  const signup = async () => {
    if (!username || !password) return;
    try {
      // the server assigns the _id and stores the new user in the session
      const { _id: _unused, ...fields } = emptyUser;
      void _unused;
      const current = await client.signup({
        ...fields,
        username,
        password,
        role: "STUDENT",
      });
      setCurrentUser(current);
      router.push("/account/profile");
    } catch (e) {
      setError(
        axios.isAxiosError(e)
          ? (e.response?.data?.message ?? e.message)
          : String(e),
      );
    }
  };

  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Sign up</h3>
      {error && (
        <p
          id="wd-signup-error"
          className="mb-2 rounded bg-red-100 px-3 py-2 text-red-800"
        >
          {error}
        </p>
      )}
      <input
        id="wd-username"
        placeholder="username"
        className={`wd-username ${field}`}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className={`wd-password ${field}`}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="button"
        onClick={signup}
        id="wd-signup-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign up
      </button>{" "}
      <Link href="/account/signin" id="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}
