"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
export type User = {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  loginId: string;
  section: string;
  lastActivity: string;
  totalActivity: string;
  dob?: string;
};

export const emptyUser: User = {
  _id: "",
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "STUDENT",
  loginId: "",
  section: "",
  lastActivity: "",
  totalActivity: "",
};

type AccountContextValue = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
};

const AccountContext = createContext<AccountContextValue | null>(null);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  return (
    <AccountContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  const value = useContext(AccountContext);
  if (!value) {
    throw new Error("useAccountContext must be used inside AccountProvider");
  }
  return value;
}
