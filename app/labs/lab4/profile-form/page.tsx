"use client";

import ProfileForm from "../profile/ProfileForm";
import ContextProfileForm from "../context/ContextProfileForm";
import ZustandProfileForm from "../zustand/ZustandProfileForm";

export default function ProfileFormPage() {
  return (
    <div id="wd-lab4-profile-form" className="grid gap-8 p-4 lg:grid-cols-3">
      <ProfileForm />
      <ContextProfileForm />
      <ZustandProfileForm />
    </div>
  );
}
